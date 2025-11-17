import IconArrow from '@/assets/icons/varna-cro/steps-arrow .svg'
import IconSteps1 from '@/assets/icons/varna-cro/steps-icon-1.svg'
import IconSteps2 from '@/assets/icons/varna-cro/steps-icon-2.svg'
import IconSteps3 from '@/assets/icons/varna-cro/steps-icon-3.svg'
import IconSubtract from '@/assets/icons/varna-cro/steps-subtract.svg'
const Steps = () => {
	return (
		<section className='py-[156px] max-md:py-[56px]'>
			<div className='__container'>
				{/* body */}
				<div className='flex justify-evenly max-md:flex-col max-md:gap-y-[56px]'>
					{/* column */}
					<div className='flex flex-col items-center gap-y-[16px] flex-[0_0_180px]'>
						{/* header */}
						<div className='relative w-[160px]'>
							<IconSubtract />
							<IconSteps1 className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[80px]' />
						</div>
						{/* footer */}
						<div className='text-center space-y-[8px]'>
							{/* title */}
							<div className='font-bold text-[2rem] leading-[1.5] text-[#1a1a1a]'>
								1. Search
							</div>
							{/* description */}
							<div className='font-dmSans text-base text-[#404040]'>
								Select location & dates
							</div>
						</div>
					</div>
					{/* arrow */}
					<div className='mt-[106px] max-md:hidden'>
						<IconArrow className='w-[60px]' />
					</div>
					{/* column */}
					<div className='flex flex-col items-center gap-y-[16px] flex-[0_0_253px]'>
						{/* header */}
						<div className='relative w-[160px]'>
							<IconSubtract />
							<IconSteps2 className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[80px]' />
						</div>
						{/* footer */}
						<div className='text-center space-y-[8px]'>
							{/* title */}
							<div className='font-bold text-[2rem] leading-[1.5] text-[#1a1a1a]'>
								2. Compare
							</div>
							{/* description */}
							<div className='font-dmSans text-base text-[#404040]'>
								See prices and cars side-by-side
							</div>
						</div>
					</div>
					{/* arrow */}
					<div className='mt-[106px] max-md:hidden'>
						<IconArrow className='w-[60px]' />
					</div>
					{/* column */}
					<div className='flex flex-col items-center gap-y-[16px] flex-[0_0_183px]'>
						{/* header */}
						<div className='relative w-[160px]'>
							<IconSubtract />
							<IconSteps3 className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[80px]' />
						</div>
						{/* footer */}
						<div className='text-center space-y-[8px]'>
							{/* title */}
							<div className='font-bold text-[2rem] leading-[1.5] text-[#1a1a1a]'>
								3. Drive
							</div>
							{/* description */}
							<div className='font-dmSans text-base text-[#404040]'>
								Pick-up and hit the road
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Steps
