'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import StarIcon from '@/assets/icons/star.svg'
import { Button } from '@/components/ui/Button'
import SwiperButtons from '@/components/ui/SwiperButtons'
import { products } from '@/data/products'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const AvailableCars = () => {
	return (
		<section className='pt-[64px] pb-[146px] max-md:pt-[44px] max-md:pb-[54px]'>
			<div className='__container'>
				<div className='flex justify-between items-center mb-[48px] max-sm:mb-[32px]'>
					{/* title */}
					<div className='title max-lg:max-w-[500px]'>
						Explore the available car fleet
					</div>
					{/* swiper-buttons */}
					<SwiperButtons name='cars' className='max-md:hidden' />
				</div>
				{/* body */}
				<div className='max-md:pb-[22px]'>
					<Swiper
						slidesPerView='auto'
						spaceBetween={8}
						slidesOffsetBefore={2}
						slidesOffsetAfter={2}
						speed={300}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 16,
							},
							992: {
								slidesPerView: 3,
							},
							1220: {
								slidesPerView: 4,
							},
						}}
						modules={[Navigation]}
						navigation={{
							prevEl: '.cars-prev-btn',
							nextEl: '.cars-next-btn',
						}}
						className='!pb-[10px]'
					>
						{/* products */}
						{products.map((product, index) => (
							<SwiperSlide
								key={index}
								className='shadow-md rounded-[16px] max-sm:flex-[0_0_285px]'
							>
								{/* image */}
								<Image
									src={product.image}
									width={330}
									height={224}
									alt={product.name}
									className='w-full object-cover'
								/>
								{/* product */}
								<div className='p-[16px]'>
									{/* product-header */}
									<div className='flex justify-between items-center mb-[6px]'>
										<div className='font-bold text-xl text-[#1a1a1a]'>
											{product.name}
										</div>
										<div className='text-sm text-[#0a58ca]'>{product.type}</div>
									</div>
									{/* product-grade */}
									<div className='flex mb-[22px]'>
										<div className='flex gap-x-[6px] mr-[8px]'>
											{[1, 2, 3, 4, 5].map(i => (
												<StarIcon
													key={i}
													className={`${
														i <= product.rating
															? 'text-[#f3c10e]'
															: 'text-gray-500'
													} w-[12px] flex gap-x-[6px]`}
												/>
											))}
										</div>
										<div className='font-dmSans font-bold text-xs text-[#1a1a1a]'>
											{product.grade}/10
										</div>
									</div>
									{/* product-features */}
									<div className='pb-[15px] mb-[16px] border-b border-[#e5e5e5]'>
										<div className='text-sm text-[#757575] mb-[12px]'>
											Features
										</div>
										<div className='flex gap-x-[16px]'>
											{product.characteristics.slice(0, 3).map((ch, index) => (
												<div key={index} className='flex gap-x-[8px]'>
													<ch.icon className='w-[24px]' />
													<div className='font-dmSans text-base text-[#1a1a1a]'>
														{ch.value}
													</div>
												</div>
											))}
										</div>
									</div>
									{/* product-footer */}
									<div className='flex justify-between items-center'>
										<div>
											<div className='font-bold text-2xl text-[#1a1a1a]'>
												€{product.price}
											</div>
											<div className='text-sm text-[#757575]'>per day</div>
										</div>
										<Button
											href='#'
											variant='card'
											className='flex rounded-xl py-[8px] pl-[24px] w-[157px]'
										>
											<span className='mr-[10px]'>Book Now</span>
											<ArrowRight className='w-[24px] text-[#0a58ca]' />
										</Button>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<SwiperButtons name='cars' className={'md:hidden justify-center'} />
			</div>
		</section>
	)
}
