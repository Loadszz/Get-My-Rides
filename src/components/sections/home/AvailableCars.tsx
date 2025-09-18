import StarIcon from '@/assets/icons/star.svg'
import { Button } from '@/components/ui/Button'
import { products } from '@/data/products'
import Image from 'next/image'

export const AvailableCars = () => {
	return (
		<section className='py-[100px]'>
			<div className='__container'>
				{/* title */}
				<div className='title'>Explore the available car fleet</div>
				{/* body */}
				<div className='flex'>
					{/* products */}
					{products.map((product, index) => (
						<div key={index}>
							{/* image */}
							<Image
								src={product.image}
								width={330}
								height={224}
								alt={product.name}
								className='mb-[16px]'
							/>
							{/* product */}
							<div className=''>
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
									<Button href='#' variant='secondary'>
										Book Now
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
