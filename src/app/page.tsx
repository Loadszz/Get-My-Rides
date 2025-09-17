import { OurPlatform } from '@/components/sections/home/OurPlatform'
import { RentalDestinations } from '@/components/sections/home/RentalDestinations'
import { SpecialOffers } from '@/components/sections/home/SpecialOffers'

export default function Home() {
	return (
		<>
			<RentalDestinations />
			<SpecialOffers />
			<OurPlatform />
		</>
	)
}
