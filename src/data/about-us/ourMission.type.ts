import IconLinkedin from '@/assets/icons/about-us/linkedin.svg'
import picture1 from '@/assets/images/sections/about-us/our-mission-1.jpg'
import picture2 from '@/assets/images/sections/about-us/our-mission-2.jpg'
import picture3 from '@/assets/images/sections/about-us/our-mission-3.jpg'
import { StaticImageData } from 'next/image'

export interface IOurMissionProps {
	id: number
	image: StaticImageData
	title: string
	content: string | React.ReactNode
	icon?: React.ElementType
}

export const ourMissionProps: IOurMissionProps[] = [
	{
		id: 1,
		image: picture1,
		title: 'Our Mission',
		content:
			'At Get My Rides, our mission is to make car rental in Bulgaria and across Europe transparent, affordable, and stress-free. <br/>Whether you`re looking for an airport car rental in Varna or Sofia, a long-term car hire for an extended stay, or a one-way trip across borders, we connect you with trusted local and international providers. <br/>Our goal is simple: to give travelers the freedom to compare prices, book securely online, and drive away with confidence - without hidden fees or unpleasant surprises.',
	},
	{
		id: 2,
		image: picture2,
		title: 'Why We Started',
		content:
			'Like many travelers, we noticed that booking a rental car often came with hidden fees, limited options, and confusing policies. Large booking sites promote the biggest chains, leaving local providers invisible - even when they offer better prices and friendlier service. <br/>That`s why we built Get My Rides: a platform that gives travellers more choice, fair pricing, and the ability to rent from trusted local companies as well as global brands.',
	},
	{
		id: 3,
		image: picture3,
		title: 'Meet the Founder',
		content:
			'Hi, I`m Konstantin Dolgushin, founder of Get My Rides. <br/>I`ve spent more than a decade building online travel and marketplace platforms, learning how to make complex services simple and reliable for people everywhere. Along the way, I`ve also traveled extensively - driving across Europe`s coastlines and mountains, navigating the open roads of the U.S., exploring Australia, and experiencing travel in places as diverse as Thailand and the UAE.<br/>These journeys taught me two things: how exciting it is to explore the world by car, and how frustrating traditional rental processes can be - from hidden fees to confusing rules and poor support. <br/>I created Get My Rides to change that. By combining digital convenience with trusted local expertise, we make renting a car fair, transparent, and traveller-friendly - so your rental car becomes the easiest part of your trip.',
		icon: IconLinkedin,
	},
]
