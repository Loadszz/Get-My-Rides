import IconTooltip from '@/assets/icons/tooltip.svg'
export interface IServicesProps {
	id: number
	title: string
	icon: React.ElementType
	textIcon: string
	description: string
	price: number
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
		title: 'Additional driver',
		icon: IconTooltip,
		textIcon: 'Something',
		description: 'If you want additional people to drive',
		price: 10,
	},
	{
		id: 3,
		title: 'Additional driver',
		icon: IconTooltip,
		textIcon: 'Something',
		description: 'If you want additional people to drive',
		price: 10,
	},
	{
		id: 4,
		title: 'Additional driver',
		icon: IconTooltip,
		textIcon: 'Something',
		description: 'If you want additional people to drive',
		price: 10,
	},
]
