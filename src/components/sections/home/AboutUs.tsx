'use client'
import Quotes from '@/assets/icons/quotes.svg'
import StarIcon from '@/assets/icons/star.svg'
import SwiperButtons from '@/components/ui/SwiperButtons'
import { aboutUsCards } from '@/data/aboutUsItem'
import Image from 'next/image'
import { Grid, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const AboutUs = () => {
	return (
		<section className='bg-[#f5f5f5] py-[48px] max-md:py-[32px]'>
			<div className='__container'>
				<div className='flex justify-between items-center mb-[48px] max-sm:mb-[32px]'>
					{/* title */}
					<div className='title max-w-[440px]'>
						What customers are saying about us
					</div>
					{/* swiper-buttons */}
					<SwiperButtons name='about-us' className='max-md:hidden' />
				</div>
			</div>
			{/* body */}
			<div className='flex max-md:mb-[24px]'>
				{/* slider */}
				<Swiper
					slidesPerView='auto'
					grid={{
						rows: 2,
						fill: 'row',
					}}
					spaceBetween={8}
					slidesOffsetAfter={-350}
					speed={300}
					breakpoints={{
						767: {
							spaceBetween: 16,
						},
					}}
					modules={[Grid, Navigation]}
					navigation={{
						prevEl: '.about-us-prev-btn',
						nextEl: '.about-us-next-btn',
					}}
				>
					{aboutUsCards.map((card, index) => (
						<SwiperSlide
							className={`relavite !flex flex-col justify-between !w-[524px]
							bg-white rounded-[16px] py-[24px] pl-[27px] pr-[72px] max-md:!w-[285px] max-md:!h-[240px] max-md:p-[16px]
							${
								index < aboutUsCards.length / 2
									? 'translate-x-[-12%] max-md:translate-x-[-87%]'
									: 'translate-x-[-55%] max-md:translate-x-[-35%]'
							}
						`}
							key={index}
						>
							{/* image */}
							<div className='flex items-center gap-x-[16px] mb-[16px] max-md:gap-x-[12px]'>
								<Image
									src={card.avatar}
									width={64}
									height={64}
									alt={card.name}
									className='rounded-full max-md:w-[48px]'
								/>
								{/* header-item */}
								<div>
									{/* name */}
									<div className='font-dmSans text-base font-semibold text-[#1a1a1a] max-md:text-sm'>
										{card.name}
									</div>
									{/* role */}
									<div className='font-dmSans text-xs text-[#757575]'>
										{card.role}
									</div>
								</div>
							</div>
							{/* text */}
							<div className='text-sm text-[#1a1a1a] mb-[38px] max-md:mb-[16px]'>
								{card.text}
							</div>
							{/* star */}
							<div className='flex gap-x-[8px]'>
								{[1, 2, 3, 4, 5].map(i => (
									<StarIcon
										key={i}
										className={`${
											i <= card.rating ? 'text-[#f3c10e]' : 'text-gray-500'
										} w-[13px]`}
									/>
								))}
							</div>
							{/* icon */}
							<Quotes className='absolute top-[24px] right-[24px] w-[36px] max-md:top-[28px] max-md:right-[16px]' />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<SwiperButtons className={'md:hidden justify-center'} />
		</section>
	)
}
