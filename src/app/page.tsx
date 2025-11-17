import { AvailableCars } from '@/components/common/AvailableCars'
import { FAQSection } from '@/components/common/FAQSection'
import { AboutUs } from '@/components/sections/home/AboutUs'
import { Hero } from '@/components/sections/home/Hero'
import { RentalDestinations } from '@/components/sections/home/RentalDestinations'
import { SpecialOffers } from '@/components/sections/home/SpecialOffers'
import { faqHomeProps } from '@/data/home/faqHome.type'
import { getProducts } from '@/lib/getProducts'

export default async function Home() {
	const products = await getProducts()
	return (
		<>
			<Hero />
			<AvailableCars products={products} />
			<RentalDestinations />
			<SpecialOffers />
			<AboutUs />
			<section className='pt-[156px] pb-[104px] max-md:pt-[48px] max-md:pb-[56px]'>
				<div className='__container'>
					{/* title */}
					<div className='title max-w-[676px] mb-[56px] max-md:mb-[32px]'>
						Everything you need to know about our platform
					</div>
					<FAQSection faqProps={faqHomeProps} />
				</div>
			</section>
		</>
	)
}
