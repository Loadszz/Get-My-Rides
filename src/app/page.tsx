// import IconBuildings from '@/assets/icons/buildings.svg'
// import IconPins from '@/assets/icons/pins.svg'
import { AboutUs } from '@/components/sections/home/AboutUs'
import { AvailableCars } from '@/components/sections/home/AvailableCars'
import { Hero } from '@/components/sections/home/Hero'
import { OurPlatform } from '@/components/sections/home/OurPlatform'
import { RentalDestinations } from '@/components/sections/home/RentalDestinations'
import { SpecialOffers } from '@/components/sections/home/SpecialOffers'
// import { getProducts } from '@/lib/getProducts'

export default async function Home() {
	// const products = await getProducts()
	return (
		<>
			<Hero />
			<AvailableCars />
			<RentalDestinations />
			<SpecialOffers />
			<AboutUs />
			<OurPlatform />
		</>
	)
}
