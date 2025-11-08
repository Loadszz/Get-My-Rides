import IconCalendar from '@/assets/icons/car-rental/calendar.svg'
import IconUser from '@/assets/icons/car-rental/user.svg'
import picture1 from '@/assets/images/sections/car-rental/tips-and-guides-1.jpg'
import picture2 from '@/assets/images/sections/car-rental/tips-and-guides-2.jpg'
import picture3 from '@/assets/images/sections/car-rental/tips-and-guides-3.jpg'
import picture4 from '@/assets/images/sections/car-rental/tips-and-guides-4.jpg'
import { StaticImageData } from 'next/image'
interface ILink {
	text: string
	href: string
}

export interface IPropsTipsAndGuides {
	id: number
	type: string
	iconFirst: React.ElementType
	iconSecond: React.ElementType
	image: StaticImageData
	title: string
	text: string
	person: string
	date: string
	link: ILink
}
export const tipsAndGuidesProps: IPropsTipsAndGuides[] = [
	{
		id: 1,
		type: 'Coastal Trips',
		iconFirst: IconCalendar,
		iconSecond: IconUser,
		image: picture1,
		title: 'Coastal Drives & Beach Getaways in Bulgaria',
		text: 'Explore stunning seaside routes along the Black Sea — from Varna to Sozopol. Discover hidden beaches, historic towns, and scenic coastal roads perfect for a summer road trip.',
		person: 'Georgi Stoyanov',
		date: '19.02.2025',
		link: { text: 'Read More', href: '#' },
	},
	{
		id: 2,
		type: 'Coastal Trips',
		iconFirst: IconCalendar,
		iconSecond: IconUser,
		image: picture2,
		title: 'Driving Tips & Travel Guides',
		text: 'Learn rules before trip.',
		person: 'Georgi Stoyanov',
		date: '19.02.2025',
		link: { text: 'Read More', href: '#' },
	},
	{
		id: 3,
		type: 'Coastal Trips',
		iconFirst: IconCalendar,
		iconSecond: IconUser,
		image: picture3,
		title: 'Best Scenic Road Trips from Sofia',
		text: 'Breathtaking routes across Bulgaria',
		person: 'Georgi Stoyanov',
		date: '19.02.2025',
		link: { text: 'Read More', href: '#' },
	},
	{
		id: 4,
		type: 'Coastal Trips',
		iconFirst: IconCalendar,
		iconSecond: IconUser,
		image: picture4,
		title: 'Choosing the right rental car',
		text: 'The right rental for your route',
		person: 'Georgi Stoyanov',
		date: '19.02.2025',
		link: { text: 'Read More', href: '#' },
	},
]
