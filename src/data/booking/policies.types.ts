import IconCancelCircle from '@/assets/icons/booking/cancel-circle.svg'
import IconCreditCard from '@/assets/icons/booking/credit-card.svg'
import IconDashboardSpeed from '@/assets/icons/booking/dashboard-speed.svg'
import IconDriver from '@/assets/icons/booking/driver.svg'
import IconGas from '@/assets/icons/booking/gas.svg'
import IconFile from '@/assets/icons/file.svg'

export type PolicyContent =
	| { type: 'text'; label: string }
	| { type: 'links'; links: { label: string; href: string }[] }

export interface IPoliciesProps {
	id: number
	icon: React.ElementType
	title: string
	content: PolicyContent[]
}

export const policiesProps: IPoliciesProps[] = [
	{
		id: 1,
		icon: IconDriver,
		title: 'Driver & License requirements',
		content: [
			{ type: 'text', label: 'Passport or national ID' },
			{ type: 'text', label: 'Valid driving license' },
			{ type: 'text', label: 'Credit card' },
		],
	},
	{
		id: 2,
		icon: IconGas,
		title: 'Fuel Policy',
		content: [
			{
				type: 'text',
				label: 'Full tank during pick-up to full tank during drop-off',
			},
		],
	},
	{
		id: 3,
		icon: IconCancelCircle,
		title: 'Cancellation',
		content: [{ type: 'text', label: 'Free cancellation up to 48 hours' }],
	},
	{
		id: 4,
		icon: IconCreditCard,
		title: 'Security Deposit',
		content: [
			{ type: 'text', label: '400 EUR refundable depositpaid at pick-up' },
		],
	},
	{
		id: 5,
		icon: IconDashboardSpeed,
		title: 'Mileage',
		content: [{ type: 'text', label: 'Unlimited free kilometers' }],
	},
	{
		id: 6,
		icon: IconFile,
		title: 'Terms and Conditions',
		content: [
			{
				type: 'links',
				links: [
					{ label: 'Service Terms', href: '#' },
					{ label: 'Varna Rental Terms & Conditions', href: '#' },
				],
			},
		],
	},
]
