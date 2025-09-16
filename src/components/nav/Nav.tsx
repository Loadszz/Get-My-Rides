import { navLinks } from '@/data/navLinks'
interface NavProps {
	ulClassName?: string
	liClassName?: string
}

export const Nav = ({ ulClassName = '', liClassName = '' }: NavProps) => {
	return (
		<nav>
			<ul className={ulClassName}>
				{navLinks.map((link, index) => (
					<li className={liClassName} key={index}>
						{link.label}
					</li>
				))}
			</ul>
		</nav>
	)
}
