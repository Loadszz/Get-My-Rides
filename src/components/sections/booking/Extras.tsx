'use client'
import extras from '@/assets/images/sections/booking/extras.jpg'
import { servicesProps } from '@/data/booking/extras.type'
import Image from 'next/image'
import { useState } from 'react'

const Extras = () => {
	const [value, setValue] = useState(0)

	const handleClick = (type: 'plus' | 'minus') => {
		setValue(prev => {
			if (type === 'plus') return prev + 1
			if (type === 'minus' && prev > 0) return prev - 1
			return prev
		})
	}
	return (
		<section className='border-b border-[#e5e5e5] py-[40px] max-md:py-[24px]'>
			{/* body */}
			<div>
				{/* title */}
				<div className='title-booking mb-[24px] max-md:mb-[16px]'>Extras</div>
				<div className='mb-[32px] max-md:mb-[20px]'>
					{/* description */}
					<div className='font-dmSans text-base text-[#1a1a1a] mb-[16px] max-md:text-sm'>
						Child seats, additional drivers, connectivity devices.
					</div>
					{/* image */}
					<Image
						src={extras}
						width={461}
						height={232}
						alt='extras'
						className='mb-[24px] max-md:mb-[16px]'
					/>
					{/* text */}
					<div className='font-dmSans text-base text-[#1a1a1a] max-md:text-sm'>
						Some requests are subject to availability and cannot be guaranteed
						until you arrive. We'll request your extras with Varna rentals and
						you will be able to pay for them during pick-up.
					</div>
				</div>
				{/* services */}
				<div className='flex flex-wrap justify-between gap-y-[37px] mb-[18px] max-md:flex-col max-md:gap-y-[16px]'>
					{servicesProps.map(item => (
						<div
							key={item.id}
							className='flex-[0_1_46%] py-[16px] pl-[16px] border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C]'
						>
							{/* services-title */}
							<div className='flex gap-x-[9px] mb-[8px]'>
								<div className='font-dmSans font-bold text-base text-[#1a1a1a]'>
									Additional driver
								</div>
								<div className='relative group cursor-pointer'>
									<item.icon className='w-[16px]' />
									<div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-gray-800 text-white text-sm text-center rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
										{item.textIcon}
									</div>
								</div>
							</div>
							{/* services-description */}
							<div className='text-sm text-[#757575] mb-[16px]'>
								{item.description}
							</div>
							{/* services-price */}
							<div className='flex items-center gap-x-[8px]'>
								<div
									className={`${
										value > 0 ? 'bg-[#d0e3ff]' : 'bg-transparent'
									} flex justify-center gap-x-[8px] py-[4px] px-[8px] border border-[#0a58ca] rounded-2xl`}
								>
									<span
										onClick={() => handleClick('minus')}
										className='text-base text-[#1a1a1a] cursor-pointer select-none'
									>
										-
									</span>
									<div className='font-dmSans text-base text-[#1a1a1a] w-[24px] text-center'>
										{value}
									</div>
									<span
										onClick={() => handleClick('plus')}
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
