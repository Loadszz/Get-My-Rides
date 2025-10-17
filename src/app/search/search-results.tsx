'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import { SortSelect } from '@/components/sections/search/SortSelect'
import { Button } from '@/components/ui/Button'
import { Product } from '@/data/products.type'
import { goToBooking } from '@/utils/navigate-product'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type SearchResultsProps = {
	filters: Record<string, string[]>
	sortOrder: 'price-asc' | 'price-desc'
	setSortOrder: (value: 'price-asc' | 'price-desc') => void
}

export default function SearchResults({
	filters,
	sortOrder,
	setSortOrder,
}: SearchResultsProps) {
	const searchParams = useSearchParams()
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)
	const [visibleCount, setVisibleCount] = useState(8)
	const router = useRouter()
	// Получаем параметры из URL
	const from = searchParams.get('from')
	const to = searchParams.get('to')
	const city = searchParams.get('city')

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true)
			try {
				const query = new URLSearchParams({
					city: city ?? '',
					...(from ? { from } : {}),
					...(to ? { to } : {}),
				}).toString()

				const res = await fetch(`/api/products?${query}`)
				const data = await res.json()
				setProducts(data.products || [])
			} catch (error) {
				console.error('Ошибка загрузки продуктов:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [city, from, to])

	const filteredProducts = products.filter(product => {
		for (const key in filters) {
			const filterValues = filters[key]
			if (!filterValues || filterValues.length === 0) continue

			const productValue = (product as Product & Record<string, unknown>)[key]

			// 🎯 Обрабатываем фильтр по цене
			if (key === 'price') {
				const price = Number(productValue)
				let match = false

				for (const range of filterValues) {
					if (range.includes('-')) {
						const [min, max] = range.split('-').map(Number)
						if (price >= min && price <= max) {
							match = true
							break
						}
					} else if (range.endsWith('+')) {
						const min = Number(range.replace('+', ''))
						if (price >= min) {
							match = true
							break
						}
					}
				}

				if (!match) return false
				continue
			}

			if (Array.isArray(productValue)) {
				if (
					!productValue.some((v: { value?: string }) =>
						filterValues.includes(String(v.value ?? v))
					)
				)
					return false
			} else {
				if (!filterValues.includes(String(productValue))) return false
			}
		}
		return true
	})
	// Сортировка
	const filteredAndSortedProducts = [...filteredProducts]
	if (sortOrder === 'price-asc') {
		filteredAndSortedProducts.sort((a, b) => a.price - b.price)
	} else if (sortOrder === 'price-desc') {
		filteredAndSortedProducts.sort((a, b) => b.price - a.price)
	}

	const handleLoadMore = () => setVisibleCount(prev => prev + 8)

	if (loading)
		return <div className='text-center py-10 text-gray-500'>Загрузка...</div>
	return (
		<>
			{/* header */}
			<div className='flex justify-between items-center mb-[32px]'>
				<div className='font-dmSans font-medium text-xl text-[#303030]'>
					{filteredAndSortedProducts.length} <span>results</span>
				</div>
				<SortSelect value={sortOrder} onChange={setSortOrder} className='' />
			</div>
			{/* product */}
			<div className='grid grid-cols-2 gap-[16px] mb-[48px] max-md:grid-cols-1'>
				{filteredAndSortedProducts.length > 0 ? (
					filteredAndSortedProducts
						.slice(0, visibleCount)
						.map((product, index) => (
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
									<div className='text-sm text-[#757575]'>
										{product.similar}
									</div>
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
								<div className='relative'>
									<Image
										src={product.image}
										width={398}
										height={170}
										alt={product.name}
										priority
										className='w-full h-[170px] max-md:h-[300px] max-sm:h-[216px] object-cover mb-[16px] rounded-xl'
									/>
									<div className='font-dmSans font-medium text-xs text-[#0a58ca] py-[4px] px-[9px] bg-white rounded-2xl absolute top-[24px] left-[24px] z-10'>
										Cheapest
									</div>
								</div>
								{/* product-pre-footer */}
								<div className='flex justify-between items-center mb-[16px]'>
									{/* product-rentals */}
									<Image
										src={product.rentals}
										width={114}
										height={45}
										alt='logo'
									/>
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
									<div className='max-lg:hidden'>
										<div className='font-dmSans font-medium text-base text-[#0a58ca]'>
											{product.place}
										</div>
										<div className='font-dmSans text-sm text-[#757575]'>
											3.3 km from city center
										</div>
									</div>
									{/* product-button */}
									<Button
										variant='secondary'
										onClick={() =>
											goToBooking(router, product, { from, to, city })
										}
										className='text-center py-[8px] w-[157px] rounded-xl max-lg:w-full'
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
			{/* Load More button */}
			{filteredAndSortedProducts.length > 0 &&
				visibleCount < filteredAndSortedProducts.length && (
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
				)}
		</>
	)
}
