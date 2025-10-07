import ArrowRight from '@/assets/icons/arrow-right.svg'
import { Button } from '@/components/ui/Button'
import { promoCards } from '@/data/specialOffersText'
import Image from 'next/image'

export const SpecialOffers = () => {
	return (
		<section className='py-[156px] max-md:pt-[80px] max-md:pb-[48px]'>
			<div className='__container'>
				{/* title */}
				<div className='title max-w-[784px] mb-[48px] max-md:mb-[32px]'>
					Check out current promotions and special offers for car rental
				</div>
				{/* body */}
				<div className='flex flex-wrap justify-between gap-y-[16px] max-lg:flex-col max-lg:flex-nowrap'>
					{promoCards.map((card, index) => (
						<div
							key={index}
							className={`relative ${
								index === 0 ? 'flex-[1_1_100%]' : 'flex-[0_0_49.4%]'
							}`}
						>
							<Image
								src={card.image}
								alt={card.title}
								width={index === 0 ? 1368 : 676}
								height={index === 0 ? 489 : 489}
								className='w-full h-full object-cover max-xl:h-[408px]'
							/>
							{/* items */}
							<div className='absolute left-[32px] right-[20px] bottom-[40px] max-w-[484px] max-2xl:bottom-[24px] max-sm:left-[16px] max-sm:right-[16px] max-sm:max-w-full'>
								{/* title */}
								<div className='font-black text-[2rem] mb-[16px] max-md:text-2xl max-2xl:mb-[8px]'>
									{card.title}
								</div>
								{/* description */}
								<div className='font-dsSans font-medium text-base mb-[24px] max-md:text-sm max-2xl:mb-[16px]'>
									{card.description}
								</div>
								{/* button */}
								<Button
									className='flex rounded-xl py-[12px] pl-[24px] w-[153px] max-sm:w-full max-sm:justify-center'
									href='#'
									variant='primary'
								>
									<span className='mr-[10px]'>{card.buttonText}</span>
									<ArrowRight className='w-[24px]' />
								</Button>
							</div>
							{/* discount */}
							<div className='absolute top-[32px] right-[32px] w-[149px] h-[149px] max-2xl:w-[96px] max-2xl:h-[96px] max-2xl:top-[16px] max-2xl:right-[16px]'>
								<div className='absolute z-10 bg-white w-full h-full rounded-full'></div>
								<div className='absolute left-[-2px] top-[2px] bg-blue-500 w-full h-full rounded-full'></div>
								<div className='absolute top-[50%] left-[50%] translate-[-50%] z-20 text-2xl text-[#1a1a1a] text-center max-2xl:text-sm'>
									{card.discount?.before}
									<span className='text-4xl font-black text-[#0a58ca] max-2xl:text-2xl'>
										{card.discount?.highlight}
									</span>
									{card.discount?.after}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
