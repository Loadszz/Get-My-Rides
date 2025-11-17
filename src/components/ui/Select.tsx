import { ReactElement, useEffect, useRef, useState } from 'react'

export interface ISelectProps<T> {
	options: T[]
	value: string
	onChange: (value: string, option?: T) => void
	getLabel: (option: T) => string
	variant?: 'primary' | 'secondary'
	className?: string
	icon?: ReactElement
}
export const Select = <T extends { id: number | string }>({
	options,
	value,
	onChange,
	getLabel,
	variant,
	className = '',
	icon,
}: ISelectProps<T>) => {
	const [open, setOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleSelect = (option: T) => {
		const label = getLabel(option)
		onChange(label, option)
		setOpen(false)
	}
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div ref={containerRef} className='relative'>
			<button
				type='button'
				onClick={() => setOpen(!open)}
				className={`${className} flex items-center gap-x-[10px] py-[16px] pl-[14px] w-full focus:outline-none`}
			>
				{icon}
				<span
					className={`${
						variant === 'primary' ? 'text-[#303030]' : 'text-white'
					} font-dmSans text-base`}
				>
					{value || 'Varna, Bulgaria'}
				</span>
			</button>
			{/* dropdown */}
			{open && (
				<ul className='absolute top-[100%] z-10 mt-[5px] w-full bg-white border border-gray-200 rounded-lg shadow-lg'>
					{options.map(option => (
						<li
							key={option.id}
							onClick={() => handleSelect(option)}
							className='font-dmSans text-base text-[#303030] pl-[14px] py-2 cursor-pointer hover:bg-blue-100'
						>
							{getLabel(option)}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
