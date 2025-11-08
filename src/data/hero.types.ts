import IconCheck from '@/assets/icons/check.svg'
export interface IHeroProps {
	icon: React.ElementType
	text: string
}
export const heroData: IHeroProps[] = [
	{ icon: IconCheck, text: 'Best prices' },
	{ icon: IconCheck, text: 'Easy to book' },
	{ icon: IconCheck, text: 'Great service' },
	{ icon: IconCheck, text: 'Free cancellations' },
]
