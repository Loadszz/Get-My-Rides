'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import { Button } from '@/components/ui/Button'
import { Star } from '@/components/ui/Star'
import SwiperButtons from '@/components/ui/SwiperButtons'
import type { Product } from '@/data/products.type'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface IAvailableCarsProps {
	products: Product[]
	title: ReactNode
}

export const AvailableCars = ({ products, title }: IAvailableCarsProps) => {
	return (
		<section className='pt-[64px] max-md:pt-[44px]'>
			<div className='__container'>
				<div className='flex justify-between items-center mb-[48px] max-sm:mb-[32px]'>
					<>
						{/* title */}
						{title}
					</>
					{/* swiper-buttons */}
					<SwiperButtons
						name='cars'
						className='max-md:hidden'
						arrowClassName='p-[8px] border border-[#0a58ca] [&.swiper-button-disabled]:bg-inherit [&.swiper-button-disabled]:text-[#1a1a1a]'
						arrowIconClassName='w-[24px]'
					/>
				</div>
				{/* body */}
				<div className='max-md:pb-[22px]'>
					<Swiper
						slidesPerView='auto'
						spaceBetween={16}
						slidesOffsetBefore={2}
						slidesOffsetAfter={2}
						speed={500}
						touchMoveStopPropagation={false}
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
						{products.map(product => (
							<SwiperSlide
								key={product.id}
								className='shadow-md rounded-2xl max-sm:flex-[0_0_285px]'
							>
								{/* product-image */}
								<div className='relative min-h-[224px]'>
									<Image
										src={product.image}
										fill
										sizes='(max-width: 768px) 285px, 330px'
										alt={product.name}
										priority
										className='object-cover'
									/>
									<div className='font-dmSans font-medium text-xs text-[#0a58ca] py-[4px] px-[9px] bg-white rounded-2xl absolute top-[24px] left-[24px] z-1'>
										Cheapest
									</div>
								</div>
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
											<Star rating={product.rating} className='w-[12px]' />
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
											{product.characteristics.slice(0, 3).map(ch => (
												<div key={ch.id} className='flex gap-x-[8px]'>
													<Image
														src={ch.icon}
														width={24}
														height={24}
														alt={ch.icon}
													/>
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
											type='button'
											variant='transparent'
											className='flex py-[8px] px-[24px] rounded-md'
										>
											<span className='mr-[10px]'>Book Now</span>
											<ArrowRight className='w-[24px]' />
										</Button>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<SwiperButtons
					name='cars'
					className={'md:hidden justify-center'}
					arrowClassName='p-[8px] border border-[#0a58ca] [&.swiper-button-disabled]:bg-inherit [&.swiper-button-disabled]:text-[#1a1a1a]'
					arrowIconClassName='w-[24px]'
				/>
			</div>
		</section>
	)
}
