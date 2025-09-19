'use client'
import SwiperArrowLeft from '@/assets/icons/arrow-slider-left.svg'
import SwiperArrowRight from '@/assets/icons/arrow-slider-right.svg'
type SwiperButtonsProps = {
	className?: string
	prevClass?: string
	nextClass?: string
	name?: string
}
const SwiperButtons = ({
	name,
	className = '',
	prevClass = `${name}-prev-btn`,
	nextClass = `${name}-next-btn`,
}: SwiperButtonsProps) => {
	return (
		<div className={`${className} flex gap-x-[12px] z-10`}>
			<button
				className={`${prevClass} [&.swiper-button-disabled]:bg-inherit [&.swiper-button-disabled]:text-[#1a1a1a] bg-blue-600 p-[8px] border border-[#0a58ca] rounded-full`}
			>
				<SwiperArrowLeft className='w-[24px] cursor-pointer' />
			</button>
			<button
				className={`${nextClass} [&.swiper-button-disabled]:bg-inherit [&.swiper-button-disabled]:text-[#1a1a1a] bg-blue-600 p-[8px] border border-[#0a58ca] rounded-full`}
			>
				<SwiperArrowRight className='w-[24px] cursor-pointer' />
			</button>
		</div>
	)
}

export default SwiperButtons
