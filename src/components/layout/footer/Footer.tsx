'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import { Nav } from '@/components/nav/Nav'
import { SocialIcons } from '@/components/social/SocialIcons'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { Star } from '@/components/ui/Star'
import { paymentLogosProps } from '@/data/footer/paymentLogos'
import { footerLinks } from '@/data/navLinks'
import { SubmitHandler, useForm } from 'react-hook-form'

type SubscribeFormValues = {
	email: string
}
const Footer = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<SubscribeFormValues>()

	const onSubmit: SubmitHandler<SubscribeFormValues> = data => {
		console.log('📧 Email submitted:', data)
		alert(`Email submitted: ${data.email}`)
		reset()
	}
	return (
		<footer className='bg-[#1a1a1a]'>
			<div className='__container'>
				{/* body-top */}
				<div className='grid grid-cols-[192px_auto_auto] justify-between pt-[48px] pb-[40px] relative after:absolute after:bottom-0 after:border-b-[1px] after:w-screen after:left-[50%] after:translate-x-[-50%] after:bg-white after:opacity-[0.08] max-lg:grid-cols-1 max-lg:justify-center max-lg:items-center max-lg:text-center max-md:pt-[40px] max-md:pb-[24px] max-sm:items-start max-sm:text-start'>
					{/* column-1 */}
					<div className='relative max-lg:mb-[48px] before:absolute before:border-r before:right-[-100px] before:bottom-[-40px] before:h-[320px] before:bg-white before:opacity-[0.08] max-2xl:before:right-[-50px] max-xl:before:right-[-30px] max-lg:before:border-b max-lg:before:left-0 max-lg:before:bottom-[-24px] max-lg:w-full max-lg:before:h-[1px]'>
						{/* logo */}
						<Logo className='inline-block mb-[14px]' />
						{/* star */}
						<div className='flex gap-[8px] mb-[24px] max-lg:justify-center max-sm:justify-start'>
							<div className='flex gap-[6px]'>
								<Star rating={5} className='w-[17px]' />
							</div>
							<div className='font-dmSans text-sm font-bold'>9.7/10 </div>
						</div>
						{/* content */}
						<div className='font-dmSans text-sm space-y-[28px]'>
							<p>Car Rental Comparison and Booking Platform</p>
							<p className='font-bold'>The Place to Get Your Rides!</p>
						</div>
					</div>
					{/* column-2 */}
					<div className='max-lg:mb-[56px]'>
						<div className='font-dmSans text-xl font-bold mb-[24px]'>
							Quick Links
						</div>
						<Nav
							links={footerLinks}
							ulClassName='grid grid-cols-[121px_108px] gap-x-[96px] gap-y-[16px] max-2xl:gap-x-[40px] max-lg:justify-center max-sm:justify-start'
							linkClassName='text-sm opacity-[0.67] transform-all duration-300 hover:opacity-100'
						/>
					</div>
					{/* column-3 */}
					<div className='relative before:absolute before:border-r before:left-[-90px] before:bottom-[-40px] before:h-[320px] before:bg-white before:opacity-[0.08] max-2xl:before:left-[-50px] max-xl:before:left-[-30px] max-lg:before:border-t max-lg:before:right-0 max-lg:before:top-[-24px] max-lg:w-full max-lg:before:h-[1px]'>
						<div className='font-dmSans font-bold text-xl mb-[24px]'>
							Subscribe For Fresh News
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='relative w-[415px] mx-auto mb-[32px] max-sm:mb-[24px] max-sm:w-[343px] max-sm:mx-0'
						>
							<input
								type='email'
								placeholder='Email'
								{...register('email', { required: 'Email is required' })}
								className='w-full h-[64px] pl-[24px] pr-[188px] bg-[#2b2b2b] rounded-[14px] outline-none max-sm:pr-[158px]'
							/>
							<Button
								type='submit'
								variant='secondary'
								className='absolute top-[50%] translate-y-[-50%] right-[4px] flex justify-center py-[16px] w-[159px] rounded-xl max-md:w-[159px] max-sm:w-[130px]'
							>
								<span className='mr-[10px]'>Send</span>
								<ArrowRight className='w-[24px]' />
							</Button>
							{errors.email && (
								<p className='absolute text-red-500 text-sm mt-1'>
									{errors.email.message}
								</p>
							)}
						</form>
						<div>
							<div className='font-dmSans font-bold text-xl mb-[24px] max-md:mb-[20px]'>
								Social media
							</div>
							<SocialIcons />
						</div>
					</div>
				</div>
				{/* body-bottom */}
				<div className='flex flex-col py-[28px] gap-[26px] relative after:absolute after:bottom-0 after:border-b-[1px] after:w-screen after:left-[50%] after:translate-x-[-50%] after:bg-white after:opacity-[0.08] max-md:flex-col-reverse max-md:pt-[24px] max-md:pb-[32px]'>
					{/* logo */}
					<ul className='grid grid-flow-col gap-[30px] max-2xl:grid-flow-row max-2xl:grid-cols-5 max-2xl:place-items-center max-2xl:gap-[50px] max-lg:grid-cols-2 max-md:gap-x-[24px]'>
						{paymentLogosProps.map(item => (
							<li key={item.id}>
								{item.iconMobile ? (
									<>
										<item.icon className='h-[35px] max-md:hidden' />
										<item.iconMobile className='h-[35px] hidden max-md:block' />
									</>
								) : (
									<item.icon className='h-[35px]' />
								)}
							</li>
						))}
					</ul>
					{/* text */}
					<div className='font-dmSans text-base text-white/67 text-center'>
						Get My Rides is a car rental comparison and booking platform founded
						in 2025 in Varna, Bulgaria. Our mission is simple: make renting a
						car fast, transparent, and affordable. We bring together offers from
						trusted local and international rental companies that you won’t
						always find on the big marketplaces. With years of global travel
						experience across Europe, Australia, the US, and Asia, our team
						understands what travelers need most: reliable cars, clear pricing,
						and flexible service. Whether you`re booking a weekend city trip or
						a long coastal holiday, Get My Rides makes it easy to compare, book,
						and hit the road with confidence.
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
export default Footer
