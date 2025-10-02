// import IconBuildings from '@/assets/icons/buildings.svg'
// import IconPins from '@/assets/icons/pins.svg'
import { AboutUs } from '@/components/sections/home/AboutUs'
import { AvailableCars } from '@/components/sections/home/AvailableCars'
import { Hero } from '@/components/sections/home/Hero'
import { OurPlatform } from '@/components/sections/home/OurPlatform'
import { RentalDestinations } from '@/components/sections/home/RentalDestinations'
import { SpecialOffers } from '@/components/sections/home/SpecialOffers'
import { products } from '@/data/products.type'

export default function Home() {
	return (
		<>
			<Hero />
			<AvailableCars products={products} />
			<RentalDestinations />
			<SpecialOffers />
			<AboutUs />
			<OurPlatform />
		</>
	)
}
