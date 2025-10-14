import IconTooltip from '@/assets/icons/tooltip.svg'
export interface IServicesProps {
	id: number
	title: string
	icon: React.ElementType
	textIcon: string
	description: string
	price: number
	quantity: number
}

export const servicesProps: IServicesProps[] = [
	{
		id: 1,
		title: 'Additional driver',
		icon: IconTooltip,
		textIcon: 'Something',
		description: 'If you want additional people to drive',
		price: 10,
	},
	{
		id: 2,
		title: 'GPS*',
		icon: IconTooltip,
		textIcon: 'Something',
		description: 'If you want additional people to drive',
		price: 10,
	},
	{
		id: 3,
		title: 'Child Seat*',
		icon: IconTooltip,
		textIcon: 'Something',
		description: 'For small children: 9-18 kg/ 20-40 lbs (about 1-3 years old)',
		price: 10,
	},
	{
		id: 4,
		title: 'Full Insurance Coverage',
		icon: IconTooltip,
		textIcon: 'Something',
		description: 'Covers damage and reduces deposit amount to €200',
		price: 10,
	},
]
