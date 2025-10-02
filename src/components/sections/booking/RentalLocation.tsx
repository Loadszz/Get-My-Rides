import { rentalLocation } from '@/data/booking/rentalLocation.types'

const RentalLocation = () => {
	return (
		<section className='pt-[40px] pb-[32px] max-md:py-[24px]'>
			{/* title */}
			<div className='title-booking mb-[24px] max-md:mb-[16px]'>
				Rental Location
			</div>
			{/* body */}
			<div className='flex gap-x-[69px] max-md:flex-col'>
				{/* column */}
				<div className='flex flex-col gap-y-[24px] max-md:gap-y-[16px] max-md:mb-[16px]'>
					{rentalLocation.slice(0, 3).map(item => (
						<div key={item.id}>
							{/* column-header */}
							<div className='flex items-center gap-x-[16px] mb-[8px]'>
								{/* icon */}
								<item.icon className='w-[24px]' />
								{/* title */}
								<div className='font-dmSans text-base text-[#1a1a1a] max-w-[237px]'>
									{item.title}
								</div>
							</div>
							{/* column-body */}
							{item.content && (
								<>
									{item.content.map((c, index) => {
										if (c.type === 'text') {
											return (
												<div
													key={index}
													className='font-dmSans text-base text-[#1a1a1a] not-last:mb-[8px]'
												>
													{c.label}
												</div>
											)
										}
										if (c.type === 'links') {
											return c.links.map(link => (
												<a
													key={index}
													href={link.href}
													className='text-xs text-[#0a58ca] underline ml-[40px]'
												>
													{link.label}
												</a>
											))
										}

										return null
									})}
								</>
							)}
						</div>
					))}
				</div>
				{/* column */}
				<div className='flex flex-col justify-between'>
					{rentalLocation.slice(3, 5).map(item => (
						<div key={item.id} className='max-md:first:hidden'>
							{/* column-header */}
							<div className='flex items-center gap-x-[16px] mb-[8px]'>
								{/* icon */}
								<item.icon className='w-[24px]' />
								{/* title */}
								<div className='font-dmSans text-base text-[#1a1a1a] max-w-[237px]'>
									{item.title}
								</div>
							</div>
							{/* column-body */}
							{item.content && (
								<>
									{item.content.map((c, index) => {
										if (c.type === 'text') {
											return (
												<div
													key={index}
													className='font-dmSans text-base text-[#1a1a1a] ml-[40px]'
												>
													{c.label}
												</div>
											)
										}
										if (c.type === 'links') {
											return c.links.map(link => (
												<a
													key={index}
													href={link.href}
													className='text-xs text-[#0a58ca] underline ml-[40px]'
												>
													{link.label}
												</a>
											))
										}

										return null
									})}
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default RentalLocation
