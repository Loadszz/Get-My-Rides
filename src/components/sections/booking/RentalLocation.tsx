'use client'
import IconCar from '@/assets/icons/car.svg'
import IconClock from '@/assets/icons/clock.svg'
import IconDate from '@/assets/icons/date.svg'
import IconArrow from '@/assets/icons/filter/arrow-down-filter.svg'
import IconLocation from '@/assets/icons/location.svg'
import { formatDateTime } from '@/utils/formatDateTime'
import { useSearchParams } from 'next/navigation'

type Props = {
	isOpen: boolean
	toggle: () => void
}

const RentalLocation = ({ isOpen, toggle }: Props) => {
	const searchParams = useSearchParams()
	const from = searchParams.get('from')
	const to = searchParams.get('to')
	return (
		<section className='pt-[40px] pb-[32px] max-md:py-[24px]'>
			{/* header */}
			<div className='flex justify-between items-center mb-[24px] max-md:mb-[16px]'>
				{/* title */}
				<div className='title-booking'>Rental Location</div>
				{/* arrow */}
				<IconArrow
					onClick={toggle}
					className={`md:hidden w-[24px] cursor-pointer transition-transform duration-300 ${
						isOpen ? 'rotate-180' : 'rotate-0'
					}`}
				/>
			</div>
			{/* body */}
			<div
				className={`${isOpen ? 'flex' : 'hidden'} gap-x-[69px] max-md:flex-col`}
			>
				{/* column */}
				<div className='flex flex-col gap-y-[24px] max-md:gap-y-[16px] max-md:mb-[16px]'>
					<div>
						{/* header */}
						<div className='flex items-center gap-x-[16px] mb-[8px]'>
							{/* icon */}
							<IconLocation className='w-[24px]' />
							{/* title */}
							<div className='font-dmSans text-base text-[#1a1a1a] max-w-[237px]'>
								Hristo Smirnenski 29A
							</div>
						</div>
						{/* link */}
						<a href='#' className='text-xs text-[#0a58ca] underline ml-[40px]'>
							See alternative pickup locations
						</a>
						{/* column-body */}
						<div className='font-dmSans text-base text-[#1a1a1a] not-last:mb-[8px]'></div>
					</div>
					<div>
						{/* header */}
						<div className='flex items-center gap-x-[16px] mb-[8px]'>
							{/* icon */}
							<IconCar className='w-[24px]' />
							{/* title */}
							<div className='font-dmSans text-base text-[#1a1a1a] max-w-[237px]'>
								Serviced by Varna Rentals
							</div>
						</div>
					</div>
					<div>
						{/* header */}
						<div className='flex items-center gap-x-[16px] mb-[8px]'>
							{/* icon */}
							<IconDate className='w-[24px]' />
							{/* title */}
							<div className='font-dmSans text-base text-[#1a1a1a] max-w-[237px]'>
								Pick-up: {formatDateTime(from)}
							</div>
						</div>
						{/* link */}
						<a href='#' className='text-xs text-[#0a58ca] underline ml-[40px]'>
							Change pick-up
						</a>
					</div>
				</div>
				{/* column */}
				<div className='flex flex-col justify-between'>
					<div className='max-md:hidden'>
						{/* header */}
						<div className='flex items-center gap-x-[16px] mb-[8px]'>
							{/* icon */}
							<IconClock className='w-[24px]' />
							{/* title */}
							<div className='font-dmSans text-base text-[#1a1a1a] max-w-[237px]'>
								Hours of operation:
							</div>
						</div>
						{/* body */}
						<div className='font-dmSans text-base text-[#1a1a1a] ml-[40px] flex flex-col gap-y-[8px]'>
							<span>Mon-Fri 7:00 - 10:00</span>
							<span>Sat-Sun 7:00 - 10:00</span>
						</div>
						<a className='text-xs text-[#0a58ca] underline ml-[40px]'></a>
					</div>
					<div>
						{/* header */}
						<div className='flex items-center gap-x-[16px] mb-[8px]'>
							{/* icon */}
							<IconDate className='w-[24px]' />
							{/* title */}
							<div className='font-dmSans text-base text-[#1a1a1a] max-w-[237px]'>
								Drop-off: {formatDateTime(to)}
							</div>
						</div>
						{/* link */}
						<a href='#' className='text-xs text-[#0a58ca] underline ml-[40px]'>
							Change pick-up
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default RentalLocation
