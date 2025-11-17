import IconTickDouble from '@/assets/icons/common/tick-double.svg'
import WhyTravellersBg from '@/assets/images/sections/about-us/why-travellers-choose-us.jpg'
import Advantages from '@/components/common/Advantages'
import CompanyDetails from '@/components/common/CompanyDetails'
import { FAQSection } from '@/components/common/FAQSection'
import Hero from '@/components/common/Hero'
import TrustAndTransparency from '@/components/common/TrustAndTransparency'
import OurMission from '@/components/sections/about-us/OurMission'
import WhereWeOperate from '@/components/sections/about-us/WhereWeOperate'
import { faqAboutUsProps } from '@/data/about-us/faqAboutUs.type'
import Image from 'next/image'

const page = () => {
	return (
		<>
			<Hero
				bgImage='/images/sections/about-us/hero-bg.jpg'
				title={<h1 className='h1'>About Get My Rides</h1>}
				className='pt-[216px] pb-[168px] max-md:pt-[168px] max-md:pb-[176px]'
			/>
			<OurMission />
			<section className='pb-[88px] max-md:pb-[40px]'>
				<div className='__container'>
					{/* header */}
					<div className='max-w-[676px] mb-[48px] max-md:text-left max-md:mb-[24px]'>
						{/* title */}
						<div className='h2 mb-[24px] max-md:mb-[16px]'>
							What Makes Us Different
						</div>
						{/* description */}
						<div className='font-dmSans text-base text-[#1a1a1a]'>
							Get My Rides stands out by offering travellers more choice,
							connecting them with both <b>local providers</b> and global brands
							rather than only the big chains. All prices are shown upfront with{' '}
							<b>no hidden fees,</b> so you always know exactly what you’ll pay.
						</div>
					</div>
					<Advantages />
				</div>
			</section>
			<TrustAndTransparency />
			<WhereWeOperate />
			<section className='pt-[88px] max-md:pt-[44px]'>
				<div className='__container'>
					{/* body */}
					<div className='grid grid-cols-2 gap-x-[16px] max-md:grid-cols-1'>
						{/* column-text */}
						<div className='p-[24px] bg-[#f5f5f5] rounded-2xl space-y-[26px] max-md:p-[16px] max-md:space-y-[24px]'>
							{/* title */}
							<div className='font-dmSans font-bold text-xl text-[#1a1a1a]'>
								Why travellers choose us:
							</div>
							{/* list */}
							<ul className='space-y-[18px] max-w-[510px] max-md:space-y-[16px]'>
								<li className='flex items-start gap-x-[8px]'>
									{/* icon */}
									<IconTickDouble className='w-[24px] shrink-0' />
									{/* text */}
									<span className='font-dmSans font-medium text-base text-[#1a1a1a]'>
										Flexible options: one-way rentals, long-term hires, or
										delivery to your address
									</span>
								</li>
								<li className='flex items-start gap-x-[8px]'>
									{/* icon */}
									<IconTickDouble className='w-[24px] shrink-0' />
									{/* text */}
									<span className='font-dmSans font-medium text-base text-[#1a1a1a]'>
										Direct support from local providers - no call center
										runarounds
									</span>
								</li>
								<li className='flex items-start gap-x-[8px]'>
									{/* icon */}
									<IconTickDouble className='w-[24px] shrink-0' />
									{/* text */}
									<span className='font-dmSans font-medium text-base text-[#1a1a1a]'>
										Trusted by thousands of travelers across Bulgaria and beyond
									</span>
								</li>
							</ul>
						</div>
						{/* column-image */}
						<div className='relative max-md:hidden'>
							<Image
								src={WhyTravellersBg}
								fill
								unoptimized
								alt='Why travellers choose us'
								className='object-cover rounded-2xl'
							/>
						</div>
					</div>
				</div>
			</section>
			<CompanyDetails
				title='Get in Touch'
				description={
					<div className='font-dmSans text-base text-[#1a1a1a]'>
						Have questions, feedback, or partnership ideas? We`d love to hear
						from you. <br />
						Visit our{' '}
						<a
							href='#'
							className='font-bold text-[#0a58ca] underline underline-offset-2'
						>
							contact page
						</a>{' '}
						to leave a message.
					</div>
				}
				variant='about-us'
			/>
			{/* FAQ */}
			<section className='py-[88px] max-md:pt-[72px] max-md:pb-[88px]'>
				<div className='__container'>
					{/* title */}
					<div className='h2 mb-[56px] max-md:mb-[32px]'>
						Frequently Asked Questions
					</div>
					<FAQSection faqProps={faqAboutUsProps} type='withoutImage' />
				</div>
			</section>
		</>
	)
}

export default page
