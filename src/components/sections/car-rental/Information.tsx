import IconCar from '@/assets/icons/car-rental/car.svg'
import IconIdea from '@/assets/icons/car-rental/idea.svg'
import IconMapLocation from '@/assets/icons/car-rental/maps-location.svg'
import IconTarget from '@/assets/icons/car-rental/target.svg'
const Information = () => {
	return (
		<section className='bg-[url(/images/sections/car-rental/information-bg.jpg)] bg-cover bg-center bg-no-repeat py-[112px] max-md:py-[66px]'>
			<div className='__container'>
				{/* body */}
				<div className='grid grid-cols-4 gap-[16px] max-lg:grid-cols-2 max-md:flex max-md:gap-[8px] max-md:overflow-x-auto max-md:mx-[-16px] max-md:px-[16px] overflow-visible no-scrollbar'>
					{/* column-1 */}
					<div className='p-[24px] bg-white rounded-2xl space-y-[24px] max-md:flex-[0_0_330px]'>
						{/* header */}
						<div className='flex items-start gap-x-[16px]'>
							{/* icon */}
							<IconCar className='w-[32px]  shrink-0' />
							{/* title */}
							<div className='font-lato font-bold text-xl text-[#1a1a1a]'>
								Planning to Rent a Car in Europe?
							</div>
						</div>
						{/* text */}
						<div className='font-dmSans text-sm text-[#757575]'>
							<span className='font-medium text-[#1a1a1a]'>
								Our driving guides give you everything you need to know before
								hitting the road.
							</span>{' '}
							Learn about local traffic laws, parking rules, fuel types, and
							toll systems to avoid surprises during your journey.
						</div>
					</div>
					{/* column */}
					<div className='p-[24px] bg-white rounded-2xl space-y-[24px] max-md:flex-[0_0_330px]'>
						{/* header */}
						<div className='flex items-start gap-x-[16px]'>
							{/* icon */}
							<IconIdea className='w-[32px]  shrink-0' />
							{/* title */}
							<div className='font-lato font-bold text-xl text-[#1a1a1a]'>
								Practical Tips for Smart Travel
							</div>
						</div>
						{/* list */}
						<p className='font-dmSans font-medium text-sm text-[#1a1a1a] mb-[8px]'>
							We also share insider advice on:
						</p>
						<ul className='font-dmSans text-sm text-[#757575] space-y-[8px]'>
							<li className='list-disc list-inside marker:text-[#0a58ca]'>
								Choosing the right car class
							</li>
							<li className='list-disc list-inside marker:text-[#0a58ca]'>
								Saving on rental costs
							</li>
							<li className='list-disc list-inside marker:text-[#0a58ca]'>
								Making the most of your trip
							</li>
						</ul>
					</div>
					{/* column */}
					<div className='p-[24px] bg-white rounded-2xl space-y-[24px] max-md:flex-[0_0_330px]'>
						{/* header */}
						<div className='flex items-start gap-x-[16px]'>
							{/* icon */}
							<IconMapLocation className='w-[32px]  shrink-0' />
							{/* title */}
							<div className='font-lato font-bold text-xl text-[#1a1a1a]'>
								Freedom to Go Beyond the City
							</div>
						</div>
						{/* text */}
						<div className='font-dmSans text-sm text-[#757575]'>
							Whether you`re heading from the busy city capital to the{' '}
							<span className='font-medium text-[#1a1a1a]'>mountains,</span>
							exploring the beautiful sea{' '}
							<span className='font-medium text-[#1a1a1a]'>coast,</span>
							or planning a{' '}
							<span className='font-medium text-[#1a1a1a]'>
								cross-border drive
							</span>{' '}
							our guides will help you travel{' '}
							<span className='font-medium text-[#1a1a1a]'>
								safely and confidently.
							</span>
						</div>
					</div>
					{/* column-4 */}
					<div className='p-[24px] bg-white rounded-2xl space-y-[24px] max-md:flex-[0_0_330px]'>
						{/* header */}
						<div className='flex items-start gap-x-[16px]'>
							{/* icon */}
							<IconTarget className='w-[32px]  shrink-0' />
							{/* title */}
							<div className='font-lato font-bold text-xl text-[#1a1a1a]'>
								Explore More With Our Tailored Guides
							</div>
						</div>
						{/* text */}
						<div className='font-dmSans text-sm text-[#757575]'>
							With the right knowledge, your rental car becomes more than just
							transport — it`s your{' '}
							<span className='font-medium text-[#1a1a1a]'>
								ticket to explore,
							</span>{' '}
							comfortably and on your own schedule.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Information
