import ArrowRight from '@/assets/icons/arrow-right.svg'
import { Button } from '@/components/ui/Button'
import { destinationsCards } from '@/data/rentalDestinationsItem'
import Image from 'next/image'
import Link from 'next/link'

export const RentalDestinations = () => {
	return (
		<section className='pt-[156px] max-md:pt-[64px]'>
			<div className='__container'>
				{/* title */}
				<div className='title mb-[48px] max-md:mb-[32px]'>
					Explore popular car rental destinations
				</div>
				{/* body */}
				<div className='flex gap-[16px] items-stretch mb-[64px] no-scrollbar max-lg:flex-wrap max-lg:justify-around max-md:flex-nowrap max-md:justify-normal max-md:overflow-x-scroll max-md:mb-[36px] max-md:mx-[-15px] max-md:px-[15px]'>
					{/* card */}
					{destinationsCards.map((card, index) => (
						<div
							key={index}
							className='flex flex-col flex-[0_1_25%] max-lg:flex-[0_0_330px] max-md:flex-[0_0_284px]'
						>
							<div className='relative min-h-[224px] mb-[16px] max-md:mb-[8px]'>
								<Image
									src={card.image}
									fill
									sizes='(max-width: 768px) 224px, 330px'
									alt={card.title}
									className='object-cover rounded-2xl'
								/>
							</div>
							{/* title */}
							<div className='font-bold text-xl text-[#1a1a1a] mb-[16px] max-md:mb-[8px]'>
								{card.title}
							</div>
							{/* description */}
							<div className='text-sm text-[#757575] mb-[24px] max-w-[298px]'>
								{card.description}
							</div>
							{/* link */}
							<div className='mt-auto'>
								<Link
									className='font-dmSans font-medium text-sm text-[#0a58ca] border-b border-transparent transform-all duration-500 hover:border-[#0a58ca]'
									href={card.buttonUrl}
								>
									Read More
								</Link>
							</div>
						</div>
					))}
				</div>
				{/* button */}
				<div className='flex justify-center'>
					<Button
						href='#'
						variant='secondary'
						className='flex rounded-xl py-[16px] px-[26px] max-sm:w-full max-sm:justify-center'
					>
						<span className='mr-[10px]'>View More</span>
						<ArrowRight className='w-[24px]' />
					</Button>
				</div>
			</div>
		</section>
	)
}
