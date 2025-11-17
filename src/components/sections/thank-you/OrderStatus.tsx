import IconCheck from '@/assets/icons/common/check-white.svg'
import IconClock from '@/assets/icons/common/clock.svg'
import picture from '@/assets/images/sections/thank-you/barcode.jpg'
import { formatDateTime } from '@/utils/formatDateTime'
import Image from 'next/image'
import Link from 'next/link'

interface IOrderStatusProps {
	firstName: string
	lastName: string
	email: string
	phone: string
	name: string
	similar: string
	total: number
	choice?: string
	companyName: string
	address: string
	addressSecond: string
	postalCode: string
	city: string
	country: string
	vatNumber: string
	fromLocation: string
	toLocation: string
	from: string
	to: string
}

const OrderStatus = ({ items }: { items: IOrderStatusProps }) => {
	return (
		<section className='bg-[#0a58ca] pt-[64px] pb-[74px] max-sm:pt-[0] max-sm:pb-[50px] max-sm:bg-transparent'>
			<div className='__container'>
				{/* body */}
				<div className='grid grid-cols-[711px_auto] gap-x-[71px] max-2xl:gap-x-[30px] max-xl:grid-cols-1 max-xl:gap-y-[64px] max-sm:gap-y-[56px]'>
					{/* column-left */}
					<div className='flex justify-between py-[32px] px-[28px] bg-white rounded-2xl max-sm:flex-col max-sm:p-0 max-sm:gap-y-[56px]'>
						{/* item-left */}
						<div className='grid grid-cols-[160px_1fr] gap-x-[30px] font-dmSans text-base text-[#1a1a1a] space-y-[16px] max-sm:gap-x-[10px]'>
							<div className='font-bold'>Driver name:</div>
							<div>{`${items.firstName} ${items.lastName}`}</div>
							<div className='font-bold'>Email address:</div>
							<div>{items.email}</div>
							<div className='font-bold'>Phone number:</div>
							<div>+{items.phone}</div>
							<div className='font-bold'>Pick-up location:</div>
							<div>{items.fromLocation}</div>
							<div className='font-bold'>Pick-up date:</div>
							<div>{formatDateTime(items.from)}</div>
							<div className='font-bold'>Drop-off location:</div>
							<div>{items.toLocation}</div>
							<div className='font-bold'>Drop-off date:</div>
							<div>{formatDateTime(items.to)}</div>
							<div className='font-bold'>Vehicle class:</div>
							<div>{`${items.name} (${items.similar})`}</div>
							<div className='font-bold'>Total price:</div>
							<div>€{items.total}</div>
						</div>
						{/* item-right */}
						<div className='flex flex-col items-stretch max-sm:items-center'>
							{/* number */}
							<div className='font-bold text-[2rem] leading-[1.25] text-[#1a1a1a] max-sm:hidden'>
								8HAR45
							</div>
							{/* barcode */}
							<Image
								src={picture}
								width={122}
								height={122}
								alt='barcode'
								className='mt-auto'
							/>
						</div>
					</div>
					{/* column-right */}
					<div className='space-y-[28px] max-sm:bg-[#0a58ca] max-sm:mx-[-15px] max-sm:py-[50px] max-sm:px-[15px]'>
						{/* body */}
						<div className='space-y-[16px]'>
							{/* title */}
							<div className='font-bold text-[2rem] leading-[1.25]'>
								What's Next?
							</div>
							{/* list */}
							<ul className='font-dmSans text-base space-y-[16px]'>
								<li className='flex items-center gap-x-[10px]'>
									<IconCheck className='w-[24px] shrink-0 text-white' />
									<span>1. Booking received</span>
								</li>
								<li className='flex items-center gap-x-[10px]'>
									<IconClock className='w-[24px] shrink-0 text-white' />
									<span>2. Provider confirms availability</span>
								</li>
								<li className='flex items-center gap-x-[10px]'>
									<IconClock className='w-[24px] shrink-0 text-white' />
									<span>3. Arrive for pick-up</span>
								</li>
							</ul>
							{/* text */}
							<div className='font-dmSans text-base'>
								You will receive a booking confirmation email shortly. Please
								review the pick-up instructions carefully before you arrive. If
								the provider can't confirm, we'll suggest alternative options
								right away.
							</div>
							{/* text */}
							<div className='font-dmSans text-base'>
								Please read the{' '}
								<Link href='#' className='underline underline-offset-4'>
									Frequently Asked Questions
								</Link>{' '}
								for additional information on how to prepare best for each stage
								of your journey.
							</div>
						</div>
						{/* footer */}
						<div className='font-dmSans text-base space-y-[8px]'>
							{/* title */}
							<div className='font-semibold'>Need Help?</div>
							{/* text */}
							<div>
								Do you have any questions? Check out our{' '}
								<Link href='#' className='underline underline-offset-4'>
									Help Center
								</Link>{' '}
								or get in touch with{' '}
								<Link href='#' className='underline underline-offset-4'>
									Customer Service
								</Link>{' '}
								for assistance. You can reach us 24/7.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OrderStatus
