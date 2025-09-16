import car1 from '@/assets/images/sections/home/special-offers-1.jpg' // Путь к изображению
import car2 from '@/assets/images/sections/home/special-offers-2.jpg'
import car3 from '@/assets/images/sections/home/special-offers-3.jpg'

import { StaticImageData } from 'next/image'

export type PromoCard = {
	title: string
	description: string
	discount?: {
		before: string
		highlight: string
		after: string
	}
	buttonText: string
	image: StaticImageData // Изменяем тип с string на StaticImageData
}

export const promoCards: PromoCard[] = [
	{
		title: 'PROFITABLE CAR RENTAL IN BULGARIA!',
		description:
			'Book a car in Bulgaria now and get up to 20% off! Fast booking, favorable conditions and comfort at every step of your journey.',
		discount: { before: 'UP TO ', highlight: '20%', after: ' OFF' },
		buttonText: 'Get Offer',
		image: car1,
	},
	{
		title: 'AIRPORT TRANSFERS - COMFORT AND CONVENIENCE!',
		description:
			'Book a transfer from the airport to anywhere in the city! Fast, comfortable and hassle-free – the perfect start to your trip.',
		discount: { before: 'UP TO ', highlight: '20%', after: ' OFF' },
		buttonText: 'Book Now',
		image: car2,
	},
	{
		title: 'LUXURY CARS - TRAVEL IN THE BEST CARS!',
		description:
			'Treat yourself to a luxurious trip! Rent a luxury car in Bulgaria and enjoy comfort and style.',
		discount: { before: 'GET ', highlight: '15%', after: ' DISCOUNT' },
		buttonText: 'Book Now',
		image: car3,
	},
]
