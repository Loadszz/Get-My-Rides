const CarRentalLocation = () => {
	return (
		<section className='pt-[88px] max-md:pt-[48px]'>
			<div className='__container'>
				{/* header */}
				<div className='text-center max-w-[906px] mx-auto mb-[56px] max-md:text-left max-md:mb-[24px]'>
					{/* title */}
					<div className='h2 mb-[24px] max-md:mb-[16px]'>
						Car Rental Locations
					</div>
					{/* description */}
					<div className='font-dmSans text-base text-[#1a1a1a]'>
						<b>Explore car rental options</b> across Bulgaria and beyond.
						Whether you`re arriving at an airport, staying in a city center, or
						planning a road trip across borders, <b>Get My Rides</b> connects
						you with trusted providers in <b>every major destination.</b> More
						locations are being added regularly as we{' '}
						<b>expand across Europe.</b>
					</div>
				</div>
				{/* body */}
				<div className='bg-[url(/images/sections/car-rental/car-rental-locations-bg.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl py-[108px] px-[32px] max-md:p-[16px]'>
					<div className='max-w-[530px] p-[32px] rounded-2xl bg-white max-md:p-[24px]'>
						{/* title */}
						<div className='font-lato text-[2rem] font-bold leading-[1.25] text-[#1a1a1a] mb-[32px] max-md:text-2xl max-md:mb-[24px]'>
							Bulgaria
						</div>
						{/* text */}
						<div className='font-dmSans text-base text-[#1a1a1a]'>
							Renting a car in Bulgaria is the easiest way to explore everything
							from the lively streets of Sofia to the beaches of the Black Sea
							coast. Get My Rides connects you with trusted providers across the
							country, with pick-up options at airports, city centers, and
							popular resorts. Whether you need an economy car for city driving,
							an SUV for a ski trip, or a van for group travel, you`ll find the
							right option wherever you start your journey.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CarRentalLocation
