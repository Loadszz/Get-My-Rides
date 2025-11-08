import { FAQSection } from '@/components/common/FAQSection'
import { AboutUs } from '@/components/sections/home/AboutUs'
import { AvailableCars } from '@/components/sections/home/AvailableCars'
import { Hero } from '@/components/sections/home/Hero'
import { RentalDestinations } from '@/components/sections/home/RentalDestinations'
import { SpecialOffers } from '@/components/sections/home/SpecialOffers'
import { faqHomeProps } from '@/data/home/FAQHome.type'
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
			<FAQSection
				faqProps={faqHomeProps}
				title='Everything you need to know about our platform'
				variants='primary'
			/>
		</>
	)
}
