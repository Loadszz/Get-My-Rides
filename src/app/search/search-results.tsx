'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import { Button } from '@/components/ui/Button'
import { products } from '@/data/products.type'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

// type SearchPageProps = {
// 	searchParams: {
// 		location?: string
// 		date?: string
// 		time?: string
// 	}
// }
export default function SearchResults() {
	const searchParams = useSearchParams()
	const [visibleCount, setVisibleCount] = useState(8)

	const location = searchParams.get('locationFrom')
	const date = searchParams.get('date')
	const time = searchParams.get('time')

	const handleLoadMore = () => {
		setVisibleCount(prev => prev + 8) // прибавляем пачку (например, +8)
	}
	const filtered =
		location && products.length > 0
			? products.filter(product =>
					product.location.some(
						item =>
							`${item.city}, ${item.country}`.toLowerCase() ===
							(location ?? '').toLowerCase()
					)
			  )
			: []

	return (
		<>
			{/* header */}
			<div className='flex justify-between items-center mb-[32px]'>
				<div className='font-dmSans font-medium text-xl text-[#303030]'>
					{filtered.length} <span>results</span>
				</div>
				<div className='text-black'>recommended</div>
			</div>
			<div className='grid grid-cols-2 gap-[16px] mb-[48px] max-md:grid-cols-1'>
				{/* product */}
				{filtered.length > 0 ? (
					filtered.slice(0, visibleCount).map((product, index) => (
						<div
							key={index}
							className='flex-[1_1_446px] border border-[#e4e4e4] rounded-2xl p-[24px] max-md:p-[16px]'
						>
							{/* product-header */}
							<div className='flex items-center gap-[8px] mb-[16px] max-xl:flex-col max-xl:items-stretch max-lg:flex-row max-lg:items-center'>
								{/* product-name */}
								<div className='font-bold text-2xl text-[#1a1a1a]'>
									{product.name}
								</div>
								{/* product-similar */}
								<div className='text-sm text-[#757575]'>{product.similar}</div>
							</div>
							{/* product-features */}
							<div className='mb-[16px]'>
								<div className='flex gap-x-[8px]'>
									{product.characteristics.map((ch, index) => (
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
							{/* product-image */}
							<Image
								src={product.image}
								width={398}
								height={170}
								alt={product.name}
								priority
								className='w-full h-auto object-cover mb-[16px] rounded-xl'
							/>
							{/* product-pre-footer */}
							<div className='flex justify-between items-center mb-[16px]'>
								{/* product-rentals */}
								<div className='inline-block py-[4px] px-[8px] font-dmSans font-medium text-sm text-[#91d253] bg-[#efffe0] rounded-lg'>
									Varna rentals
								</div>
								{/* product-price */}
								<div className='flex items-center text-sm text-[#757575]'>
									Price for 5 days:
									<span className='font-bold text-2xl text-[#1a1a1a] ml-[8px]'>
										€{product.price}
									</span>
								</div>
							</div>
							{/* product-footer */}
							<div className='flex justify-between items-center gap-[16px] max-xl:flex-col max-xl:items-stretch max-lg:flex-row max-lg:items-center'>
								{/* product-location */}
								<div>
									<div className='font-dmSans font-medium text-base text-[#0a58ca]'>
										Varna Airport
									</div>
									<div className='font-dmSans text-sm text-[#757575]'>
										3.3 km from city center
									</div>
								</div>
								{/* product-button */}
								<Button
									href='#'
									variant='secondary'
									className='text-center py-[8px] w-[157px] rounded-xl'
								>
									View Deal
								</Button>
							</div>
						</div>
					))
				) : (
					<div>Нет доступных машин</div>
				)}
			</div>
			{/* button */}
			{filtered.length > 0 ? (
				<div className='flex justify-center'>
					<Button
						onClick={handleLoadMore}
						variant='transparent'
						className='flex py-[16px] pl-[26px] w-[166px] rounded-2xl max-sm:w-full max-sm:justify-center'
					>
						<span className='mr-[10px]'>View More</span>
						<ArrowRight className='w-[24px] text-[#0a58ca]' />
					</Button>
				</div>
			) : (
				''
			)}
		</>
	)
}
