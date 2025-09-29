import IconCar from '@/assets/icons/car.svg'
import IconClock from '@/assets/icons/clock.svg'
import IconDate from '@/assets/icons/date.svg'
import IconLocation from '@/assets/icons/location.svg'

export type RentalLocationContent =
	| { type: 'text'; label: string }
	| { type: 'links'; links: { label: string; href: string }[] }

export interface IRentalLocationProps {
	id: number
	icon: React.ElementType
	title: string
	content?: RentalLocationContent[]
}

export const rentalLocation: IRentalLocationProps[] = [
	{
		id: 1,
		icon: IconLocation,
		title: 'Hristo Smirnenski 29A',
		content: [
			{
				type: 'links',
				links: [{ label: 'See alternative pickup locations', href: '#' }],
			},
		],
	},
	{
		id: 2,
		icon: IconCar,
		title: 'Serviced by Varna Rentals',
	},
	{
		id: 3,
		icon: IconDate,
		title: 'Pick-up: Wednesday, Feb 19th 11:00 AM',
		content: [
			{
				type: 'links',
				links: [{ label: 'Change pick-up', href: '#' }],
			},
		],
	},
	{
		id: 4,
		icon: IconClock,
		title: 'Hours of operation:',
		content: [
			{
				type: 'text',
				label: 'Mon-Fri 7:00 am - 10:00 pm',
			},
			{
				type: 'text',
				label: 'Sat-Sun 7:00 am - 10:00 pm',
			},
		],
	},
	{
		id: 5,
		icon: IconDate,
		title: 'Drop-off: Wednesday, Feb 19th 11:00 AM',
		content: [
			{
				type: 'links',
				links: [{ label: 'Change drop-off', href: '#' }],
			},
		],
	},
]
