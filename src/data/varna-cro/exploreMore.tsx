import IconLocation from '@/assets/icons/car-rental/location.svg'
import pictureBottom1 from '@/assets/images/sections/varna-cro/explore-more-bottom-1.jpg'
import pictureBottom2 from '@/assets/images/sections/varna-cro/explore-more-bottom-2.jpg'
import pictureBottom3 from '@/assets/images/sections/varna-cro/explore-more-bottom-3.jpg'
import pictureBottom4 from '@/assets/images/sections/varna-cro/explore-more-bottom-4.jpg'
import pictureTop1 from '@/assets/images/sections/varna-cro/explore-more-top-1.jpg'
import pictureTop2 from '@/assets/images/sections/varna-cro/explore-more-top-2.jpg'
import pictureTop3 from '@/assets/images/sections/varna-cro/explore-more-top-3.jpg'
import pictureTop4 from '@/assets/images/sections/varna-cro/explore-more-top-4.jpg'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
interface ILink {
	text: string
	href: string
}
export interface IExploreMoreProps {
	id: number
	icon: React.ElementType
	city?: string
	place?: string
	image: StaticImageData
	text: ReactNode
	link?: ILink
}

export const exploreMoreTopProps: IExploreMoreProps[] = [
	{
		id: 1,
		icon: IconLocation,
		place: 'Golden Sands',
		image: pictureTop1,
		text: 'A lively seaside resort known for long beaches, nightlife, and water sports. Perfect for families and couples.',
		link: { href: '#', text: 'Rent a car to visit' },
	},
	{
		id: 2,
		icon: IconLocation,
		place: 'Shumen',
		image: pictureTop2,
		text: 'Explore Bulgaria`s oldest capital, fortress ruins, and the UNESCO-listed rock relief of the Madara Rider. Add a stop at a local winery.',
		link: { href: '#', text: 'Rent a car to visit' },
	},
	{
		id: 3,
		icon: IconLocation,
		place: 'Nessebar',
		image: pictureTop3,
		text: 'UNESCO World Heritage town with cobblestone streets, medieval churches, and sea-view restaurants. Ideal day trip via the coastal road.',
		link: { href: '#', text: 'Rent a car to visit' },
	},
	{
		id: 4,
		icon: IconLocation,
		place: 'Kaliakra',
		image: pictureTop4,
		text: 'Drive along the scenic cliffs to discover Balchik’s palace gardens and the dramatic Kaliakra headland.',
		link: { href: '#', text: 'Rent a car to visit' },
	},
]

export const exploreMoreBottomProps: IExploreMoreProps[] = [
	{
		id: 1,
		icon: IconLocation,
		place: 'Varna',
		image: pictureBottom1,
		text: (
			<>
				Pick up your rental car directly at <b>Varna Airport</b> for a fast and
				easy start to your Black Sea holiday. Ideal for travelers heading to
				resorts like Golden Sands or Albena.
			</>
		),
	},
	{
		id: 2,
		icon: IconLocation,
		place: 'Varna',
		image: pictureBottom2,
		text: (
			<>
				Enjoy maximum convenience with car rental{' '}
				<b>delivery to your address</b> in Varna. Perfect for long-term stays,
				business travelers, or anyone who prefers door-to-door service.
			</>
		),
	},
	{
		id: 3,
		icon: IconLocation,
		place: 'Varna',
		image: pictureBottom3,
		text: (
			<>
				Car rental in <b>St. Constantine and Helena</b> makes it easy to visit
				spas, beaches, and nearby attractions. A convenient option for families
				and wellness travelers.
			</>
		),
	},
	{
		id: 4,
		icon: IconLocation,
		place: 'Varna',
		image: pictureBottom4,
		text: (
			<>
				Rent a car in <b>Varna City Center,</b> close to hotels, offices, and
				transport hubs. Ideal for visitors who want to combine city sightseeing
				with day trips.
			</>
		),
	},
]
