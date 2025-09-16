import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	className?: string
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	href?: string // если передали ссылку — это переход
	variant?: 'primary' | 'secondary'
}

export const Button = ({
	children,
	className = '',
	onClick,
	type = 'button',
	href,
	variant = 'primary',
}: ButtonProps) => {
	const variants: Record<string, string> = {
		primary:
			'font-dmSans font-medium text-base bg-[#FFFFFF3D] border border-[#FFFFFF8F]',
		secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
	}

	const finalClassName = `${variants[variant]} ${className}`

	if (href) {
		return (
			<Link href={href} className={finalClassName}>
				{children}
			</Link>
		)
	}

	return (
		<button type={type} onClick={onClick} className={finalClassName}>
			{children}
		</button>
	)
}
