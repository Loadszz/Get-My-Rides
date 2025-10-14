'use client'
import SearchResults from '@/app/search/search-results'
import IconFilter from '@/assets/icons/filter.svg'
import IconMap from '@/assets/icons/map.svg'
import Filters from '@/components/filter/Filters'
import { SortSelect } from '@/components/sections/search/SortSelect'
import { Suspense, useState } from 'react'

const SearchPageClient = () => {
	const [filtersState, setFiltersState] = useState<Record<string, string[]>>({})
	const [sortOrder, setSortOrder] = useState<'price-asc' | 'price-desc'>(
		'price-asc'
	)
	const [isOpen, setIsOpen] = useState(false)
	const handleFilter = () => {
		setIsOpen(!isOpen)
		// if (!isOpen) {
		// 	document.body.classList.add('lock')
		// } else {
		// 	document.body.classList.remove('lock')
		// }
	}
	return (
		<section className='pb-[88px]'>
			<div className='__container'>
				{/* body */}
				<div className='flex justify-between gap-x-[20px] max-lg:flex-col'>
					{/* filters */}
					<div className='flex flex-col flex-[0_1_388px] space-y-[16px] relative max-lg:flex-col-reverse max-lg:flex-[0_1_100%]'>
						{/* map */}
						<div className='max-lg:hidden w-full h-[208px] bg-gray-600 rounded-2xl'></div>
						{/* filter */}
						<Filters isOpen={isOpen} onChange={setFiltersState} />
						{/* mobile */}
						<div className='lg:hidden flex justify-between gap-x-[8px] mb-[24px] max-lg:order-1'>
							<div
								className='flex-[0_1_50%] flex justify-center gap-[8px] py-[8px] border border-[#0a58ca] rounded-md'
								onClick={handleFilter}
							>
								<IconFilter className='w-[24px]' />
								<span className='font-dmSans text-base text-[#303030]'>
									Filter
								</span>
							</div>
							<div className='flex-[0_1_50%] flex justify-center gap-[8px] py-[8px] border border-[#0a58ca] rounded-md'>
								<IconMap className='w-[24px]' />
								<span className='font-dmSans text-base text-[#303030]'>
									Map
								</span>
							</div>
							<div className='flex-[0_1_33.333%] flex justify-center gap-[8px] py-[8px] border border-[#0a58ca] rounded-md hidden'>
								<SortSelect
									value={sortOrder}
									onChange={setSortOrder}
									className='lg:hidden'
								/>
							</div>
						</div>
					</div>
					{/* products */}
					<div
						className={`${
							isOpen ? 'hidden' : 'block'
						} flex-[0_1_910px] max-lg:flex-[0_1_100%]`}
					>
						{/* products */}
						<Suspense fallback={<p>Загрузка...</p>}>
							<SearchResults
								filters={filtersState}
								sortOrder={sortOrder}
								setSortOrder={setSortOrder}
							/>
						</Suspense>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SearchPageClient
