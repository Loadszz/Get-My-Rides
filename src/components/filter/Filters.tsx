'use client'
import IconCheck from '@/assets/icons/check-filter.svg'
import IconArrow from '@/assets/icons/filter/arrow-down-filter.svg'
import { Button } from '@/components/ui/Button'
import { filters } from '@/data/filter/filters.type'
import { useState } from 'react'

export type FilterProps = {
	isOpen: boolean
	onChange?: (filtersState: Record<string, string[]>) => void
	handleFilter: () => void
}

const Filters = ({ isOpen, onChange, handleFilter }: FilterProps) => {
	const [openIds, setOpenIds] = useState<number[]>([filters[0].id])
	const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>(
		{}
	)

	const toggleOpen = (id: number) => {
		setOpenIds(prev =>
			prev.includes(id) ? prev.filter(openId => openId !== id) : [...prev, id]
		)
	}

	const handleFilterChange = (key: string, value: string) => {
		setActiveFilters(prev => {
			const prevValues = prev[key] || []
			const newValues = prevValues.includes(value)
				? prevValues.filter(v => v !== value)
				: [...prevValues, value]
			const newState = { ...prev, [key]: newValues }
			setTimeout(() => onChange?.(newState)) // чтобы избежать setState во время render
			return newState
		})
	}
	const handleClearAll = () => {
		setActiveFilters({})
		onChange?.({})
		if (window.innerWidth < 1024) {
			handleFilter()
		}
	}

	return (
		<div
			className={`${
				isOpen ? 'flex flex-col' : 'max-lg:hidden'
			} p-[24px] border border-[#e4e4e4] rounded-2xl shadow-[0_4px_15px_0_rgba(8,15,52,0.08)]  max-lg:m-0 z-1`}
		>
			<div className='flex justify-between items-center mb-[32px]'>
				<div className='font-bold text-2xl text-[#1a1a1a]'>Filters</div>
				<div
					className='font-dmSans font-medium text-sm text-[#0a58ca] underline cursor-pointer'
					onClick={handleClearAll}
				>
					Clear all filters
				</div>
			</div>
			<div className='space-y-[24px]'>
				{filters.map(filter => {
					const filterOpen = openIds.includes(filter.id)
					return (
						<div
							key={filter.id}
							className='border-b border-[#e5e5e5] pb-[24px] lg:last:border-none lg:last:pb-0 max-lg:last:mb-[20px]'
						>
							<div
								className='flex justify-between items-center mb-[16px] cursor-pointer'
								onClick={() => toggleOpen(filter.id)}
							>
								<div className='flex items-center gap-x-[8px]'>
									<filter.icon className='w-[24px]' />
									<div className='font-dmSans font-medium text-xl text-[#303030]'>
										{filter.title}
									</div>
								</div>
								<IconArrow
									className={`${
										filterOpen ? 'rotate-[180deg]' : ''
									} h-[24px] transition-all duration-300`}
								/>
							</div>
							<div
								className={`${filterOpen ? 'block' : 'hidden'} space-y-[12px]`}
							>
								{filter.options.map(option => (
									<div
										key={option.id}
										className='font-dmSans text-base text-[#303030] flex items-center gap-x-[16px]'
									>
										<label htmlFor={option.id} className='relative'>
											<input
												type='checkbox'
												name={option.id}
												id={option.id}
												checked={
													activeFilters[filter.key]?.includes(option.value) ||
													false
												}
												onChange={() =>
													handleFilterChange(filter.key, option.value)
												}
												className='sr-only peer'
											/>
											<div className='w-8 h-8 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:border-blue-600 transition-colors cursor-pointer'></div>
											<IconCheck className='absolute left-[7px] top-[8px] z-1 w-[18px] hidden peer-checked:block pointer-events-none' />
										</label>
										<span>{option.label}</span>
									</div>
								))}
							</div>
						</div>
					)
				})}
			</div>
			<Button
				type='button'
				variant='secondary'
				className='py-[16px] rounded-xl lg:hidden'
				onClick={handleFilter}
			>
				Apply
			</Button>
		</div>
	)
}

export default Filters
