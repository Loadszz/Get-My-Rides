import Map from '@/components/map/Map'
import Policies from '@/components/sections/booking/Policies'
import RentalLocation from '@/components/sections/booking/RentalLocation'

const page = () => {
	return (
		<div className='__container overflow-visible'>
			{/* body */}
			<div className='flex justify-between'>
				{/* column-left */}
				<div className='w-[849px]'>
					<RentalLocation />
					<Map />
					<Policies />
				</div>
				{/* column-right */}
				<div className='sticky top-[20px] z-10 w-[388px] h-full pt-[51px]'>
					{/* Information */}
					<section>
						{/* body */}
						<div className='py-[24px] pl-[24px] pr-[49px] border border-[#e4e4e4] rounded-2xl shadow-[0_4px_15px_0_rgba(8,15,52,0.08)]'>
							{/* title */}
							<div className='text-2xl font-bold text-[#1a1a1a] mb-[24px]'>
								Pick-up and Drop-off
							</div>
							{/* item-body */}
							<div className=''>
								{/* item-first */}
								<div className='relative mb-[16px] pl-[60px] before:absolute before:left-0 before:top-[3px] before:w-[16px] before:h-[16px] before:border before:border-[#0a58ca] before:rounded-2xl after:absolute after:left-[7px] after:bottom-[-20px] after:h-full after:border-dashed after:border-l after:border-[#0a58ca]'>
									<div className='font-dmSans text-base text-[#1a1a1a]'>
										Wednesday, Feb 19th - 11:00 AM
									</div>
									<div className='font-dmSans font-semibold text-sm text-[#1a1a1a] mb-[8px]'>
										Varna Rentals Office
									</div>
									<a href='#' className='text-xs text-[#0a58ca] underline'>
										View pick-up instructions
									</a>
								</div>
								{/* item-second */}
								<div className='relative pl-[60px] before:absolute before:left-0 before:top-[3px] before:w-[16px] before:h-[16px] before:border before:border-[#0a58ca] before:rounded-2xl'>
									<div className='font-dmSans text-base text-[#1a1a1a]'>
										Wednesday, Feb 19th - 11:00 AM
									</div>
									<div className='font-dmSans font-semibold text-sm text-[#1a1a1a] mb-[8px]'>
										Varna Rentals Office
									</div>
									<a href='#' className='text-xs text-[#0a58ca] underline'>
										View pick-up instructions
									</a>
								</div>
							</div>
						</div>
					</section>
					<section></section>
				</div>
			</div>
		</div>
	)
}

export default page
