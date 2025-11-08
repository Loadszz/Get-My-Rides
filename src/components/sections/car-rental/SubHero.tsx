import { subHeroProps } from '@/data/car-rental/subHero.types'

const SubHero = () => {
	return (
		<section className='pt-[56px] max-md:pt-[32px]'>
			<div className='__container'>
				{/* title */}
				<div className='font-dmSans text-base text-[#1a1a1a] text-center max-w-[906px] mx-auto mb-[40px] max-md:text-left'>
					<b>Get My Rides</b> helps you find and book the best car rentals
					worldwide. Compare prices from trusted local and international
					providers in seconds, choose from <b>economy cars</b> to <b>SUVs,</b>{' '}
					and secure your booking with full transparency. Whether you need a car
					for a day, a week, or a long-term stay, we make car rental{' '}
					<b>simple,</b> <b>affordable,</b> and <b>reliable.</b>
				</div>
				{/* body */}
				<div className='grid grid-cols-3 gap-[16px] max-md:grid-cols-1'>
					{subHeroProps.map(item => (
						<ul
							key={item.id}
							className='p-[24px] space-y-[16px] bg-[#f5f5f5] rounded-2xl'
						>
							{item.texts.map((text, index) => (
								<li key={index} className='flex items-start gap-x-[8px]'>
									<item.icon className='w-[24px] h-[24px] shrink-0' />
									<span className='font-dmSans font-medium text-base text-[#1a1a1a]'>
										{text}
									</span>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
		</section>
	)
}

export default SubHero
