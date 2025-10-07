import ArrowRight from '@/assets/icons/arrow-right.svg'
import IconCalendarCheck from '@/assets/icons/calendar-check.svg'
import IconCalendar from '@/assets/icons/date.svg'
import Map from '@/components/map/Map'
import Choice from '@/components/sections/booking/Choice'
import DriverDetails from '@/components/sections/booking/DriverDetails'
import Extras from '@/components/sections/booking/Extras'
import Policies from '@/components/sections/booking/Policies'
import RentalLocation from '@/components/sections/booking/RentalLocation'
import { Button } from '@/components/ui/Button'
import { products } from '@/data/products.type'
import { redirect } from 'next/navigation'
interface BookingPageProps {
	params: { id: string } | Promise<{ id: string }>
}
const page = async ({ params }: BookingPageProps) => {
	const resolvedParams = await params
	const id = resolvedParams.id
	const product = products.find(p => p.id === Number(id))

	if (!product) {
		redirect('/booking')
	}

	return (
		<div className='__container'>
			{/* body */}
			<div className='flex justify-between gap-x-[40px] max-lg:flex-col'>
				{/* column-left */}
				<div className='flex-[0_1_849px]'>
					<Choice product={product} />
					<RentalLocation />
					<Map />
					<Policies />
					<Extras />
					<DriverDetails />
				</div>
				{/* column-right */}
				<div className='sticky top-0 flex-[0_1_388px] h-full py-[50px] max-md:py-[24px]'>
					{/* information */}
					<section className='mb-[40px] max-md:pb-[24px] max-md:border-b max-md:border-[rgb(229,229,229)] max-md:m-0'>
						{/* body */}
						<div className='py-[24px] pl-[24px] pr-[49px] border border-[#e4e4e4] rounded-2xl shadow-[0_4px_15px_0_rgba(8,15,52,0.08)] max-md:border-none max-md:shadow-none max-md:p-0'>
							{/* title */}
							<div className='text-2xl font-bold text-[#1a1a1a] mb-[24px] max-2xl:max-w-[164px] max-lg:max-w-full max-md:mb-[16px]'>
								Pick-up and Drop-off
							</div>
							{/* item-first */}
							<div className='relative mb-[16px] pl-[60px] before:absolute before:left-0 before:top-[3px] before:w-[16px] before:h-[16px] before:border before:border-[#0a58ca] before:rounded-2xl after:absolute after:left-[7px] after:bottom-[-20px] after:h-full after:border-dashed after:border-l after:border-[#0a58ca] max-md:before:hidden max-md:after:hidden max-md:pl-[40px]'>
								<IconCalendar className='absolute left-0 w-[24px]' />
								<div className='font-dmSans text-base text-[#1a1a1a]'>
									Wednesday, Feb 19th - 11:00 AM
								</div>
								<div className='font-dmSans font-semibold text-sm text-[#1a1a1a] mb-[8px]'>
									Varna Rentals Office
								</div>
								<a href='#' className='text-xs text-[#0a58ca] underline'>
									View pick-up instructions
								</a>
							</div>
							{/* item-second */}
							<div className='relative pl-[60px] before:absolute before:left-0 before:top-[3px] before:w-[16px] before:h-[16px] before:border before:border-[#0a58ca] before:rounded-2xl max-md:before:hidden max-md:pl-[40px]'>
								<IconCalendarCheck className='absolute left-0 w-[24px]' />
								<div className='font-dmSans text-base text-[#1a1a1a]'>
									Wednesday, Feb 19th - 11:00 AM
								</div>
								<div className='font-dmSans font-semibold text-sm text-[#1a1a1a] mb-[8px]'>
									Varna Rentals Office
								</div>
								<a href='#' className='text-xs text-[#0a58ca] underline'>
									View pick-up instructions
								</a>
							</div>
						</div>
					</section>
					{/* price */}
					<section className='mb-[24px] max-md:pt-[24px]'>
						{/* body */}
						<div className='p-[24px] border border-[#e4e4e4] rounded-2xl shadow-[0_4px_15px_0_rgba(8,15,52,0.08)] max-md:border-none max-md:shadow-none max-md:p-0'>
							{/* header */}
							<div className='flex justify-between flex-wrap gap-[14px] mb-[24px]'>
								{/* title */}
								<div className='text-2xl font-bold text-[#1a1a1a]'>
									Price for 8 days
								</div>
								<div className='font-dmSans font-medium text-xs text-[#00ce3e] py-[8px] px-[12px] bg-[#e2ffe8] border border-[#e4e4e4] rounded-2xl'>
									Today`s Best Price
								</div>
							</div>
							{/* item-first */}
							<div className='flex flex-col gap-y-[16px] border-b border-[#e5e5e5] pb-[15px]'>
								<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
									<span>Car rental</span>
									<span>€160</span>
								</div>
								<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
									<span>Child seat</span>
									<span>€40</span>
								</div>
								<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
									<span>Full insurance</span>
									<span>€80</span>
								</div>
							</div>
							{/* item-second */}
							<div className='flex flex-col gap-y-[16px] border-b border-[#e5e5e5] py-[15px] mb-[24px]'>
								<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
									<span>Total</span>
									<span className='font-semibold'>€280</span>
								</div>
								<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
									<span>Pay at pick-up</span>
									<span>€244</span>
								</div>
								<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
									<span>Pay now</span>
									<span>€32</span>
								</div>
							</div>
							<div className='text-sm text-[#1a1a1a] max-w-[670px] mb-[24px]'>
								By clicking Book Now, you are confirming that you have read,
								understood, and accepted our{' '}
								<a className='text-[#0a58ca] underline' href='#'>
									Service Terms
								</a>{' '}
								and{' '}
								<a className='text-[#0a58ca] underline' href='#'>
									Varna Rental Terms and Conditions.
								</a>
							</div>
							<Button
								type='submit'
								variant='secondary'
								className='flex justify-center py-[16px] w-full rounded-[6px]'
							>
								<span className='mr-[10px]'>Book Now</span>
								<ArrowRight className='w-[24px]' />
							</Button>
						</div>
					</section>
					{/* help */}
					<section>
						{/* title */}
						<div className='font-dmSans font-bold text-base text-[#1a1a1a] mb-[16px]'>
							Need Help?
						</div>
						<div className='text-sm text-[#1a1a1a]'>
							Do you have any questions? Check out our{' '}
							<a href='#' className='text-[#0a58ca] underline'>
								Help Center
							</a>{' '}
							or get in touch with{' '}
							<a href='#' className='text-[#0a58ca] underline'>
								Customer Service
							</a>{' '}
							for assistance. You can reach us 24/7.
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default page
