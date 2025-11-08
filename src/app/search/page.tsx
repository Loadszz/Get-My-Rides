import { SearchForm } from '@/components/search/SearchForm'
import SearchPageClient from '@/components/sections/search/SearchPageClient'

export default async function SearchPage() {
	return (
		<>
			<section className='max-lg:bg-[#0a58ca] max-lg:pb-[24px] max-lg:mb-[24px]'>
				<div className='__container'>
					<SearchForm className='relative top-[-50px] z-10 w-full bg-white border border-[#e4e4e4] rounded-2xl shadow-[0_4px_15px_0_rgba(8,15,52,0.08)] max-lg:top-0' />
				</div>
			</section>
			<SearchPageClient />
		</>
	)
}
