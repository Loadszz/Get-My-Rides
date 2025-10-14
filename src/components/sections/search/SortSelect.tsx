'use client'
import IconArrowDown from '@/assets/icons/filter/arrow-down-filter.svg'
import IconSort from '@/assets/icons/sorting.svg'
import { useEffect, useRef, useState } from 'react'

type SortSelectProps = {
	value: 'price-asc' | 'price-desc'
	onChange: (value: 'price-asc' | 'price-desc') => void
	className: string
}

export const SortSelect = ({
	value,
	onChange,
	className = '',
}: SortSelectProps) => {
	const [open, setOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement>(null)

	// Текущий текст для отображения
	const label =
		value === 'price-asc'
			? 'Price: Low to High'
			: value === 'price-desc'
			? 'Price: High to Low'
			: 'Sort by price'

	// Закрытие при клике вне
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	// Обработчик выбора
	const handleSelect = (val: 'price-asc' | 'price-desc') => {
		onChange(val)
		setOpen(false)
	}

	return (
		<div ref={selectRef} className={`${className} inline-block relative`}>
			<button
				type='button'
				onClick={() => setOpen(!open)}
				className='flex items-center justify-between gap-x-[8px]'
			>
				<div className='flex items-center gap-x-[8px]'>
					<IconSort className='w-[24px]' />
					<span className='font-dmSans text-base text-[#303030]'>{label}</span>
				</div>
				<span
					className={`transition-transform duration-200 ${
						open ? 'rotate-180' : 'rotate-0'
					}`}
				>
					<IconArrowDown className='w-[24px]' />
				</span>
			</button>

			{/* dropdown */}
			{open && (
				<ul className='absolute top-[calc(100%+5px)] left-0 z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden'>
					<li
						onClick={() => handleSelect('price-asc')}
						className={`font-dmSans text-base text-[#303030] pl-[14px] py-2 cursor-pointer hover:bg-blue-100 ${
							value === 'price-asc' ? 'bg-blue-50 font-medium' : ''
						}`}
					>
						Price: Low to High
					</li>
					<li
						onClick={() => handleSelect('price-desc')}
						className={`font-dmSans text-base text-[#303030] pl-[14px] py-2 cursor-pointer hover:bg-blue-100 ${
							value === 'price-desc' ? 'bg-blue-50 font-medium' : ''
						}`}
					>
						Price: High to Low
					</li>
				</ul>
			)}
		</div>
	)
}
