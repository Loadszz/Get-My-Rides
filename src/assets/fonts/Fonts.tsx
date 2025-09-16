import localFont from 'next/font/local'

export const lato = localFont({
	src: [
		{
			path: './Lato-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './Lato-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './Lato-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	variable: '--font-lato',
})
export const dmSans = localFont({
	src: [
		{
			path: './DMSans-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './DMSans-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './DMSans-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './DMSans-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-dmSans',
})
