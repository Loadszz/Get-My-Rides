import Baggage from '@/assets/icons/baggage.svg'
import Doors from '@/assets/icons/doors.svg'
import GearboxAuto from '@/assets/icons/gearbox-auto.svg'
import GearboxMechanic from '@/assets/icons/gearbox-mechanic.svg'
import Passenger from '@/assets/icons/passenger.svg'
import product1 from '@/assets/images/sections/home/product-1.jpg'
import product2 from '@/assets/images/sections/home/product-2.jpg'
import product3 from '@/assets/images/sections/home/product-3.jpg'
import product4 from '@/assets/images/sections/home/product-4.jpg'
import { StaticImageData } from 'next/image'
export type Location = {
	city: string
	country: string
}

export type Characteristic = {
	value: string | number
	icon: React.ElementType
}

export type Products = {
	image: StaticImageData
	name: string
	type: string
	similar: string
	// rentals: string
	rating: number
	grade: number
	characteristics: Characteristic[]
	price: number
	location: Location[]
}

export const products: Products[] = [
	{
		image: product1,
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		// rentals: 'Varna rentals',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: GearboxMechanic },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
			{ city: 'Burgas', country: 'Bulgaria' },
		],
	},
	{
		image: product2,
		name: 'Mercedes E-Class',
		type: 'Business Class',
		similar: 'or similar Mini',
		// rentals: 'Varna rentals',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: GearboxMechanic },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		image: product3,
		name: 'Harrier Wagon',
		type: 'Economy',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Auto', icon: GearboxAuto },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: GearboxAuto },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: GearboxAuto },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: GearboxAuto },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: GearboxAuto },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: GearboxAuto },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		image: product4,
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: Passenger },
			{ value: 3, icon: Baggage },
			{ value: 4, icon: Doors },
			{ value: 'Manual', icon: GearboxAuto },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
]
