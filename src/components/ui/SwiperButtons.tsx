'use client'
import SwiperArrowLeft from '@/assets/icons/arrow-slider-left.svg'
import SwiperArrowRight from '@/assets/icons/arrow-slider-right.svg'
type SwiperButtonsProps = {
	className?: string
	arrowClassName?: string
	arrowRightClassName?: string
	arrowLeftClassName?: string
	arrowIconClassName?: string
	prevClass?: string
	nextClass?: string
	name?: string
}
const SwiperButtons = ({
	name,
	className = '',
	arrowClassName = '',
	arrowRightClassName = '',
	arrowLeftClassName = '',
	arrowIconClassName = '',
	prevClass = `${name}-prev-btn`,
	nextClass = `${name}-next-btn`,
}: SwiperButtonsProps) => {
	return (
		<div className={`${className} flex gap-x-[12px] z-1`}>
			<button
				className={`${prevClass} ${arrowClassName} ${arrowLeftClassName} bg-[#0a58ca] rounded-full`}
			>
				<SwiperArrowLeft className={`${arrowIconClassName} cursor-pointer`} />
			</button>
			<button
				className={`${nextClass} ${arrowClassName} ${arrowRightClassName} bg-[#0a58ca] rounded-full`}
			>
				<SwiperArrowRight className={`${arrowIconClassName} cursor-pointer`} />
			</button>
		</div>
	)
}

export default SwiperButtons
