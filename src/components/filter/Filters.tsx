'use client'
import IconCheck from '@/assets/icons/check-filter.svg'
import IconArrow from '@/assets/icons/filter/arrow-down-filter.svg'
import { filters } from '@/data/filter/filters.type'
import { useState } from 'react'
export type FilterProps = {
	isOpen: boolean
}

const Filters = ({ isOpen }: FilterProps) => {
	const [openIds, setOpenIds] = useState<number[]>([]) // массив открытых фильтров

	const toggleOpen = (id: number) => {
		setOpenIds(
			prev =>
				prev.includes(id)
					? prev.filter(openId => openId !== id) // если уже открыт — закрыть
					: [...prev, id] // иначе добавить в список открытых
		)
	}
	return (
		<section
			className={`${
				isOpen ? 'block' : 'max-lg:hidden'
			} p-[24px] border border-[#e4e4e4] rounded-2xl shadow-[0_4px_15px_0_rgba(8,15,52,0.08)]`}
		>
			{/* header */}
			<div className='flex justify-between items-center mb-[32px]'>
				{/* title */}
				<div className='font-bold text-2xl text-[#1a1a1a]'>Filters</div>
				{/* clear */}
				<div className='font-dmSans font-medium text-sm text-[#0a58ca] underline'>
					Clear all filters
				</div>
			</div>
			{/* filter */}
			<div className='space-y-[24px]'>
				{filters.map(filter => {
					const isOpen = openIds.includes(filter.id)
					return (
						<div
							key={filter.id}
							className='border-b border-[#e5e5e5] pb-[24px]'
						>
							{/* filter-header */}
							<div className='flex justify-between items-center mb-[16px]'>
								{/* filter-title */}
								<div className='flex items-center gap-x-[8px]'>
									<filter.icon className='w-[24px]' />
									<div className='font-dmSans font-medium text-xl text-[#303030]'>
										{filter.title}
									</div>
								</div>
								{/* filter-arrow */}
								<IconArrow
									className={`${
										isOpen ? 'rotate-[90deg]' : ''
									} w-[24px] h-[24px] cursor-pointer transition-all duration-300`}
									onClick={() => toggleOpen(filter.id)}
								/>
							</div>
							{/* filter-body */}
							<div className={`${isOpen ? 'hidden' : 'block'} space-y-[12px]`}>
								{filter.options.map(option => (
									<label
										key={option.id}
										htmlFor={option.id}
										className='font-dmSans text-base text-[#303030] relative flex items-center gap-x-[16px] gap-y-[12px]'
									>
										<input
											type='checkbox'
											name={option.id}
											id={option.id}
											className='sr-only peer'
										/>
										<div className='w-8 h-8 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:border-blue-600 transition-colors cursor-pointer'></div>
										<IconCheck className='absolute left-[7px] top-[8px] z-10 w-[18px] cursor-pointer hidden peer-checked:block' />
										{option.label}
									</label>
								))}
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Filters
