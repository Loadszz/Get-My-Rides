import IconClock from '@/assets/icons/contact/clock.svg'
import IconMail from '@/assets/icons/contact/mail.svg'
import CompanyDetails from '@/components/common/CompanyDetails'
import Hero from '@/components/common/Hero'
import ContactForm from '@/components/sections/contact/ContactForm'
import Link from 'next/link'
const page = () => {
	return (
		<>
			<Hero
				bgImage='/images/sections/contact/hero-bg.jpg'
				title={<h1 className='h1'>Contact Us</h1>}
				description={
					<div className='font-dmSans text-base max-w-[360px] mx-auto max-md:mx-0'>
						We're here to help you with any questions about using{' '}
						<b>Get My Rides</b> or managing your bookings.
					</div>
				}
				className='pt-[216px] pb-[96px] max-md:py-[128px]'
				bodyClassName='space-y-[24px] max-w-[906px] max-md:space-y-[16px] max-md:text-left'
			/>
			{/* customer-support */}
			<section className='pt-[56px] max-md:pt-[32px]'>
				<div className='__container'>
					{/* body */}
					<div className='flex justify-between items-center gap-[24px] max-lg:flex-col max-lg:items-stretch'>
						{/* column-left */}
						<div className='space-y-[24px]'>
							{/* header */}
							<div className='space-y-[32px]'>
								{/* title */}
								<div className='h2'>Customer Support</div>
								{/* text */}
								<div className='font-bold text-lg text-[#1a1a1a]'>
									Email Support (Bookings & Platform Help)
								</div>
							</div>
							{/* footer */}
							<ul className='font-dmSans text-base text-[#1a1a1a] space-y-[16px]'>
								<li className='flex items-start gap-x-[8px]'>
									<IconMail className='w-[24px] shrink-0' />
									<a href='mailto:support@getmyrides.com'>
										support@getmyrides.com
									</a>
								</li>
								<li className='flex items-start gap-x-[8px]'>
									<IconClock className='w-[24px] shrink-0' />
									<span>
										We usually respond within <b>24 hours</b> on business days.
									</span>
								</li>
							</ul>
						</div>
						{/* column-right */}
						<div className='bg-[#f5f5f5] py-[24px] px-[32px] space-y-[16px] rounded-2xl max-md:p-[16px]'>
							{/* wrapper */}
							<div className='space-y-[24px]'>
								{/* header */}
								<div className='space-y-[16px]'>
									{/* title */}
									<div className='font-dmSans font-bold text-xl text-[#1a1a1a]'>
										Important:
									</div>
									{/* sub-title */}
									<div className='font-dmSans text-base text-[#1a1a1a]'>
										For <b>rental-related issues</b> such as:
									</div>
								</div>
								{/* list */}
								<ul className='grid grid-cols-2 gap-y-[16px] font-dmSans text-base text-[#1a1a1a] border-b border-[#dadada] pb-[16px] max-md:grid-cols-1'>
									<li className='list-disc list-outside [text-indent:-0.4rem] ml-[18px]  marker:text-[#0a58ca]'>
										Vehicle pick-up or drop-off
									</li>
									<li className='list-disc list-outside [text-indent:-0.4rem] ml-[18px]  marker:text-[#0a58ca]'>
										Deposits and payments on site
									</li>
									<li className='list-disc list-outside [text-indent:-0.4rem] ml-[18px]  marker:text-[#0a58ca]'>
										Insurance coverage
									</li>
									<li className='list-disc list-outside [text-indent:-0.4rem] ml-[18px]  marker:text-[#0a58ca]'>
										Roadside assistance or accidents
									</li>
								</ul>
							</div>
							{/* text */}
							<div className='font-dmSans text-base text-[#1a1a1a] max-w-[586px]'>
								Please contact your <b>car rental provider directly</b> using
								the details in your booking confirmation email.
							</div>
						</div>
					</div>
				</div>
			</section>
			<ContactForm />
			{/* partnerships-media-inquiries */}
			<section className='pt-[114px] max-md:pt-[72px]'>
				<div className='__container'>
					{/* body */}
					<div className='flex items-center justify-between gap-[24px] max-lg:flex-col max-lg:items-stretch'>
						{/* column-left */}
						<div className='flex-[0_0_auto] space-y-[32px] max-md:space-y-[24px]'>
							{/* header */}
							<div className='space-y-[24px] max-md:space-y-[16px]'>
								{/* title */}
								<div className='h2'>Frequently Asked Questions</div>
								{/* link */}
								<div className='font-dmSans text-base text-[#1a1a1a]'>
									Check our{' '}
									<Link
										href='#'
										className='font-bold text-[#0a58ca] underline underline-offset-2'
									>
										FAQ page
									</Link>{' '}
									for answers to:
								</div>
							</div>
							{/* list */}
							<ul className='grid grid-cols-2 gap-y-[16px] font-dmSans text-base text-[#1a1a1a] max-md:grid-cols-1'>
								<li className='list-disc list-outside [text-indent:-0.4rem] ml-[18px]  marker:text-[#0a58ca]'>
									How to modify or cancel a booking
								</li>
								<li className='list-disc list-outside [text-indent:-0.4rem] ml-[18px]  marker:text-[#0a58ca]'>
									Driver license and age requirements
								</li>
								<li className='list-disc list-outside [text-indent:-0.4rem] ml-[18px]  marker:text-[#0a58ca]'>
									Insurance and deposit rules
								</li>
								<li className='list-disc list-outside [text-indent:-0.4rem] ml-[18px]  marker:text-[#0a58ca]'>
									Roadside assistance or accidents
								</li>
							</ul>
						</div>
						{/* column-right */}
						<div className='flex-[0_1_676px] bg-[#f5f5f5] py-[24px] px-[32px] rounded-2xl max-lg:flex-[0_0_100%] max-md:p-[16px]'>
							{/* title */}
							<div className='h2 mb-[32px] max-md:mb-[16px] max-sm:max-w-[300px]'>
								Partnerships & Media Inquiries
							</div>
							{/* sub-title */}
							<div className='font-dmSans font-medium text-lg text-[#1a1a1a] mb-[24px] max-md:text-base max-md:mb-[16px]'>
								For business partnerships, affiliates, or media requests:
							</div>
							{/* email */}
							<div className='flex items-start gap-x-[8px] font-dmSans text-base text-[#1a1a1a]'>
								<IconMail className='w-[24px] shrink-0' />
								<a href='mailto:support@getmyrides.com'>
									partners@getmyrides.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<CompanyDetails title='Company Details' variant='contact' />
		</>
	)
}

export default page
