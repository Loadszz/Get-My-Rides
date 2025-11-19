import picture from '@/assets/images/sections/common/why-book.jpg'
import { Star } from '@/components/ui/Star'
import { whyBookProps } from '@/data/whyBook.types'
import Image from 'next/image'

interface IWhyBookProps {
	variants?: 'varna-cro'
}

const WhyBook = ({ variants }: IWhyBookProps) => {
	return (
		<section
			className={`${
				variants === 'varna-cro' ? 'py-[156px] max-md:pb-[48px]' : 'pt-[88px]'
			} max-md:pt-[72px]`}
		>
			<div className='__container'>
				{/* header */}
				<div
					className={`${
						variants === 'varna-cro' ? 'text-left' : 'text-center mx-auto'
					} max-w-[906px] mb-[48px] max-md:text-left max-md:mb-[24px]`}
				>
					{/* title */}
					<div className='h2 mb-[16px]'>Why Book with Get My Rides?</div>
					{/* description */}
					<div className='font-dmSans text-base text-[#1a1a1a]'>
						Unlike large booking sites that only promote global chains, we work
						directly with <b>trusted local car rental providers</b> as well as
						international brands. This means:
					</div>
				</div>
				{/* body */}
				<div className='flex justify-between gap-[32px] max-lg:flex-col-reverse max-md:gap-[24px]'>
					{/* column-left */}
					<div className='flex-[0_0_404px] space-y-[24px] max-lg:flex-[0_0_auto]'>
						{whyBookProps.map(item => (
							<div key={item.id} className='space-y-[20px]'>
								{/* header */}
								<div className='flex items-center gap-x-[8px]'>
									{/* icon */}
									<item.icon className='w-[24px] shrink-0' />
									{/* title */}
									<div className='font-dmSans font-medium text-xl text-[#1a1a1a]'>
										{item.title}
									</div>
								</div>
								{/* text */}
								<div className='font-dmSans text-base text-[#757575]'>
									{item.text}
								</div>
							</div>
						))}
					</div>
					{/* column-right */}
					<div className='relative flex-[0_1_849px] max-lg:flex-[0_0_100%]'>
						{/* image */}
						<Image
							src={picture}
							width={849}
							height={528}
							alt='why-book'
							className='w-full h-full object-cover rounded-3xl max-sm:h-[436px] max-sm:object-left'
						/>
						{/* body */}
						<div className='absolute bottom-[16px] right-[16px] p-[26px] w-[388px] space-y-[14px] bg-white rounded-2xl max-md:p-[16px] max-md:w-[327px] max-md:space-y-[8px] max-md:bottom-[8px] max-md:right-[8px]'>
							{/* text */}
							<div className='font-dmSans text-base text-[#1a1a1a]'>
								By combining the convenience of online booking with the
								flexibility of local operators, <b>Get My Rides</b> gives you a
								better way to rent a car - <b>cheaper, faster,</b> and{' '}
								<b>stress-free.</b>
							</div>
							{/* rating */}
							<div className='flex items-center gap-[8px]'>
								{/* star */}
								<div className='flex gap-[6px]'>
									<Star rating={5} className='w-[17px]' />
								</div>
								{/* text */}
								<div className='font-dmSans text-sm text-[#1a1a1a] underline unde underline-offset-2 max-md:text-xs'>
									Trusted by <b>35,000+</b> travellers
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyBook
