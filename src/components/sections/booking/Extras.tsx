'use client'
import IconArrow from '@/assets/icons/common/arrow-down.svg'
import extrasImg from '@/assets/images/sections/booking/extras.jpg'
import { IServicesProps } from '@/data/booking/extras.type'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ExtrasProps {
	selectedExtras: IServicesProps[]
	setSelectedExtras: React.Dispatch<React.SetStateAction<IServicesProps[]>>
	isOpen: boolean
	toggle: () => void
}

const Extras = ({
	selectedExtras,
	setSelectedExtras,
	isOpen,
	toggle,
}: ExtrasProps) => {
	const [extras, setExtras] = useState(
		selectedExtras.map(item => ({ ...item, quantity: item.quantity ?? 0 }))
	)

	useEffect(() => {
		if (setSelectedExtras) {
			setSelectedExtras(extras)
		}
	}, [extras, setSelectedExtras])

	const handleClick = (id: number, type: 'plus' | 'minus') => {
		setExtras(prev =>
			prev.map(item =>
				item.id === id
					? {
							...item,
							quantity:
								type === 'plus'
									? item.quantity + 1
									: Math.max(0, item.quantity - 1),
					  }
					: item
			)
		)
	}

	return (
		<section className='border-b border-[#e5e5e5] py-[40px] max-md:py-[24px]'>
			{/* header */}
			<div className='flex justify-between items-center mb-[24px] max-md:mb-[16px]'>
				{/* title */}
				<div className='title-booking'>Extras</div>
				{/* arrow */}
				<IconArrow
					onClick={toggle}
					className={`md:hidden w-[24px] cursor-pointer transition-transform duration-300 ${
						isOpen ? 'rotate-180' : 'rotate-0'
					}`}
				/>
			</div>
			<div className={`${isOpen ? 'block' : 'hidden'} `}>
				{/* description + image */}
				<div className='mb-[32px] max-md:mb-[20px]'>
					<div className='font-dmSans text-base text-[#1a1a1a] mb-[16px] max-md:text-sm'>
						Child seats, additional drivers, connectivity devices.
					</div>
					<Image
						src={extrasImg}
						width={461}
						height={232}
						alt='extras'
						className='mb-[24px] max-md:mb-[16px]'
					/>
					<div className='font-dmSans text-base text-[#1a1a1a] max-md:text-sm'>
						Some requests are subject to availability and cannot be guaranteed
						until you arrive. We`ll request your extras with Varna rentals and
						you will be able to pay for them during pick-up.
					</div>
				</div>
				{/* services */}
				<div className='flex flex-wrap justify-between gap-y-[37px] mb-[18px] max-md:flex-col max-md:gap-y-[16px]'>
					{extras.map(item => (
						<div
							key={item.id}
							className='flex-[0_1_46%] py-[16px] pl-[16px] border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C]'
						>
							{/* title + tooltip */}
							<div className='flex gap-x-[9px] mb-[8px]'>
								<div className='font-dmSans font-bold text-base text-[#1a1a1a]'>
									{item.title}
								</div>
								<div className='relative group cursor-pointer'>
									<item.icon className='w-[16px]' />
									<div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-gray-800 text-white text-sm text-center rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
										{item.textIcon}
									</div>
								</div>
							</div>

							{/* description */}
							<div className='text-sm text-[#757575] mb-[16px]'>
								{item.description}
							</div>

							{/* quantity + price */}
							<div className='flex items-center gap-x-[8px]'>
								<div
									className={`${
										item.quantity > 0 ? 'bg-[#d0e3ff]' : 'bg-transparent'
									} flex justify-center gap-x-[8px] py-[4px] px-[8px] border border-[#0a58ca] rounded-2xl`}
								>
									<span
										onClick={() => handleClick(item.id, 'minus')}
										className='text-base text-[#1a1a1a] cursor-pointer select-none'
									>
										-
									</span>
									<div className='font-dmSans text-base text-[#1a1a1a] w-[24px] text-center'>
										{item.quantity}
									</div>
									<span
										onClick={() => handleClick(item.id, 'plus')}
										className='text-base text-[#1a1a1a] cursor-pointer select-none'
									>
										+
									</span>
								</div>
								<div className='text-xs text-[#757575]'>
									€{item.price} per day
								</div>
							</div>
						</div>
					))}
				</div>
				{/* info */}
				<div className='text-sm text-[#1a1a1a]'>
					*Will be provided at pick-up if available
				</div>
			</div>
		</section>
	)
}

export default Extras
