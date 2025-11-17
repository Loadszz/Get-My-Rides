import IconLinkedin from '@/assets/icons/about-us/linkedin.svg'
import picture1 from '@/assets/images/sections/about-us/our-mission-1.jpg'
import picture2 from '@/assets/images/sections/about-us/our-mission-2.jpg'
import picture3 from '@/assets/images/sections/about-us/our-mission-3.jpg'
import Image from 'next/image'

const OurMission = () => {
	return (
		<section className='pt-[56px] pb-[144px] max-md:pt-[32px] max-md:pb-[72px]'>
			<div className='__container'>
				{/* body */}
				<div className='space-y-[88px] max-md:space-y-[72px]'>
					{/* row-1 */}
					<div className='flex justify-between gap-[40px] max-lg:flex-col-reverse max-lg:gap-[16px]'>
						{/* column-content */}
						<div className='flex flex-col justify-center flex-[0_1_676px] space-y-[24px] max-lg:flex-[0_0_auto]'>
							{/* title-desktop */}
							<div className='h2 max-lg:hidden'>Our Mission</div>
							{/* content */}
							<div className='font-dmSans text-base text-[#1a1a1a] space-y-[32px] max-lg:space-y-[24px]'>
								<p>
									At Get My Rides, our mission is to make car rental in Bulgaria
									and across Europe <b>transparent, affordable,</b> and{' '}
									<b>stress-free.</b> 
								</p>
								<p>
									Whether you`re looking for an airport car rental in Varna or
									Sofia, a long-term car hire for an extended stay, or a one-way
									trip across borders, we connect you with <b>trusted local</b>{' '}
									and <b>international providers.</b>
								</p>{' '}
								<p>
									Our goal is simple: to give travelers the freedom to compare
									prices, book securely online, and drive away with confidence -{' '}
									<b>without hidden fees or unpleasant surprises.</b>
								</p>
							</div>
						</div>
						{/* column-image */}
						<div className='relative flex-[0_1_618px] min-h-[456px] max-lg:flex-[0_0_auto] max-md:min-h-[224px]'>
							<Image
								src={picture1}
								fill
								unoptimized
								alt='Our Mission'
								className='object-cover rounded-2xl max-lg:object-top'
							/>
						</div>
						{/* title-mobile */}
						<div className='h2 lg:hidden'>Our Mission</div>
					</div>
					{/* row-2 */}
					<div className='flex flex-row-reverse justify-between gap-[40px] max-lg:flex-col-reverse max-lg:gap-[16px]'>
						{/* column-content */}
						<div className='flex flex-col justify-center flex-[0_1_676px] space-y-[24px] max-lg:flex-[0_0_auto]'>
							{/* title-desktop */}
							<div className='h2 max-lg:hidden'>Why We Started</div>
							{/* content */}
							<div className='font-dmSans text-base text-[#1a1a1a] space-y-[32px] max-lg:space-y-[24px]'>
								<p>
									Like many travelers, we noticed that booking a rental car
									often came with hidden fees, limited options, and confusing
									policies. Large booking sites promote the biggest chains,
									leaving local providers invisible - even when they offer
									better prices and friendlier service.
								</p>
								<p>
									That`s why we built Get My Rides: a platform that gives
									travellers <b>more choice, fair pricing,</b> and the ability
									to rent from <b>trusted local companies</b> as well as global
									brands.
								</p>
							</div>
						</div>
						{/* column-image */}
						<div className='relative flex-[0_1_618px] min-h-[456px] max-lg:flex-[0_0_auto] max-md:min-h-[224px]'>
							<Image
								src={picture2}
								fill
								unoptimized
								alt='Why We Started'
								className='object-cover rounded-2xl max-lg:object-top'
							/>
						</div>
						{/* title-mobile */}
						<div className='h2 lg:hidden'>Why We Started</div>
					</div>
					{/* row-3 */}
					<div className='flex justify-between gap-[40px] max-lg:flex-col-reverse max-lg:gap-[16px]'>
						{/* column-content */}
						<div className='flex flex-col justify-center flex-[0_1_676px] space-y-[24px] max-lg:flex-[0_0_auto]'>
							{/* title-desktop */}
							<div className='h2 max-lg:hidden'>Meet the Founder</div>
							{/* content */}
							<div className='font-dmSans text-base text-[#1a1a1a] space-y-[32px] max-lg:space-y-[24px]'>
								<p>
									Hi, I'm Konstantin Dolgushin, founder of <b>Get My Rides.</b>
								</p>
								<p>
									I've spent more than a decade building online travel and
									marketplace platforms, learning how to make complex services
									<b>simple and reliable</b> for people everywhere. Along the
									way, I`ve also traveled extensively - driving across Europe`s
									coastlines and mountains, navigating the open roads of the
									U.S., exploring Australia, and experiencing travel in places
									as diverse as Thailand and the UAE.
								</p>
								<p>
									These journeys taught me two things: how exciting it is to
									explore the world by car, and how frustrating traditional
									rental processes can be - from hidden fees to confusing rules
									and poor support.
								</p>
								<p>
									I created Get My Rides to change that. By combining digital
									convenience with trusted local expertise, we make renting a
									car <b>fair, transparent, and traveller-friendly</b> - so your
									rental car becomes the easiest part of your trip.
								</p>
							</div>
						</div>
						{/* column-image */}
						<div className='relative flex-[0_1_618px] min-h-[456px] max-lg:flex-[0_0_auto] max-md:min-h-[224px] max-lg:mb-[56px]'>
							<Image
								src={picture3}
								fill
								unoptimized
								alt='Meet the Founder'
								className='object-cover rounded-2xl'
							/>
							{/* info */}
							<div className='absolute bottom-[-40px] flex items-center gap-x-[8px]'>
								{/* title */}
								<div className='font-dmSans font-bold text-base text-[#1a1a1a] max-md:text-[0.813rem] max-md:leading-[1.85]'>
									Konstantin Dolgushin,{' '}
									<span className='font-medium text-[#757575]'>
										Founder of Get My Rides
									</span>
								</div>
								{/* icon */}
								<IconLinkedin className='w-[24px]' />
							</div>
						</div>
						{/* title-mobile */}
						<div className='h2 lg:hidden'>Meet the Founder</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurMission
