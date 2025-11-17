import IconMapsLocation from '@/assets/icons/about-us/maps-location.svg'
import IconLocation from '@/assets/icons/common/location.svg'
import picture1 from '@/assets/images/sections/about-us/where-we-operate-1.jpg'
import picture2 from '@/assets/images/sections/about-us/where-we-operate-2.jpg'
import picture3 from '@/assets/images/sections/about-us/where-we-operate-3.jpg'
import picture4 from '@/assets/images/sections/about-us/where-we-operate-4.jpg'
import picture5 from '@/assets/images/sections/about-us/where-we-operate-5.jpg'
import picture6 from '@/assets/images/sections/about-us/where-we-operate-6.jpg'
import { StaticImageData } from 'next/image'
interface ILink {
	text: string
	href: string
}
export interface IWhereWeOperateProps {
	id: number
	city: string
	cityShort?: string
	image: StaticImageData
	iconHeader: React.ElementType
	iconLink: React.ElementType
	link: ILink
}
export const whereWeOperateProps: IWhereWeOperateProps[] = [
	{
		id: 1,
		city: 'Sofia',
		image: picture1,
		iconHeader: IconLocation,
		iconLink: IconMapsLocation,
		link: { text: 'Read more', href: '#' },
	},
	{
		id: 2,
		city: 'Varna',
		image: picture2,
		iconHeader: IconLocation,
		iconLink: IconMapsLocation,
		link: { text: 'Read more', href: '#' },
	},
	{
		id: 3,
		city: 'Burgas',
		image: picture3,
		iconHeader: IconLocation,
		iconLink: IconMapsLocation,
		link: { text: 'Read more', href: '#' },
	},
	{
		id: 4,
		city: 'Greece',
		image: picture4,
		iconHeader: IconLocation,
		iconLink: IconMapsLocation,
		link: { text: 'Read more', href: '#' },
	},
	{
		id: 5,
		city: 'Romania',
		image: picture5,
		iconHeader: IconLocation,
		iconLink: IconMapsLocation,
		link: { text: 'Read more', href: '#' },
	},
	{
		id: 6,
		city: 'Other countries',
		cityShort: 'Other',
		image: picture6,
		iconHeader: IconLocation,
		iconLink: IconMapsLocation,
		link: { text: 'Read more', href: '#' },
	},
]
