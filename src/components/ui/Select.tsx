import IconLocation from '@/assets/icons/location.svg'
import { ILocationProps } from '@/data/locations.types'
import { useEffect, useRef, useState } from 'react'

export interface ISelectProps {
	options: ILocationProps[]
	value: string
	onChange: (value: string) => void
}
export const Select = ({ options, value, onChange }: ISelectProps) => {
	const [open, setOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleSelect = (option: ILocationProps) => {
		onChange(`${option.city}, ${option.country}`)
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
		<div
			ref={containerRef}
			className='relative border hover:border-[#3a83ed] rounded-xl transition-[border,box-shadow,background] duration-300'
		>
			<button
				type='button'
				onClick={() => setOpen(!open)}
				className='flex items-center gap-x-[10px] py-[16px] pl-[14px] w-full focus:outline-none'
			>
				<IconLocation className='w-[24px] h-[24px]' />
				<span className='font-dmSans text-base text-[#303030]'>
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
							{`${option.city}, ${option.country}`}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
