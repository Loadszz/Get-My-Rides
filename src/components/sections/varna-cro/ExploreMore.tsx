import {
	exploreMoreBottomProps,
	exploreMoreTopProps,
} from '@/data/varna-cro/exploreMore'
import Image from 'next/image'
import Link from 'next/link'

const ExploreMore = () => {
	return (
		<section className='pt-[156px] max-md:pt-[56px]'>
			<div className='__container'>
				{/* title */}
				<div className='h2 mb-[48px] max-md:mb-[32px]'>
					Explore more with your rental car
				</div>
				<div className='space-y-[56px] max-md:space-y-[32px]'>
					{/* body-top */}
					<div className='space-y-[32px] max-md:space-y-[16px]'>
						{/* sub-title */}
						<div className='font-dmSans text-2xl text-[#1a1a1a] max-md:text-xl'>
							Top trips and attractions within a short drive from Varna:
						</div>
						{/* body-item */}
						<div className='flex items-stretch gap-x-[16px] max-lg:px-[15px] max-lg:mx-[-15px] max-lg:overflow-x-scroll no-scrollbar'>
							{exploreMoreTopProps.map(item => (
								<div
									key={item.id}
									className='flex flex-col flex-[0_1_330px] space-y-[16px] max-lg:shrink-0 max-md:flex-[0_0_285px]'
								>
									{/* image */}
									<div className='relative min-h-[224px]'>
										<Image
											src={item.image}
											fill
											sizes='(max-width: 768px) 285px, 330px'
											quality={100}
											alt={item.place || ''}
											className='rounded-2xl object-cover'
										/>
										<div className='absolute w-full h-full bg-gradient-to-t from-transparent to-black/40 rounded-2xl' />
										<div className='absolute top-[16px] right-[16px] flex items-center gap-x-[8px] py-[8px] px-[16px] border border-[rgba(255,255,255,0.56)] bg-[rgba(255,255,255,0.24)] rounded-full max-md:py-[4px] max-md:px-[8px]'>
											<div>
												<item.icon className='w-[24px] max-md:w-[16px]' />
											</div>
											<div className='font-dmSans font-medium text-base max-md:text-sm'>
												{item.place}
											</div>
										</div>
									</div>
									{/* text */}
									<div className='font-dmSans text-sm text-[#1a1a1a] max-w-[314px] max-md:max-w-[269px]'>
										{item.text}
									</div>
									{/* link */}
									<div className='mt-auto'>
										<Link
											href={item.link?.href || '#'}
											className='font-dmSans font-medium text-sm text-[#0a58ca] border-b border-transparent transform-all duration-500 hover:border-[#0a58ca]'
										>
											{item.link?.text || ''}
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* body-bottom */}
					<div className='space-y-[32px] max-md:space-y-[16px]'>
						{/* sub-title */}
						<div className='font-dmSans text-2xl text-[#1a1a1a] max-md:text-xl'>
							Popular car rental locations in Varna include:
						</div>
						{/* body-item */}
						<div className='flex gap-x-[16px] max-lg:px-[15px] max-lg:mx-[-15px] max-lg:overflow-x-scroll no-scrollbar'>
							{exploreMoreBottomProps.map(item => (
								<div
									key={item.id}
									className='flex-[0_1_330px] space-y-[16px] max-lg:shrink-0 max-md:flex-[0_0_285px]'
								>
									{/* image */}
									<div className='relative min-h-[224px]'>
										<Image
											src={item.image}
											fill
											sizes='(max-width: 768px) 285px, 330px'
											alt={item.place || ''}
											className='object-cover rounded-2xl'
										/>
										<div className='absolute top-[16px] right-[16px] flex items-center gap-x-[8px] py-[8px] px-[16px] border border-[rgba(255,255,255,0.56)] bg-[rgba(255,255,255,0.24)] rounded-full max-md:py-[4px] max-md:px-[8px]'>
											<div>
												<item.icon className='w-[24px] max-md:w-[16px]' />
											</div>
											<div className='font-dmSans font-medium text-base max-md:text-sm'>
												{item.place}
											</div>
										</div>
									</div>
									{/* text */}
									<div className='font-dmSans text-sm text-[#1a1a1a] max-w-[314px] max-md:max-w-[269px]'>
										{item.text}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ExploreMore
