'use client'
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
		<a
			className={`${className} inline-block font-bold text-[2rem] leading-[1.25] whitespace-nowrap`}
			onClick={handleClick}
			href='/'
		>
			Get My Rides
		</a>
	)
}
