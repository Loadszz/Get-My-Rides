export type Location = {
	city: string
	country: string
}

export type Characteristic = {
	value: string | number
	icon: string
}
export type BookedPeriods = {
	from: string
	to: string
}
export type Product = {
	id: number
	image: string
	imageSearch: string
	imageSlider: string[]
	name: string
	type: string
	place: string
	passengers: string
	transmission: string
	similar: string
	rentals: string
	rating: number
	grade: number
	characteristics: Characteristic[]
	price: number
	location: Location[]
	bookedPeriods: BookedPeriods[]
	cheapest: boolean
}

export const products: Product[] = [
	{
		id: 1,
		image: '/images/product-1.jpg',
		imageSearch: '/images/product/search/product-search-1.jpg',
		imageSlider: [
			'/images/product/booking/product-booking-1.jpg',
			'/images/product/booking/product-booking-1.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		place: 'Varna Center',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-mechanic.svg' },
		],
		price: 20,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
			{ city: 'Burgas', country: 'Bulgaria' },
		],
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
	{
		id: 2,
		image: '/images/product-2.jpg',
		imageSearch: '/images/product/search/product-search-2.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Mercedes E-Class',
		type: 'Business Class',
		place: 'Varna Airport',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
		rating: 5,
		grade: 8.7,
		characteristics: [
			{ value: 4, icon: '/icons/passenger.svg' },
			{ value: 3, icon: '/icons/baggage.svg' },
			{ value: 4, icon: '/icons/doors.svg' },
			{ value: 'Manual', icon: '/icons/gearbox-mechanic.svg' },
		],
		price: 130,
		location: [
			{ city: 'Varna', country: 'Bulgaria' },
			{ city: 'Sofia', country: 'Bulgaria' },
		],
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
	{
		id: 3,
		image: '/images/product-3.jpg',
		imageSearch: '/images/product/search/product-search-3.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Harrier Wagon',
		type: 'Economy',
		place: 'Varna Hotel',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
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
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
	{
		id: 4,
		image: '/images/product-4.jpg',
		imageSearch: '/images/product/search/product-search-4.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		place: 'Varna Hotel',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
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
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
	{
		id: 5,
		image: '/images/product-4.jpg',
		imageSearch: '/images/product/search/product-search-1.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		place: 'Varna Hotel',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
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
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
	{
		id: 6,
		image: '/images/product-4.jpg',
		imageSearch: '/images/product/search/product-search-1.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		place: 'Varna Hotel',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
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
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
	{
		id: 7,
		image: '/images/product-4.jpg',
		imageSearch: '/images/product/search/product-search-1.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		place: 'Varna Airport',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
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
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
	{
		id: 8,
		image: '/images/product-4.jpg',
		imageSearch: '/images/product/search/product-search-1.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		place: 'Varna Center',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
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
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
	{
		id: 9,
		image: '/images/product-4.jpg',
		imageSearch: '/images/product/search/product-search-1.jpg',
		imageSlider: [
			'/images/product-1.jpg',
			'/images/product-2.jpg',
			'/images/product-3.jpg',
		],
		name: 'Volvo XC60',
		type: 'Business Class',
		place: 'Varna Hotel',
		passengers: '2',
		transmission: 'Manual',
		similar: 'or similar',
		rentals: '/images/logo-product.png',
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
		bookedPeriods: [
			{ from: '2025-10-10T10:00:00Z', to: '2025-10-12T18:00:00Z' },
		],
		cheapest: true,
	},
]
