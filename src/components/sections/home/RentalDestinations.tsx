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
				<div className='flex gap-[16px] items-stretch mb-[64px] max-lg:flex-wrap max-lg:justify-around max-md:flex-nowrap max-md:justify-normal max-md:overflow-scroll max-md:pb-[16px] max-md:mb-[20px]'>
					{/* card */}
					{destinationsCards.map((card, index) => (
						<div
							key={index}
							className='flex flex-col flex-[0_1_25%] max-lg:flex-[0_0_330px] max-md:flex-[0_0_284px]'
						>
							<Image
								src={card.image}
								width={330}
								height={224}
								alt={card.title}
								className='object-cover mb-[16px] max-md:mb-[8px]'
							/>
							{/* title */}
							<div className='font-bold text-xl text-[#1a1a1a] mb-[16px] max-md:mb-[8px]'>
								{card.title}
							</div>
							{/* description */}
							<div className='text-sm text-[#757575] mb-[24px] max-w-[298px]'>
								{card.description}
							</div>
							{/* link */}
							<Link
								className='mt-auto font-dmSans font-medium text-sm text-[#0a58ca] underline'
								href={card.buttonUrl}
							>
								Read More
							</Link>
						</div>
					))}
				</div>
				{/* button */}
				<div className='flex justify-center'>
					<Button
						href='#'
						variant='secondary'
						className='flex rounded-xl py-[16px] pl-[28px] w-[166px] max-sm:w-full max-sm:justify-center'
					>
						<span className='mr-[10px]'>Book Now</span>
						<ArrowRight className='w-[24px]' />
					</Button>
				</div>
			</div>
		</section>
	)
}
