import { Accordion } from '@/components/ui/Accordion'
import { IFAQSectionProps } from '@/data/common/faqSection.type'
import Image from 'next/image'

interface IProps {
	faqProps: IFAQSectionProps[]
	title: string
	variants: 'primary' | 'secondary'
}

export const FAQSection = ({ faqProps, title, variants }: IProps) => {
	return (
		<section
			className={`${
				variants == 'primary'
					? 'pt-[156px] pb-[104px] max-md:pt-[48px] max-md:pb-[56px]'
					: 'py-[88px] max-md:pt-[72px] max-md:pb-[48px]'
			}`}
		>
			<div className='__container'>
				{/* title */}
				<div
					className={`${
						variants == 'primary'
							? 'title max-w-[676px]'
							: 'h2 max-w-[906px] mx-auto'
					} mb-[56px] max-md:mb-[32px]`}
				>
					{title}
				</div>
				{/* body */}
				<div
					className={`flex justify-between ${
						variants == 'secondary' ? 'flex-row-reverse' : ''
					}`}
				>
					{/* column-left */}
					<div className='flex-[0_0_50.6%] max-lg:flex-[0_0_100%]'>
						<Accordion
							items={faqProps.slice(1, faqProps.length)}
							multiple={false}
						/>
					</div>
					{/* column-right */}
					<div className='relative flex-[0_1_45.2%] max-lg:hidden'>
						<Image
							src={faqProps[0]?.image}
							fill
							unoptimized
							alt='ourPlatform'
							className='object-cover rounded-2xl'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
