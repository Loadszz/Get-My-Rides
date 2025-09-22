import { navLinks } from '@/data/navLinks'
import Link from 'next/link'

export const Nav = ({
	navClassName = '',
	ulClassName = '',
	liClassName = '',
	linkClassName = '',
}) => {
	return (
		<nav className={navClassName}>
			<ul className={ulClassName}>
				{navLinks.map((link, index) => (
					<li className={liClassName} key={index}>
						<Link className={`${linkClassName} inline-block`} href={link.href}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
