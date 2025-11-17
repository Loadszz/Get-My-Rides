import { Accordion } from '@/components/ui/Accordion'
import { IFAQSectionProps } from '@/data/common/faqSection.type'
import Image from 'next/image'

interface IProps {
	faqProps: IFAQSectionProps[]
	type?: 'withoutImage' | 'reverse'
}

export const FAQSection = ({ faqProps, type }: IProps) => {
	return (
		<div
			className={`flex gap-[58px] divide-amber-100 max-lg:flex-col ${
				type === 'reverse' ? 'flex-row-reverse' : ''
			}`}
		>
			{/* column-left */}
			<div className='flex-[0_1_692px] max-lg:flex-[0_0_100%]'>
				<Accordion items={faqProps.slice(1, 6)} multiple={false} />
				{type === 'withoutImage' && (
					<Accordion
						items={faqProps.slice(6, 11)}
						multiple={false}
						className='lg:hidden'
					/>
				)}
			</div>
			{/* column-right */}
			{type === 'withoutImage' ? (
				<div className='flex-[0_1_692px] max-lg:flex-[0_0_100%] max-lg:hidden'>
					<Accordion items={faqProps.slice(6, 11)} multiple={false} />
				</div>
			) : (
				<div className='relative flex-[0_1_618px] max-lg:hidden'>
					{faqProps[0]?.image && (
						<Image
							src={faqProps[0]?.image}
							fill
							unoptimized
							alt='ourPlatform'
							className='object-cover rounded-2xl'
						/>
					)}
				</div>
			)}
		</div>
	)
}
