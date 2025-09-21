import ArrowRight from '@/assets/icons/arrow-right.svg'
import { Nav } from '@/components/nav/Nav'
import { SocialIcons } from '@/components/social/SocialIcons'
import { Logo } from '@/components/ui/Logo'

export const Footer = () => {
	return (
		<footer className='bg-[#1a1a1a]'>
			<div className='__container'>
				{/* body */}
				<div className='flex justify-between pt-[48px] pb-[40px] relative after:absolute after:bottom-0 after:border-b-[1px] after:w-screen after:left-[50%] after:translate-x-[-50%] after:bg-white after:opacity-[0.08] max-md:flex-col max-md:items-center max-md:text-center max-md:pt-[40px] max-md:pb-[24px] max-sm:items-start max-sm:text-start'>
					{/* block-1 */}
					<div className='max-md:mb-[48px]'>
						<Logo className='mb-[40px]' />
						<div className='max-w-[215px]'>
							<p className='font-dmSans text-sm mb-[30px]'>
								Car Rental Comparison and Booking Platform
							</p>
							<p className='font-dmSans text-sm font-bold'>
								The Place to Get Your Rides!
							</p>
						</div>
					</div>
					{/* line-1 */}
					<div className='absolute border-r left-[27.5%] bottom-[0px] h-[320px] bg-white opacity-[0.08] max-lg:left-[31.5%]  max-md:w-full max-md:h-[1px] max-md:left-0 max-md:top-[31%]'></div>
					{/* block-2 */}
					<div className='max-md:mb-[48px]'>
						<div className='font-dmSans text-xl font-bold mb-[24px]'>
							Quick Links
						</div>
						<Nav
							ulClassName='flex flex-col gap-y-[16px]'
							liClassName='inline-block text-sm opacity-[0.67]'
						/>
					</div>
					{/* line-2 */}
					<div className='absolute border-r right-[42%] bottom-[0px] h-[320px] bg-white opacity-[0.08] max-xl:right-[47%] max-lg:right-[43%] max-md:w-full max-md:h-[1px] max-md:left-0 max-md:bottom-[34%]'></div>
					{/* block-3 */}
					<div>
						<div className='font-dmSans font-bold text-xl mb-[24px]'>
							Subscribe For Fresh News
						</div>
						<div className='relative mb-[32px] max-md:mb-[24px]'>
							<input
								type='text'
								placeholder='Email'
								className='w-[415px] h-[64px] pl-[24px] pr-[188px] bg-[#2b2b2b] rounded-[14px] outline-none resize-input'
							/>
							<button
								type='button'
								className='absolute top-[50%] translate-y-[-50%] right-[4px] font-dmSans font-medium text-base bg-[#0a58ca] rounded-xl py-[16px] pl-[43px] pr-[77px] w-[159px] resize-button'
							>
								<ArrowRight className='absolute right-[43px] w-[24px] max-lg:right-[10px] max-md:right-[43px] max-sm:right-[28px]' />
								Send
							</button>
						</div>
						<div>
							<div className='font-dmSans font-bold text-xl mb-[24px] max-md:mb-[20px]'>
								Social media
							</div>
							<SocialIcons />
						</div>
					</div>
				</div>
				{/* footer */}
				<div className='font-dmSans text-sm opacity-[0.67] text-center py-[16px] max-md:pt-[24px]'>
					© 2025 GetMyRides. All rights reserved.
				</div>
			</div>
		</footer>
	)
}
