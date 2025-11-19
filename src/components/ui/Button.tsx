import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	className?: string
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	formName?: string
	href?: string
	variant?: 'primary' | 'secondary' | 'transparent' | 'sign' | 'white'
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
		secondary:
			'font-dmSans font-medium text-base bg-[#0a58ca] transform-all duration-300 hover:bg-[#002088]',
		transparent:
			'font-dmSans font-medium text-base text-[#0a58ca] border border-[#0a58ca] transform-all duration-300 hover:text-[#ffffff] hover:bg-[#0a58ca]',
		sign: 'font-dmSans font-medium text-base text-[#ffffff] bg-[#FFFFFF3D] border border-[#FFFFFF8F] rounded-[12px] transform-all duration-300 hover:text-[#002088] hover:bg-[#ffffff]',
		white:
			'font-dmSans font-medium text-base bg-white transform-all duration-300 hover:text-white hover:bg-[#241cbf]',
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
