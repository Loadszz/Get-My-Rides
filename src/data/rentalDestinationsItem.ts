import rentalDestinations1 from '@/assets/images/sections/home/rental-destinations-1.jpg'
import rentalDestinations2 from '@/assets/images/sections/home/rental-destinations-2.jpg'
import rentalDestinations3 from '@/assets/images/sections/home/rental-destinations-3.jpg'
import rentalDestinations4 from '@/assets/images/sections/home/rental-destinations-4.jpg'

import { StaticImageData } from 'next/image'

export type RentalDestinationsCard = {
	title: string
	description: string
	buttonUrl: string
	image: StaticImageData
}

export const destinationsCards: RentalDestinationsCard[] = [
	{
		title: 'Varna',
		description:
			'So, you’re planning a trip to Varna, Bulgaria? Maybe it’s your first time or you’re returning for more Black Sea magic, but either way...',
		buttonUrl: '#',
		image: rentalDestinations1,
	},
	{
		title: 'Sofia',
		description:
			'Sofia, Bulgaria’s vibrant capital, is a perfect mix of history, modern life, and stunning landscapes. Whether you’re here for...',
		buttonUrl: '#',
		image: rentalDestinations2,
	},
	{
		title: 'Burgas',
		description:
			'Thinking of exploring the beautiful coastal city of Burgas, Bulgaria, but wondering how to get around? Whether you’re visiting...',
		buttonUrl: '#',
		image: rentalDestinations3,
	},
	{
		title: 'Plovdiv',
		description:
			'Planning a trip to Plovdiv, Bulgaria? Whether you’re visiting for its rich history, thriving cultural scene, or the stunning landscapes...',
		buttonUrl: '#',
		image: rentalDestinations4,
	},
]
