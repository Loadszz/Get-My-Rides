import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	className?: string
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	href?: string // если передали ссылку — это переход
	variant?: 'primary' | 'secondary' | 'card'
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
		secondary: 'font-dmSans font-medium text-base bg-[#0a58ca]',
		card: 'font-dmSans font-medium text-base text-[#0a58ca] border border-[#0a58ca] rounded-[6px]',
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
