import ChooseYourVehicle from '@/components/common/ChooseYourVehicle'
import { FAQSection } from '@/components/common/FAQSection'
import WhyBook from '@/components/common/WhyBook'
import { SearchForm } from '@/components/search/SearchForm'
import Advantages from '@/components/sections/car-rental/Advantages'
import CarRentalLocation from '@/components/sections/car-rental/CarRentalLocation'
import Hero from '@/components/sections/car-rental/Hero'
import Information from '@/components/sections/car-rental/Information'
import PopularLocations from '@/components/sections/car-rental/PopularLocations'
import SubHero from '@/components/sections/car-rental/SubHero'
import TipsAndGuides from '@/components/sections/car-rental/TipsAndGuides'
import { faqCarRentalProps } from '@/data/car-rental/faqCarRental.type'

const page = () => {
	return (
		<>
			<Hero />
			<SubHero />
			<CarRentalLocation />
			<PopularLocations />
			<ChooseYourVehicle />
			<TipsAndGuides />
			<Information />
			<WhyBook />
			<Advantages />
			<section className='pt-[104px] max-md:pt-[72px]'>
				<div className='__container relative z-10'>
					<SearchForm variant='secondary' className='bg-[#0a58ca]' />
				</div>
			</section>
			<FAQSection
				faqProps={faqCarRentalProps}
				title='Frequently Asked Questions about Car Rental'
				variants='secondary'
			/>
		</>
	)
}

export default page
