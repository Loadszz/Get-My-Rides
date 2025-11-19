export interface INavLink {
	id: number
	label: string
	href: string
}
export const headerLinks: INavLink[] = [
	{ id: 1, label: 'Car Rental', href: '/car-rental' },
	{ id: 2, label: 'Locations', href: '#' },
	{ id: 3, label: 'Vehicle Types', href: '#' },
	{ id: 4, label: 'Blog', href: '#' },
	{ id: 5, label: 'About Us', href: '/about-us' },
]
export const footerLinks: INavLink[] = [
	{ id: 1, label: 'About Us', href: '/about-us' },
	{ id: 2, label: 'Car Rental', href: '/car-rental' },
	{ id: 3, label: 'Terms & Conditions', href: '#' },
	{ id: 4, label: 'Privacy Policy', href: '#' },
	{ id: 5, label: 'Reviews', href: '#' },
	{ id: 6, label: 'Blog', href: '#' },
	{ id: 7, label: 'Partnership', href: '#' },
	{ id: 8, label: 'Service Providers', href: '#' },
	{ id: 9, label: 'Contact', href: '/contact' },
	{ id: 10, label: 'FAQ', href: '#' },
]
