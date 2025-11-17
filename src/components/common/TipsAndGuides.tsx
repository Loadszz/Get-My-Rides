import { tipsAndGuidesProps } from '@/data/car-rental/tipsAndGuides.type'
import Image from 'next/image'
import Link from 'next/link'

interface ITipsAndGuidesProps {
	variants?: 'thank-you'
}

const TipsAndGuides = ({ variants }: ITipsAndGuidesProps) => {
	return (
		<section
			className={`${
				variants === 'thank-you'
					? 'py-[93px] max-md:pt-[40px] max-md:pb-[60px]'
					: 'py-[88px] max-md:py-[40px]'
			}`}
		>
			<div className='__container'>
				{/* header */}
				<div
					className={`${
						variants === 'thank-you' ? 'text-left' : 'text-center mx-auto'
					} max-w-[906px] mb-[48px] max-md:text-left max-md:mb-[24px]`}
				>
					{/* title */}
					<div className='h2 mb-[16px]'>Driving Tips & Travel Guides</div>
					{/* description */}
					<div className='font-dmSans text-base text-[#1a1a1a]'>
						Make the most of your trip with our local driving advice and travel
						inspiration. From understanding road rules in Bulgaria to planning
						scenic road trips, our guides help you travel safely, save money,
						and explore more with your rental car.
					</div>
				</div>
				{/* body */}
				<div className='grid grid-cols-2 gap-[16px] max-lg:grid-cols-1'>
					{/* column-left */}
					{tipsAndGuidesProps.slice(0, 1).map(item => (
						<div key={item.id} className='relative'>
							{/* image */}
							<Image
								src={item.image}
								width={676}
								height={560}
								alt={item.title}
								className='w-full h-full rounded-3xl mix-blend-overlay'
							/>
							<div className='absolute inset-0 rounded-3xl bg-[linear-gradient(to_left,rgba(38,38,38,0)_100%,#262626_0%),linear-gradient(to_bottom,rgba(38,38,38,0.48),rgba(38,38,38,0.48))] md:bg-[linear-gradient(to_bottom,rgba(22,22,22,0)_67%,#161616_133%)]'></div>
							{/* body */}
							<div className='absolute bottom-[24px] left-[24px] mr-[24px] space-y-[24px] max-md:left-[16px] max-md:bottom-[16px] max-md:space-y-[16px]'>
								{/* header */}
								<div className='space-y-[8px]'>
									{/* type */}
									<div className='inline-block font-dmSans text-xs text-[#0a58ca] bg-white rounded-full py-[4px] px-[12px]'>
										{item.type}
									</div>
									{/* title */}
									<div className='font-lato font-bold text-2xl max-md:text-[1.375rem] max-md:leading-[1.45]'>
										{item.title}
									</div>
									{/* text */}
									<div className='font-dmSans text-sm'>{item.text}</div>
									{/* info */}
									<div className='flex items-center gap-x-[16px]'>
										{/* date */}
										<div className='flex items-center gap-x-[8px]'>
											<item.iconFirst className='w-[16px]' />
											<div className='font-dmSans text-sm'>{item.date}</div>
										</div>
										{/* person */}
										<div className='flex items-center gap-x-[8px]'>
											<item.iconSecond className='w-[16px]' />
											<div className='font-dmSans text-sm'>{item.person}</div>
										</div>
									</div>
								</div>
								{/* link */}
								<Link
									href={item.link.href}
									className='font-dmSans font-medium text-sm underline underline-offset-2'
								>
									{item.link.text}
								</Link>
							</div>
						</div>
					))}
					{/* columng-right */}
					<div className='space-y-[16px] max-lg:flex max-lg:justify-between max-lg:gap-[8px] max-lg:mx-[-15px] max-lg:px-[15px] max-lg:overflow-x-scroll no-scrollbar'>
						{tipsAndGuidesProps
							.slice(1, tipsAndGuidesProps.length)
							.map(item => (
								<div
									key={item.id}
									className='flex gap-[16px] max-lg:flex-col max-lg:flex-[0_0_285px]'
								>
									{/* image */}
									<Image
										src={item.image}
										width={215}
										height={176}
										alt={item.title}
										className='rounded-3xl max-lg:w-full max-lg:h-[224px]'
									/>
									{/* body */}
									<div className='space-y-[16px]'>
										{/* header */}
										<div className='space-y-[8px]'>
											{/* type */}
											<div className='inline-block font-dmSans text-xs bg-[#0a58ca] rounded-full py-[4px] px-[12px]'>
												{item.type}
											</div>
											{/* title */}
											<div className='font-lato font-bold text-lg text-[#1a1a1a]'>
												{item.title}
											</div>
											{/* text */}
											<div className='font-dmSans text-sm text-[#757575] max-w-[285px]'>
												{item.text}
											</div>
											{/* info */}
											<div className='flex items-center gap-x-[16px]'>
												{/* date */}
												<div className='flex items-center gap-x-[8px]'>
													<item.iconFirst className='w-[16px] text-[#0a58ca]' />
													<div className='font-dmSans text-sm text-[#757575]'>
														{item.date}
													</div>
												</div>
												{/* person */}
												<div className='flex items-center gap-x-[8px]'>
													<item.iconSecond className='w-[16px] text-[#0a58ca]' />
													<div className='font-dmSans text-sm text-[#757575]'>
														{item.person}
													</div>
												</div>
											</div>
										</div>
										{/* link */}
										<Link
											href={item.link.href}
											className='font-dmSans font-medium text-sm text-[#0a58ca] underline underline-offset-2'
										>
											{item.link.text}
										</Link>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TipsAndGuides
