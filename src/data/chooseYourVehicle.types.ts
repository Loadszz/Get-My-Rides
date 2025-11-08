import IconTickDouble from '@/assets/icons/common/tick-double.svg'
import picture1 from '@/assets/images/sections/common/choose-your-vehicle-1.jpg'
import picture2 from '@/assets/images/sections/common/choose-your-vehicle-2.jpg'
import picture3 from '@/assets/images/sections/common/choose-your-vehicle-3.jpg'
import picture4 from '@/assets/images/sections/common/choose-your-vehicle-4.jpg'
import picture5 from '@/assets/images/sections/common/choose-your-vehicle-5.jpg'
import picture6 from '@/assets/images/sections/common/choose-your-vehicle-6.jpg'
import { StaticImageData } from 'next/image'

interface ILink {
	text: string
	href: string
}
export interface IPropsChooseYourVehicle {
	id: number
	image: StaticImageData
	typeCar: string
	title: string
	subTitle: string
	ulTitle: string
	icon: React.ElementType
	texts: string[]
	link: ILink
}

export const chooseYourVehicleProps: IPropsChooseYourVehicle[] = [
	{
		id: 1,
		image: picture1,
		typeCar: 'Economy cars',
		title: 'Fuel-efficient & affordable',
		subTitle: 'Perfect for city driving and short getaways.',
		ulTitle: 'Economy rentals (Mini & Compact):',
		icon: IconTickDouble,
		texts: [
			'Low-cost, reliable transport',
			'Ideal for short trips, couples & small families',
			'Easy parking, great mileage',
		],
		link: { text: 'View Cars', href: '/' },
	},
	{
		id: 2,
		image: picture2,
		typeCar: 'Economy cars',
		title: 'Fuel-efficient & affordable',
		subTitle: 'Perfect for city driving and short getaways.',
		ulTitle: 'Economy rentals (Mini & Compact):',
		icon: IconTickDouble,
		texts: [
			'Compare rental prices from multiple providers in one place',
			'Locations at airports, city centers, and popular destinations',
		],
		link: { text: 'View Cars', href: '/' },
	},
	{
		id: 3,
		image: picture3,
		typeCar: 'Economy cars',
		title: 'Fuel-efficient & affordable',
		subTitle: 'Perfect for city driving and short getaways.',
		ulTitle: 'Economy rentals (Mini & Compact):',
		icon: IconTickDouble,
		texts: [
			'Compare rental prices from multiple providers in one place',
			'Locations at airports, city centers, and popular destinations',
		],
		link: { text: 'View Cars', href: '/' },
	},
	{
		id: 4,
		image: picture4,
		typeCar: 'Economy cars',
		title: 'Fuel-efficient & affordable',
		subTitle: 'Perfect for city driving and short getaways.',
		ulTitle: 'Economy rentals (Mini & Compact):',
		icon: IconTickDouble,
		texts: [
			'Compare rental prices from multiple providers in one place',
			'Locations at airports, city centers, and popular destinations',
		],
		link: { text: 'View Cars', href: '/' },
	},
	{
		id: 5,
		image: picture5,
		typeCar: 'Economy cars',
		title: 'Fuel-efficient & affordable',
		subTitle: 'Perfect for city driving and short getaways.',
		ulTitle: 'Economy rentals (Mini & Compact):',
		icon: IconTickDouble,
		texts: [
			'Compare rental prices from multiple providers in one place',
			'Locations at airports, city centers, and popular destinations',
		],
		link: { text: 'View Cars', href: '/' },
	},
	{
		id: 6,
		image: picture6,
		typeCar: 'Economy cars',
		title: 'Fuel-efficient & affordable',
		subTitle: 'Perfect for city driving and short getaways.',
		ulTitle: 'Economy rentals (Mini & Compact):',
		icon: IconTickDouble,
		texts: [
			'Compare rental prices from multiple providers in one place',
			'Locations at airports, city centers, and popular destinations',
		],
		link: { text: 'View Cars', href: '/' },
	},
]
