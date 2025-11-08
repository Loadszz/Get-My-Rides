'use client'
import SwiperButtons from '@/components/ui/SwiperButtons'
import { popularLocationsProps } from '@/data/car-rental/popularLocations.types'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const PopularLocations = () => {
	return (
		<section className='pt-[56px] pb-[88px] max-md:pt-[32px] max-md:pb-[40px]'>
			<div className='__container relative'>
				{/* title */}
				<div className='font-dmSans text-2xl text-[#1a1a1a] mb-[32px] max-md:text-xl max-md:mb-[16px]'>
					Popular <b>car rental locations</b> in <b>Bulgaria</b> include:
				</div>
				{/* body-slider */}
				<Swiper
					slidesPerView='auto'
					spaceBetween={8}
					breakpoints={{
						640: {
							spaceBetween: 16,
						},
					}}
					className='flex relative !overflow-visible'
					modules={[Navigation]}
					navigation={{
						prevEl: '.popular-locations-prev-btn',
						nextEl: '.popular-locations-next-btn',
					}}
				>
					{popularLocationsProps.map(item => (
						<SwiperSlide
							key={item.id}
							className='flex-[0_0_330px] space-y-[16px] max-md:flex-[0_0_285px]'
						>
							{/* image */}
							<div className='relative'>
								<Image
									src={item.image}
									width={330}
									height={224}
									alt={item.city}
									className='object-cover'
								/>
								<div className='absolute top-[16px] right-[16px] flex items-center gap-x-[8px] py-[8px] px-[16px] border border-[rgba(255,255,255,0.56)] bg-[rgba(255,255,255,0.24)] rounded-full'>
									<div>
										<item.icon className='w-[24px]' />
									</div>
									<div className='font-dmSans font-medium text-base'>
										{item.city}
									</div>
								</div>
							</div>
							{/* text */}
							<div className='font-dmSans text-base text-[#757575] max-w-[300px] max-md:max-w-[269px]'>
								{item.text}
							</div>
						</SwiperSlide>
					))}
					<SwiperButtons
						name='popular-locations'
						className='absolute top-[80px] w-full justify-between pointer-events-none max-md:hidden'
						arrowClassName='relative p-[22px] border border-white pointer-events-auto [&.swiper-button-disabled]:opacity-0'
						arrowLeftClassName='left-[-30px]'
						arrowRightClassName='right-[-30px]'
						arrowIconClassName='w-[19px]'
					/>
				</Swiper>
			</div>
		</section>
	)
}

export default PopularLocations
