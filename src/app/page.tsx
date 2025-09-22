import { AboutUs } from '@/components/sections/home/AboutUs'
import { AvailableCars } from '@/components/sections/home/AvailableCars'
import { OurPlatform } from '@/components/sections/home/OurPlatform'
import { RentalDestinations } from '@/components/sections/home/RentalDestinations'
import { SpecialOffers } from '@/components/sections/home/SpecialOffers'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

export default function Home() {
	return (
		<>
			<AvailableCars />
			<RentalDestinations />
			<SpecialOffers />
			<AboutUs />
			<OurPlatform />
		</>
	)
}
