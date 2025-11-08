import IconCarEngine from '@/assets/icons/filter/car-engine-filter.svg'
import IconCar from '@/assets/icons/filter/car-filter.svg'
import IconDeposit from '@/assets/icons/filter/deposit-filter.svg'
import IconFile1 from '@/assets/icons/filter/file-filter-1.svg'
import IconFile2 from '@/assets/icons/filter/file-filter-2.svg'
import IconLocation from '@/assets/icons/filter/location-filter.svg'
import IconManualTransmission from '@/assets/icons/filter/manual-transmission-filter.svg'
import IconPaymentMethod from '@/assets/icons/filter/payment-method-filter.svg'
import IconPeople from '@/assets/icons/filter/people-filter.svg'

export type FilterOption = {
	id: string
	label: string
	value: string
}

export type FilterGroup = {
	id: number
	icon: React.ElementType
	title: string
	key: string
	options: FilterOption[]
}

export const filters: FilterGroup[] = [
	{
		id: 1,
		icon: IconLocation,
		title: 'Location',
		key: 'place',
		options: [
			{ id: '1', label: 'Varna Center', value: 'Varna Center' },
			{ id: '2', label: 'Varna Airport', value: 'Varna Airport' },
			{ id: '3', label: 'Hotel Delivery', value: 'Hotel Delivery' },
		],
	},
	{
		id: 2,
		icon: IconFile1,
		title: 'Price per day',
		key: 'price',
		options: [
			{ id: '4', label: '0–30 EUR', value: '0-30' },
			{ id: '5', label: '30–50 EUR', value: '30-50' },
			{ id: '6', label: '50–100 EUR', value: '50-100' },
			{ id: '7', label: '100+ EUR', value: '100+' },
		],
	},
	{
		id: 3,
		icon: IconCar,
		title: 'Car Type',
		key: 'type',
		options: [
			{ id: '8', label: 'Economy', value: 'Economy' },
			{ id: '9', label: 'Compact', value: 'Compact' },
			{ id: '10', label: 'Standard', value: 'Standard' },
			{ id: '11', label: 'Sedan', value: 'Sedan' },
			{ id: '12', label: 'Luxury', value: 'Luxury' },
			{ id: '13', label: 'Sports', value: 'Sports' },
		],
	},
	{
		id: 4,
		icon: IconPeople,
		title: 'Passengers',
		key: 'passengers',
		options: [
			{ id: '14', label: '2 Passengers', value: '2' },
			{ id: '15', label: '4 Passengers', value: '4' },
			{ id: '16', label: '5 Passengers', value: '5' },
			{ id: '17', label: '7 Passengers', value: '7' },
			{ id: '18', label: '8+ Passengers', value: '8' },
		],
	},
	{
		id: 5,
		icon: IconManualTransmission,
		title: 'Transmission',
		key: 'transmission',
		options: [
			{ id: '19', label: 'Any', value: 'Any' },
			{ id: '20', label: 'Manual', value: 'Manual' },
			{ id: '21', label: 'Automatic', value: 'Automatic' },
			{ id: '22', label: 'Semi-Automatic', value: 'Semi-Automatic' },
		],
	},
	{
		id: 6,
		icon: IconCarEngine,
		title: 'Transmission',
		key: 'transmission',
		options: [
			{ id: '23', label: 'Any', value: 'Any' },
			{ id: '24', label: 'Manual', value: 'Manual' },
			{ id: '25', label: 'Automatic', value: 'Automatic' },
			{ id: '26', label: 'Semi-Automatic', value: 'Semi-Automatic' },
		],
	},
	{
		id: 7,
		icon: IconFile2,
		title: 'Transmission',
		key: 'transmission',
		options: [
			{ id: '27', label: 'Any', value: 'Any' },
			{ id: '28', label: 'Manual', value: 'Manual' },
			{ id: '29', label: 'Automatic', value: 'Automatic' },
			{ id: '30', label: 'Semi-Automatic', value: 'Semi-Automatic' },
		],
	},
	{
		id: 8,
		icon: IconPaymentMethod,
		title: 'Transmission',
		key: 'transmission',
		options: [
			{ id: '31', label: 'Any', value: 'Any' },
			{ id: '32', label: 'Manual', value: 'Manual' },
			{ id: '33', label: 'Automatic', value: 'Automatic' },
			{ id: '34', label: 'Semi-Automatic', value: 'Semi-Automatic' },
		],
	},
	{
		id: 9,
		icon: IconDeposit,
		title: 'Transmission',
		key: 'transmission',
		options: [
			{ id: '35', label: 'Any', value: 'Any' },
			{ id: '36', label: 'Manual', value: 'Manual' },
			{ id: '37', label: 'Automatic', value: 'Automatic' },
			{ id: '38', label: 'Semi-Automatic', value: 'Semi-Automatic' },
		],
	},
]
