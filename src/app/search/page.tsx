import SearchResults from '@/app/search/search-results'
import { Suspense } from 'react'

const SearchPage = () => {
	return (
		<section className='pt-[142px] pb-[88px]'>
			<div className='__container relative'>
				{/* body */}
				<div className='flex justify-between'>
					{/* filter */}
					<div>Filter</div>
					{/* products */}
					<div className='flex-[0_0_910px]'>
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
