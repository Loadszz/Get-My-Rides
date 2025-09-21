import { navLinks } from '@/data/navLinks'
import Link from 'next/link'

export const Nav = ({ ulClassName = '', liClassName = '' }) => {
	return (
		<nav>
			<ul className={ulClassName}>
				{navLinks.map((link, index) => (
					<li className={liClassName} key={index}>
						<Link className='inline-block' href={link.href}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
