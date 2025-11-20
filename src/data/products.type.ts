export type Location = {
	city: string
	country: string
}

export type Characteristic = {
	id: number
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
		image: '/images/1.jpg',
		imageSearch: '/images/product/search/product-search-1.jpg',
		imageSlider: [
			'/images/product/booking/product-booking-1.jpg',
			'/images/product/booking/product-booking-1.jpg',
			'/images/product/booking/product-booking-1.jpg',
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
			{ id: 1, value: 4, icon: '/icons/passenger.svg' },
			{ id: 2, value: 3, icon: '/icons/baggage.svg' },
			{ id: 3, value: 4, icon: '/icons/doors.svg' },
			{ id: 4, value: 'Manual', icon: '/icons/gearbox-mechanic.svg' },
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
		image: '/images/2.jpeg',
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
			{ id: 5, value: 4, icon: '/icons/passenger.svg' },
			{ id: 6, value: 3, icon: '/icons/baggage.svg' },
			{ id: 7, value: 4, icon: '/icons/doors.svg' },
			{ id: 8, value: 'Manual', icon: '/icons/gearbox-mechanic.svg' },
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
		image: '/images/3.webp',
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
			{ id: 9, value: 4, icon: '/icons/passenger.svg' },
			{ id: 10, value: 3, icon: '/icons/baggage.svg' },
			{ id: 11, value: 4, icon: '/icons/doors.svg' },
			{ id: 12, value: 'Manual', icon: '/icons/gearbox-auto.svg' },
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
			{ id: 13, value: 4, icon: '/icons/passenger.svg' },
			{ id: 14, value: 3, icon: '/icons/baggage.svg' },
			{ id: 15, value: 4, icon: '/icons/doors.svg' },
			{ id: 16, value: 'Manual', icon: '/icons/gearbox-auto.svg' },
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
			{ id: 17, value: 4, icon: '/icons/passenger.svg' },
			{ id: 18, value: 3, icon: '/icons/baggage.svg' },
			{ id: 19, value: 4, icon: '/icons/doors.svg' },
			{ id: 20, value: 'Manual', icon: '/icons/gearbox-auto.svg' },
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
			{ id: 21, value: 4, icon: '/icons/passenger.svg' },
			{ id: 22, value: 3, icon: '/icons/baggage.svg' },
			{ id: 23, value: 4, icon: '/icons/doors.svg' },
			{ id: 24, value: 'Manual', icon: '/icons/gearbox-auto.svg' },
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
			{ id: 25, value: 4, icon: '/icons/passenger.svg' },
			{ id: 26, value: 3, icon: '/icons/baggage.svg' },
			{ id: 27, value: 4, icon: '/icons/doors.svg' },
			{ id: 28, value: 'Manual', icon: '/icons/gearbox-auto.svg' },
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
			{ id: 29, value: 4, icon: '/icons/passenger.svg' },
			{ id: 30, value: 3, icon: '/icons/baggage.svg' },
			{ id: 31, value: 4, icon: '/icons/doors.svg' },
			{ id: 32, value: 'Manual', icon: '/icons/gearbox-auto.svg' },
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
			{ id: 33, value: 4, icon: '/icons/passenger.svg' },
			{ id: 34, value: 3, icon: '/icons/baggage.svg' },
			{ id: 35, value: 4, icon: '/icons/doors.svg' },
			{ id: 36, value: 'Manual', icon: '/icons/gearbox-auto.svg' },
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
