'use client'
import IconDate from '@/assets/icons/date.svg'
import IconArrow from '@/assets/icons/filter/arrow-down-filter.svg'
import { formatDateTime } from '@/utils/formatDateTime'
import { useSearchParams } from 'next/navigation'

type Props = {
	isOpen: boolean
	toggle: () => void
}
const Information = ({ isOpen, toggle }: Props) => {
	const searchParams = useSearchParams()
	const from = searchParams.get('from') || ''
	const to = searchParams.get('to') || ''

	return (
		<section className='mb-[40px] max-md:pb-[24px] max-md:border-b max-md:border-[rgb(229,229,229)] max-md:m-0'>
			{/* body */}
			<div className='py-[24px] pl-[24px] pr-[49px] border border-[#e4e4e4] rounded-2xl shadow-[0_4px_15px_0_rgba(8,15,52,0.08)] max-md:border-none max-md:shadow-none max-md:p-0'>
				{/* header */}
				<div className='flex justify-between items-center mb-[24px] max-md:mb-[16px]'>
					{/* title */}
					<div className='text-2xl font-bold text-[#1a1a1a] max-2xl:max-w-[164px] max-lg:max-w-full max-md:text-xl'>
						{' '}
						Pick-up and Drop-off
					</div>
					{/* arrow */}
					<IconArrow
						onClick={toggle}
						className={`md:hidden w-[24px] cursor-pointer transition-transform duration-300 ${
							isOpen ? 'rotate-180' : 'rotate-0'
						}`}
					/>
				</div>
				<div className={`${isOpen ? 'block' : 'hidden'}`}>
					{/* item-first */}
					<div className='relative mb-[16px] pl-[60px] before:absolute before:left-0 before:top-[3px] before:w-[16px] before:h-[16px] before:border before:border-[#0a58ca] before:rounded-2xl after:absolute after:left-[7px] after:bottom-[-20px] after:h-full after:border-dashed after:border-l after:border-[#0a58ca] max-md:before:hidden max-md:after:hidden max-md:pl-[40px]'>
						<IconDate className='absolute left-0 w-[24px] md:opacity-0' />
						<div className='font-dmSans text-base text-[#1a1a1a]'>
							{formatDateTime(from)}
						</div>
						<input type='hidden' name='from' value={from} />
						<div className='font-dmSans font-semibold text-sm text-[#1a1a1a] mb-[8px]'>
							Varna Rentals Office
						</div>
						<a href='#' className='text-xs text-[#0a58ca] underline'>
							View pick-up instructions
						</a>
					</div>
					{/* item-second */}
					<div className='relative pl-[60px] before:absolute before:left-0 before:top-[3px] before:w-[16px] before:h-[16px] before:border before:border-[#0a58ca] before:rounded-2xl max-md:before:hidden max-md:pl-[40px]'>
						<IconDate className='absolute left-0 w-[24px] md:opacity-0' />
						<div className='font-dmSans text-base text-[#1a1a1a]'>
							{formatDateTime(to)}
						</div>
						<input type='hidden' name='to' value={to} />
						<div className='font-dmSans font-semibold text-sm text-[#1a1a1a] mb-[8px]'>
							Varna Rentals Office
						</div>
						<a href='#' className='text-xs text-[#0a58ca] underline'>
							View pick-up instructions
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Information
