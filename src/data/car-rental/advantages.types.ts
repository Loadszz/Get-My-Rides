import IconCanselCircle from '@/assets/icons/car-rental/cancel-circle.svg'
import IconCheck from '@/assets/icons/car-rental/checkmark-circle.svg'

export interface IPropsAdvantages {
	id: number
	title: string
	icon?: React.ElementType
	texts: string[]
}
export const advantagesProps: IPropsAdvantages[] = [
	{
		id: 1,
		title: 'Feature',
		texts: [
			'Local providers included',
			'Transparent pricing',
			'Flexibility (one-way, long-term)',
			'Direct customer support',
			'Faster pick-up',
			'Lower average price',
		],
	},
	{
		id: 2,
		title: 'Get My Rides',
		icon: IconCheck,
		texts: [
			'Yes - find small and mid-size rental companies',
			'No hidden fees, full cost shown upfront',
			'Supported with local partners',
			'Supported with local partners',
			'Verified local desks at airports/cities',
			'Competitive rates from local suppliers',
		],
	},
	{
		id: 3,
		title: 'Big OTAs',
		icon: IconCanselCircle,
		texts: [
			'Often limited to global chains',
			'Extra charges often appear at checkout',
			'Limited or higher surcharges',
			'Routed through global call centers',
			'Long queues at major brand counters',
			'Commission-driven pricing',
		],
	},
]
