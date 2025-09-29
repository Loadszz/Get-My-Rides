import IconLocation from '@/assets/icons/location.svg'
export type FilterOption = {
	label: string
	value: string
}

export type FilterGroup = {
	icon: React.ElementType
	title: string
	key: string
	options: FilterOption[]
}

export const filters: FilterGroup[] = [
	{
		icon: IconLocation,
		title: 'Location',
		key: 'location',
		options: [
			{ label: 'Varna Center', value: 'Varna Center' },
			{ label: 'Varna Airport', value: 'Varna Airport' },
			{ label: 'Hotel Delivery', value: 'Hotel Delivery' },
		],
	},
	{
		title: 'Price per day',
		key: 'pricePerDay',
		options: [
			{ label: '0–30 EUR', value: '0-30' },
			{ label: '30–50 EUR', value: '30-50' },
			{ label: '50–100 EUR', value: '50-100' },
			{ label: '100+ EUR', value: '100+' },
		],
	},
	{
		title: 'Car Type',
		key: 'carType',
		options: [
			{ label: 'Economy', value: 'Economy' },
			{ label: 'Compact', value: 'Compact' },
			{ label: 'Standard', value: 'Standard' },
			{ label: 'Sedan', value: 'Sedan' },
			{ label: 'Luxury', value: 'Luxury' },
			{ label: 'Sports', value: 'Sports' },
		],
	},
	{
		title: 'Passengers',
		key: 'passengers',
		options: [
			{ label: '2 Passengers', value: '2' },
			{ label: '4 Passengers', value: '4' },
			{ label: '5 Passengers', value: '5' },
			{ label: '7 Passengers', value: '7' },
			{ label: '8+ Passengers', value: '8' },
		],
	},
	{
		title: 'Transmission',
		key: 'transmission',
		options: [
			{ label: 'Any', value: 'Any' },
			{ label: 'Manual', value: 'Manual' },
			{ label: 'Automatic', value: 'Automatic' },
			{ label: 'Semi-Automatic', value: 'Semi-Automatic' },
		],
	},
]
