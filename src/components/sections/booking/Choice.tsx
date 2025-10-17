'use client'
import IconGas from '@/assets/icons/booking/gas-station-blue.svg'
import IconCheck from '@/assets/icons/check.svg'
import IconDashboard from '@/assets/icons/dashboard.svg'
import { Star } from '@/components/ui/Star'
import { Product } from '@/data/products.type'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Choice = ({ product }: { product: Product }) => {
	return (
		<section className='max-md:border-b max-md:border-[#e5e5e5] max-md:pb-[24px]'>
			{/* body */}
			<div>
				{/* title */}
				<div className='font-dmSans font-medium text-xl text-[#0a58ca] mb-[16px] max-md:hidden'>
					Great choice!
				</div>
				{/* product */}
				<div
					key={product.id}
					className='flex justify-between gap-x-[20px] max-lg:justify-start max-md:flex-col-reverse'
				>
					{/* product-features-mobile */}
					<div className='md:hidden'>
						<div className='mb-[24px]'>
							<div className='flex gap-x-[8px]'>
								{product.characteristics.map((ch, index) => (
									<div key={index} className='flex gap-x-[8px]'>
										<Image src={ch.icon} width={24} height={24} alt={ch.icon} />
										<div className='font-dmSans text-base text-[#1a1a1a]'>
											{ch.value}
										</div>
									</div>
								))}
							</div>
						</div>
						{/* product-information-mobile */}
						<div className='space-y-[16px]'>
							<div className='flex items-center gap-x-[14px]'>
								<div className='flex justify-center w-[24px] h-[24px] bg-[#0a58ca] rounded-2xl'>
									<IconCheck className='w-[10px]' />
								</div>
								<div className='font-dmSans text-base text-[#1a1a1a]'>
									Free cancellation up to 48 hours
								</div>
							</div>
							<div className='flex items-center gap-x-[14px]'>
								<IconDashboard className='w-[24px]' />
								<div className='font-dmSans text-base text-[#1a1a1a]'>
									Unlimited mileage
								</div>
							</div>
							<div className='flex items-center gap-x-[14px]'>
								<IconGas className='w-[24px] text-blue-600' />
								<div className='font-dmSans text-base text-[#1a1a1a]'>
									Full tank to full tank
								</div>
							</div>
						</div>
					</div>
					{/* product-slider */}
					<div className='flex-[0_1_461px] relative max-md:flex-[0_1_216px] max-md:mb-[16px]'>
						<Swiper
							slidesPerView={1}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							className='my-class w-full h-full'
						>
							product.imageSlider
							{product.imageSlider.map((imgPath, index) => (
								<SwiperSlide key={index} className='!w-full'>
									<Image
										src={imgPath}
										width={461}
										height={303}
										alt={product.image}
										priority
										className='w-full h-full object-cover rounded-2xl'
									/>
								</SwiperSlide>
							))}
						</Swiper>
						{product.cheapest === true && (
							<div className='font-dmSans font-medium text-xs text-[#0a58ca] py-[4px] px-[9px] bg-white rounded-2xl absolute top-[24px] left-[24px] z-10'>
								Cheapest
							</div>
						)}
					</div>
					{/* product-item */}
					<div className='flex-[0_0_330px] max-md:flex-[0_0_auto]'>
						{/* product-header */}
						<div className='max-md:flex max-md:justify-between max-md:items-center max-md:mb-[16px]'>
							<div className='flex items-center flex-wrap gap-[8px] mb-[16px] max-md:mb-0'>
								{/* product-name */}
								<div className='font-bold text-[2rem] leading-[2.5rem] text-[#1a1a1a] max-md:text-xl'>
									{product.name}
								</div>
								{/* product-similar */}
								<div className='font-dmSans text-base text-[#757575] max-md:text-sm'>
									{product.similar}
								</div>
							</div>
							{/* title-mobile */}
							<div className='font-dmSans font-medium text-xl text-[#0a58ca] md:mb-[16px] md:hidden max-md:text-sm'>
								Great choice!
							</div>
						</div>
						{/* product-rentals */}
						<Image
							src={product.rentals}
							width={114}
							height={45}
							alt='logo'
							className='mb-[10px]'
						/>
						{/* product-grade */}
						<div className='flex mb-[24px]'>
							<div className='flex gap-x-[6px] mr-[8px]'>
								<Star rating={product.rating} className='w-[14px]' />
							</div>
							<div className='font-dmSans font-bold text-xs text-[#1a1a1a]'>
								{product.grade}/10
							</div>
						</div>
						<div className='space-y-[24px] max-md:hidden'>
							{/* product-features */}
							<div className='flex gap-x-[8px]'>
								{product.characteristics.map((ch, index) => (
									<div key={index} className='flex gap-x-[8px]'>
										<Image src={ch.icon} width={24} height={24} alt={ch.icon} />
										<div className='font-dmSans text-base text-[#1a1a1a]'>
											{ch.value}
										</div>
									</div>
								))}
							</div>
							{/* product-information */}
							<div className='space-y-[16px]'>
								<div className='flex items-center gap-x-[14px]'>
									<div className='flex justify-center w-[24px] h-[24px] bg-[#0a58ca] rounded-2xl'>
										<IconCheck className='w-[10px]' />
									</div>
									<div className='font-dmSans text-base text-[#1a1a1a]'>
										Free cancellation up to 48 hours
									</div>
								</div>
								<div className='flex items-center gap-x-[14px]'>
									<IconDashboard className='w-[24px]' />
									<div className='font-dmSans text-base text-[#1a1a1a]'>
										Unlimited mileage
									</div>
								</div>
								<div className='flex items-center gap-x-[14px]'>
									<IconGas className='w-[24px] text-blue-600' />
									<div className='font-dmSans text-base text-[#1a1a1a]'>
										Full tank to full tank
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Choice
