import Advantages from '@/components/common/Advantages'
import ChooseYourVehicle from '@/components/common/ChooseYourVehicle'
import { FAQSection } from '@/components/common/FAQSection'
import Hero from '@/components/common/Hero'
import WhyBook from '@/components/common/WhyBook'
import { SearchForm } from '@/components/search/SearchForm'
import CarRentalLocation from '@/components/sections/car-rental/CarRentalLocation'
// import Hero from '@/components/sections/car-rental/Hero'
import TipsAndGuides from '@/components/common/TipsAndGuides'
import Information from '@/components/sections/car-rental/Information'
import PopularLocations from '@/components/sections/car-rental/PopularLocations'
import SubHero from '@/components/sections/car-rental/SubHero'
import { faqCarRentalProps } from '@/data/car-rental/faqCarRental.type'
import Link from 'next/link'

const page = () => {
	return (
		<>
			{/* <Hero /> */}
			<Hero
				bgImage='/images/sections/car-rental/hero-bg.jpg'
				title={
					<h1 className='h1'>
						Car Rental Made Easy - Compare & Book with Get My Rides
					</h1>
				}
				button={
					<Link
						href={'#'}
						className='font-dmSans font-medium text-base py-[8px] px-[16px] rounded-full bg-[#0a58ca]'
					>
						Economy rentals from <span className='font-bold'>€15/day</span>
					</Link>
				}
				className='pt-[216px] pb-[32px] max-md:pt-[96px] max-md:pb-[24px]'
				bodyClassName='space-y-[40px] max-w-[906px] mb-[122px] max-md:space-y-[24px] max-md:mb-[32px]'
				variants='withForm'
			/>
			<SubHero />
			<CarRentalLocation />
			<PopularLocations />
			<ChooseYourVehicle />
			<TipsAndGuides />
			<Information />
			<WhyBook />
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
							With <b>Get My Rides</b>, you get more choice, better prices, and
							direct support — all with one simple booking. Economy cars start
							from just <b>€15/day</b> with no hidden fees.
						</div>
					</div>
					<Advantages />
				</div>
			</section>
			<section className='pt-[104px] max-md:pt-[72px]'>
				<div className='__container relative z-10'>
					<SearchForm variant='secondary' className='bg-[#0a58ca]' />
				</div>
			</section>
			<section className='py-[88px] max-md:pt-[72px] max-md:pb-[48px]'>
				<div className='__container'>
					{/* title */}
					<div className='h2 max-w-[906px] mx-auto mb-[56px] max-md:mb-[32px]'>
						Frequently Asked Questions about Car Rental
					</div>
					<FAQSection faqProps={faqCarRentalProps} type='reverse' />
				</div>
			</section>
		</>
	)
}

export default page
