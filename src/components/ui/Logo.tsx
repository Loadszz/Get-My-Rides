'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
export const Logo = ({ className = '' }) => {
	const router = useRouter()
	const pathname = usePathname()

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		if (pathname !== '/') {
			router.push('/')
		}
	}

	return (
		<Link
			className={`${className} font-bold text-[2rem] leading-[1.25] shrink-0 max-md:text-[1.75rem] max-md:leading-[1.43]`}
			onClick={handleClick}
			href='/'
		>
			Get My Rides
		</Link>
	)
}
