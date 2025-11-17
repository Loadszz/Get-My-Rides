import { StaticImageData } from 'next/image'

export interface IFAQSectionProps {
	id: number
	image?: StaticImageData | null
	title?: string
	content?: string | React.ReactNode
}
