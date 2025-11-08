import avatar1 from '@/assets/images/sections/home/about-us-1.jpg'
import avatar2 from '@/assets/images/sections/home/about-us-2.jpg'
import avatar3 from '@/assets/images/sections/home/about-us-3.jpg'
import avatar4 from '@/assets/images/sections/home/about-us-4.jpg'
import avatar5 from '@/assets/images/sections/home/about-us-5.jpg'
import avatar6 from '@/assets/images/sections/home/about-us-6.jpg'
import { StaticImageData } from 'next/image'

export type AboutUsCard = {
	name: string
	role: string
	text: string
	avatar: StaticImageData
	rating: number
}

export const aboutUsCards: AboutUsCard[] = [
	{
		name: 'Shruti Anupkumar',
		role: 'Business Traveller',
		text: 'Great that I can now book rental services that could only be reached offline. No more scrolling Google Maps in hope of a website to rent my car!',
		avatar: avatar1,
		rating: 4,
	},
	{
		name: 'Kateryna Ostrovska',
		role: 'Private Entrepreneur',
		text: 'Simple to use and fast booking process. Was easily able to find separate categories for business class and luxury vehicles. Get My Rides made the rental super convenient.',
		avatar: avatar2,
		rating: 5,
	},
	{
		name: 'Jonathan S.',
		role: 'Digital Nomad',
		text: 'Had a great experience booking my rental car with Get My Rides. Finally found a way to book my transport without having to search for days!',
		avatar: avatar3,
		rating: 3,
	},
	{
		name: 'Jonathan S.',
		role: 'Digital Nomad',
		text: 'Had a great experience booking my rental car with Get My Rides. Finally found a way to book my transport without having to search for days!',
		avatar: avatar3,
		rating: 4,
	},
	{
		name: 'Jonathan S.',
		role: 'Digital Nomad',
		text: 'Had a great experience booking my rental car with Get My Rides. Finally found a way to book my transport without having to search for days!',
		avatar: avatar3,
		rating: 5,
	},
	{
		name: 'Steven Smith',
		role: 'Digital Nomad',
		text: 'Had a great experience booking my rental car with Get My Rides. Finally found a way to book my transport without having to search for days!',
		avatar: avatar4,
		rating: 5,
	},
	{
		name: 'John M.',
		role: 'Business Traveller',
		text: 'Great that I can now book rental services that could only be reached offline. No more scrolling Google Maps in hope of a website to rent my car!',
		avatar: avatar5,
		rating: 5,
	},
	{
		name: 'Matt D.',
		role: 'Private Entrepreneur',
		text: 'Simple to use and fast booking process. Was easily able to find separate categories for business class and luxury vehicles.',
		avatar: avatar6,
		rating: 5,
	},
	{
		name: 'Matt D.',
		role: 'Private Entrepreneur',
		text: 'Simple to use and fast booking process. Was easily able to find separate categories for business class and luxury vehicles.',
		avatar: avatar6,
		rating: 5,
	},
	{
		name: 'Matt D.',
		role: 'Private Entrepreneur',
		text: 'Simple to use and fast booking process. Was easily able to find separate categories for business class and luxury vehicles.',
		avatar: avatar6,
		rating: 5,
	},
	{
		name: 'Matt D.',
		role: 'Private Entrepreneur',
		text: 'Simple to use and fast booking process. Was easily able to find separate categories for business class and luxury vehicles.',
		avatar: avatar6,
		rating: 5,
	},
	{
		name: 'Matt D.',
		role: 'Private Entrepreneur',
		text: 'Simple to use and fast booking process. Was easily able to find separate categories for business class and luxury vehicles.',
		avatar: avatar6,
		rating: 5,
	},
]
