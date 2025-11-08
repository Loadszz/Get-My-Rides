import { advantagesProps } from '@/data/car-rental/advantages.types'

const Advantages = () => {
	return (
		<section className='pt-[88px] max-md:pt-[72px]'>
			<div className='__container'>
				{/* header */}
				<div className='text-center max-w-[906px] mx-auto mb-[48px] max-md:text-left max-md:mb-[24px]'>
					{/* title */}
					<div className='h2 mb-[24px] max-md:mb-[16px]'>
						Get My Rides vs. Big OTAs
					</div>
					{/* description */}
					<div className='font-dmSans text-base text-[#1a1a1a]'>
						With <b>Get My Rides,</b> you get more choice, better prices, and
						direct support - all with one simple booking. Economy cars start
						from just <b>€15/day</b> with no hidden fees.
					</div>
				</div>
				{/* body */}
				<div className='flex overflow-x-auto no-scrollbar px-[15px] mx-[-15px]'>
					{/* column */}
					{advantagesProps.map(item => (
						<div
							key={item.id}
							className='flex-[0_0_456px] first:border-r-0 first:rounded-l-3xl nth-2:bg-[#f0f6ff] nth-2:border-x-0 last:border-l-0 last:rounded-r-3xl border border-[#e5e5e5] max-md:first:flex-[0_0_278px]'
						>
							{/* title */}
							<div className='font-dmSans font-medium text-xl text-[#1a1a1a] text-center pt-[24px] pb-[16px]'>
								{item.title}
							</div>
							{/* body */}
							{item.texts.map((text, index) => (
								<div
									key={index}
									className='flex items-center gap-x-[8px] text-left py-[16px] pl-[20px] border-t border-[#e5e5e5]'
								>
									{/* icon */}
									{item.icon && <item.icon className='w-[24px] shrink-0' />}
									{/* text */}
									<div className='font-dmSans text-base text-[#1a1a1a]'>
										{text}
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Advantages
