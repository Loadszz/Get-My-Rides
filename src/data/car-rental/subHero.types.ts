import IconCheck from '@/assets/icons/booking/check.svg'
export interface IPropsSubHero {
	id: number
	icon: React.ElementType
	texts: string[]
}

export const subHeroProps: IPropsSubHero[] = [
	{
		id: 1,
		icon: IconCheck,
		texts: [
			'Compare rental prices from multiple providers in one place',
			'Locations at airports, city centers, and popular destinations',
		],
	},
	{
		id: 2,
		icon: IconCheck,
		texts: [
			'Wide range of vehicles: economy, SUVs, luxury, vans, and electric',
			'Flexible booking options with insurance and free cancellation',
		],
	},
	{
		id: 3,
		icon: IconCheck,
		texts: [
			'No credit card surprises, clear deposit policies upfront',
			'Transparent pricing - no hidden fees',
		],
	},
]
