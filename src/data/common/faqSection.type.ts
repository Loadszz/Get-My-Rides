import { StaticImageData } from 'next/image'

export interface IFAQSectionProps {
	id: number
	image?: StaticImageData
	title?: string
	content?: string | React.ReactNode
}
