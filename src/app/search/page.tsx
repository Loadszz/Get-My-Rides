'use client'
import SearchResults from '@/app/search/search-results'
import IconFilter from '@/assets/icons/filter.svg'
import IconMap from '@/assets/icons/map.svg'
import IconSort from '@/assets/icons/sorting.svg'
import Filters from '@/components/filter/Filters'
import { Suspense, useState } from 'react'

const SearchPage = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<section className='pt-[142px] pb-[88px]'>
			<div className='__container relative'>
				{/* body */}
				<div className='flex justify-between gap-x-[20px] max-lg:flex-col'>
					{/* filter */}
					<div className='flex-[0_1_388px] space-y-[16px] max-lg:flex-[0_1_100%]'>
						<div className='max-lg:hidden w-full h-[208px] bg-gray-600 rounded-2xl'></div>
						<Filters isOpen={isOpen} />
						<div className='lg:hidden flex justify-between gap-x-[8px] mb-[24px]'>
							<div
								className='flex-[0_1_33.333%] flex justify-center gap-[8px] py-[8px] border border-[#0a58ca] rounded-md'
								onClick={() => setIsOpen(!isOpen)}
							>
								<IconFilter className='w-[24px]' />
								<span className='font-dmSans text-base text-[#303030]'>
									Filter
								</span>
							</div>
							<div className='flex-[0_1_33.333%] flex justify-center gap-[8px] py-[8px] border border-[#0a58ca] rounded-md'>
								<IconMap className='w-[24px]' />
								<span className='font-dmSans text-base text-[#303030]'>
									Map
								</span>
							</div>
							<div className='flex-[0_1_33.333%] flex justify-center gap-[8px] py-[8px] border border-[#0a58ca] rounded-md'>
								<IconSort className='w-[24px]' />
								<span className='font-dmSans text-base text-[#303030]'>
									Sort
								</span>
							</div>
						</div>
					</div>
					{/* products */}
					<div className='flex-[0_1_910px]'>
						{/* products */}
						<Suspense fallback={<p>Загрузка...</p>}>
							<SearchResults />
						</Suspense>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SearchPage
