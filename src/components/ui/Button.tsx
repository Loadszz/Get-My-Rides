import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	className?: string
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	formName?: string
	href?: string
	variant?: 'primary' | 'secondary' | 'transparent' | 'sign'
}

export const Button = ({
	children,
	className = '',
	onClick,
	type = 'button',
	formName,
	href,
	variant = 'primary',
}: ButtonProps) => {
	const variants: Record<string, string> = {
		primary:
			'font-dmSans font-medium text-base bg-[#FFFFFF3D] border border-[#FFFFFF8F]',
		secondary: 'font-dmSans font-medium text-base bg-[#0a58ca]',
		transparent:
			'font-dmSans font-medium text-base text-[#0a58ca] border border-[#0a58ca]',
		sign: 'font-dmSans font-medium text-base text-[#ffffff] bg-[#FFFFFF3D] border border-[#FFFFFF8F] rounded-[12px]',
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
		<button
			form={formName}
			type={type}
			onClick={onClick}
			className={finalClassName}
		>
			{children}
		</button>
	)
}
