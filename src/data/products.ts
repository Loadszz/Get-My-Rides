import Baggage from '@/assets/icons/baggage.svg'
import Doors from '@/assets/icons/doors.svg'
import Gearbox from '@/assets/icons/gearbox.svg'
import Passenger from '@/assets/icons/passenger.svg'
import product1 from '@/assets/images/sections/home/product-1.jpg'
import product2 from '@/assets/images/sections/home/product-2.jpg'
import product3 from '@/assets/images/sections/home/product-3.jpg'
import product4 from '@/assets/images/sections/home/product-4.jpg'
import { StaticImageData } from 'next/image'

export type Characteristic = {
	value: string | number
	icon: React.ElementType
}

export type Products = {
	image: StaticImageData
	name: string
	type: string
	rating: number
	grade: number
	characteristics: Characteristic[]
	price: number
}

export const products: Products[] = [
	{
		image: product1,
		name: 'Volvo XC60',
		type: 'Business Class',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: Gearbox },
		],
		price: 65,
	},
	{
		image: product2,
		name: 'Volvo XC60',
		type: 'Business Class',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: Gearbox },
		],
		price: 65,
	},
	{
		image: product3,
		name: 'Volvo XC60',
		type: 'Business Class',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: Gearbox },
		],
		price: 65,
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: Gearbox },
		],
		price: 65,
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: Gearbox },
		],
		price: 65,
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: Gearbox },
		],
		price: 65,
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: Gearbox },
		],
		price: 65,
	},
]
