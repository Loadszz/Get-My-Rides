import IconLocation from '@/assets/icons/car-rental/location.svg'
import picture1 from '@/assets/images/sections/car-rental/popular-locations-1.jpg'
import picture2 from '@/assets/images/sections/car-rental/popular-locations-2.jpg'
import picture3 from '@/assets/images/sections/car-rental/popular-locations-3.jpg'
import picture4 from '@/assets/images/sections/car-rental/popular-locations-4.jpg'
import picture5 from '@/assets/images/sections/car-rental/popular-locations-5.jpg'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
export interface IPropsPopularLocations {
	id: number
	icon: React.ElementType
	city: string
	image: StaticImageData
	text: ReactNode
}

export const popularLocationsProps: IPropsPopularLocations[] = [
	{
		id: 1,
		icon: IconLocation,
		city: 'Varna',
		image: picture1,
		text: 'Pick up your rental car directly at Varna Airport (VAR) for a fast and easy start to your Black Sea holiday. Ideal for travelers heading to resorts like Golden Sands or Albena.',
	},
	{
		id: 2,
		icon: IconLocation,
		city: 'Sofia',
		image: picture2,
		text: 'Collect your car at Sofia Airport (SOF) and start exploring Bulgaria’s capital or heading straight to mountain resorts like Bansko and Borovets.',
	},
	{
		id: 3,
		icon: IconLocation,
		city: 'Golden Sands',
		image: picture3,
		text: 'Rent a car near Golden Sands Resort to explore the beaches and coastal villages at your own pace. Great for holidaymakers who want more freedom beyond the resort.',
	},
	{
		id: 4,
		icon: IconLocation,
		city: 'Sofia',
		image: picture4,
		text: 'Rent a car in Sofia city center, close to hotels, offices, and transport hubs. Ideal for visitors who want to combine city sightseeing with day trips.',
	},
	{
		id: 5,
		icon: IconLocation,
		city: 'Varna',
		image: picture5,
		text: 'Enjoy maximum convenience with car rental delivery to your address in Varna. Perfect for long-term stays, business travelers, or anyone who prefers door-to-door service.',
	},
	{
		id: 6,
		icon: IconLocation,
		city: 'Varna',
		image: picture5,
		text: 'Enjoy maximum convenience with car rental delivery to your address in Varna. Perfect for long-term stays, business travelers, or anyone who prefers door-to-door service.',
	},
	{
		id: 7,
		icon: IconLocation,
		city: 'Varna',
		image: picture5,
		text: 'Enjoy maximum convenience with car rental delivery to your address in Varna. Perfect for long-term stays, business travelers, or anyone who prefers door-to-door service.',
	},
	{
		id: 8,
		icon: IconLocation,
		city: 'Varna',
		image: picture5,
		text: 'Enjoy maximum convenience with car rental delivery to your address in Varna. Perfect for long-term stays, business travelers, or anyone who prefers door-to-door service.',
	},
]
