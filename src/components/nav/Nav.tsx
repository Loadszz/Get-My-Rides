import { INavLink } from '@/data/navLinks'
import Link from 'next/link'
interface INavProps {
	links: INavLink[]
	navClassName?: string
	ulClassName?: string
	liClassName?: string
	linkClassName?: string
}
export const Nav = ({
	links,
	navClassName = '',
	ulClassName = '',
	liClassName = '',
	linkClassName = '',
}: INavProps) => {
	return (
		<nav className={navClassName}>
			<ul className={ulClassName}>
				{links.map(link => (
					<li className={liClassName} key={link.id}>
						<Link className={`${linkClassName} inline-block`} href={link.href}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
