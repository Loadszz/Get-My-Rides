import { trustAndTransparencyProps } from '@/data/about-us/trustAndTransparency.type'

const TrustAndTransparency = () => {
	return (
		<section className='py-[56px] bg-[#f5f5f5] max-md:py-[32px]'>
			<div className='__container'>
				{/* header */}
				<div className='max-w-[618px] space-y-[24px] mb-[48px] max-md:space-y-[16px] max-md:mb-[16px]'>
					{/* title */}
					<div className='h2'>Built on Trust & Transparency</div>
					{/* description */}
					<div className='font-dmSans text-base text-[#1a1a1a]'>
						Founded in <b>2025</b> in Varna, Bulgaria, <b>Get My Rides</b> was
						built to make car rental <b>simple, fair, and stress-free.</b>
					</div>
				</div>
				{/* body */}
				<div className='grid grid-cols-4 gap-[16px] max-lg:grid-cols-2 max-md:grid-cols-1'>
					{/* column */}
					{trustAndTransparencyProps.map(item => (
						<div
							key={item.id}
							className='p-[24px] space-y-[24px] bg-white rounded-2xl group transition-all duration-500 hover:bg-[#0a58ca]'
						>
							{/* header */}
							<div className='flex items-start gap-x-[16px]'>
								{/* icon */}
								<item.icon className='w-[32px] shrink-0 text-[#0a58ca] group-hover:text-white transition-all duration-500' />
								{/* title */}
								<div className='font-bold text-xl text-[#1a1a1a] group-hover:text-white transition-all duration-500'>
									{item.title}
								</div>
							</div>
							{/* text */}
							<div className='font-dmSans font-medium text-sm text-[#1a1a1a] group-hover:text-white transition-all duration-500'>
								{item.text}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TrustAndTransparency
