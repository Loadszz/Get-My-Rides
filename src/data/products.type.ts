export type Location = {
	city: string
	country: string
}

export type Characteristic = {
	value: string | number
	icon: string
}

export type Product = {
	id: number | string
	image: string
	imageSlider: string[]
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

export const products: Product[] = [
	{
		id: 1,
		image: '/images/product-1.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		// rentals: 'Varna rentals',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-mechanic.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
			{ city: 'Burgas', country: 'Bulgaria' },
		],
	},
	{
		id: 2,
		image: '/images/product-2.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Mercedes E-Class',
		type: 'Business Class',
		similar: 'or similar Mini',
		// rentals: 'Varna rentals',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-mechanic.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		id: 3,
		image: '/images/product-3.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Harrier Wagon',
		type: 'Economy',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-auto.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		id: 4,
		image: '/images/product-4.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-auto.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		id: 5,
		image: '/images/product-4.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-auto.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		id: 6,
		image: '/images/product-4.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-auto.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		id: 7,
		image: '/images/product-4.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-auto.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		id: 8,
		image: '/images/product-4.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-auto.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
	{
		id: 9,
		image: '/images/product-4.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		similar: 'or similar Mini',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-auto.svg' },
		],
		price: 65,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
	},
]
