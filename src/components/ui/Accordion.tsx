'use client'

import Minus from '@/assets/icons/minus.svg'
import Plus from '@/assets/icons/plus.svg'
import { OurPlatformText } from '@/data/ourPlatformText'
import { useState } from 'react'

type AccordionProps = {
	items: OurPlatformText[]
	multiple?: boolean
}

export const Accordion = ({ items, multiple = false }: AccordionProps) => {
	const [accordionOpen, setAccordionOpen] = useState<number[] | number | null>(
		multiple ? [] : null
	)

	const toggle = (index: number) => {
		if (multiple) {
			setAccordionOpen(prev => {
				const arr = prev as number[]
				return arr.includes(index)
					? arr.filter(i => i !== index)
					: [...arr, index]
			})
		} else {
			const current = accordionOpen as number | null
			setAccordionOpen(current === index ? null : index)
		}
	}
	const isOpen = (index: number) => {
		if (multiple) {
			return (accordionOpen as number[]).includes(index)
		} else {
			return accordionOpen === index
		}
	}
	return (
		<>
			{items.map((item, index) => (
				<div
					className='border-b-[1px] last:border-none border-[#e5e5e5] first:pt-0 last:pb-0 py-[28px] max-md:py-[16px]'
					key={index}
				>
					<button
						className='flex justify-between items-center w-full'
						onClick={() => toggle(index)}
					>
						<span className='font-dmSans font-bold text-xl text-[#1a1a1a] text-left max-md:max-w-[300px]'>
							{item.title}
						</span>
						<span className='flex justify-center items-center w-[32px] h-[32px] border-[1px] border-[#e5e5e5] rounded-[12px]'>
							{isOpen(index) ? (
								<Minus className='w-[16px]' />
							) : (
								<Plus className='w-[16px]' />
							)}
						</span>
					</button>
					{isOpen(index) && (
						<div className='font-dmSans text-base text-[#333] mt-[24px] max-md:mt-[16px]'>
							{item.content}
						</div>
					)}
				</div>
			))}
		</>
	)
}
