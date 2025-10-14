'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import { Button } from '@/components/ui/Button'
import { Star } from '@/components/ui/Star'
import SwiperButtons from '@/components/ui/SwiperButtons'
import { Product } from '@/data/products.type'
// import { goToBooking } from '@/utils/navigate-product'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const AvailableCars = ({ products }: { products: Product[] }) => {
	const router = useRouter()

	return (
		<section className='pt-[64px] max-md:pt-[44px]'>
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
						speed={100}
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
								{/* product-image */}
								<Image
									src={product.image}
									width={330}
									height={224}
									alt={product.name}
									priority
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
											{product.characteristics.slice(0, 3).map((ch, index) => (
												<div key={index} className='flex gap-x-[8px]'>
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
											// onClick={() => goToBooking(router, product, { from, to, city })}
											type='button'
											variant='transparent'
											className='flex rounded-xl py-[8px] pl-[24px] w-[157px] rounded-[6px]'
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
				<SwiperButtons name='cars' className={'md:hidden justify-center'} />
			</div>
		</section>
	)
}
