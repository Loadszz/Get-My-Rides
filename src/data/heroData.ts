import IconCheck from '@/assets/icons/check.svg'
export interface heroProps {
	icon: React.ElementType
	text: string
}
export const heroData: heroProps[] = [
	{ icon: IconCheck, text: 'Best prices' },
	{ icon: IconCheck, text: 'Easy to book' },
	{ icon: IconCheck, text: 'Great service' },
	{ icon: IconCheck, text: 'Free cancellations' },
]
