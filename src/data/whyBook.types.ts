import IconTickDouble from '@/assets/icons/common/tick-double.svg'
export interface IPropsWhyBook {
	id: number
	icon: React.ElementType
	title: string
	text: string
}

export const whyBookProps: IPropsWhyBook[] = [
	{
		id: 1,
		title: 'Save up to 20% vs major brands',
		icon: IconTickDouble,
		text: 'From 30+ local companies you won`t always find on other platforms',
	},
	{
		id: 2,
		title: 'Local expertise',
		icon: IconTickDouble,
		text: 'With tailored recommendations for each destination',
	},
	{
		id: 3,
		title: 'Faster service',
		icon: IconTickDouble,
		text: 'Average pick-up time is 7 mins with verified partners',
	},
	{
		id: 4,
		title: 'More flexibility',
		icon: IconTickDouble,
		text: 'Long-term rentals, one-way trips, and special requests are easier to arrange',
	},
	{
		id: 5,
		title: 'Direct customer support',
		icon: IconTickDouble,
		text: 'We connect you straight with the provider, no endless call-center loops',
	},
]
