import IconBubble from '@/assets/icons/about-us/bubble-chat-done.svg'
import IconCansel from '@/assets/icons/about-us/cancel-square.svg'
import IconFile from '@/assets/icons/about-us/file-verified.svg'
import IconSecurity from '@/assets/icons/about-us/security-check.svg'

export interface ITrustAndTransparencyProps {
	id: number
	title: string
	text: string
	icon: React.ElementType
}

export const trustAndTransparencyProps: ITrustAndTransparencyProps[] = [
	{
		id: 1,
		title: 'No hidden fees',
		text: 'What you see is what you pay',
		icon: IconCansel,
	},
	{
		id: 2,
		title: 'Verified partners only',
		text: 'Insured, licensed, and trusted rental companies',
		icon: IconSecurity,
	},
	{
		id: 3,
		title: 'Clear cancellation terms',
		text: 'No surprises or fine print',
		icon: IconFile,
	},
	{
		id: 4,
		title: 'Real reviews',
		text: 'Honest ratings from real travellers',
		icon: IconBubble,
	},
]
