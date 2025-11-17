import { AvailableCars } from '@/components/common/AvailableCars'
import { FAQSection } from '@/components/common/FAQSection'
import Hero from '@/components/common/Hero'
import TrustAndTransparency from '@/components/common/TrustAndTransparency'
import WhyBook from '@/components/common/WhyBook'
import { SearchForm } from '@/components/search/SearchForm'
import { AboutUs } from '@/components/sections/home/AboutUs'
import AboutVarnaSection from '@/components/sections/varna-cro/AboutVarnaSection'
import ExploreMore from '@/components/sections/varna-cro/ExploreMore'
import Steps from '@/components/sections/varna-cro/Steps'
import { Star } from '@/components/ui/Star'
import { heroData } from '@/data/hero.types'
import { faqVarnaCroProps } from '@/data/varna-cro/faqVarnaCro'
import { getProducts } from '@/lib/getProducts'

export default async function page() {
	const products = await getProducts()
	return (
		<>
			<Hero
				bgImage='/images/sections/varna-cro/hero-bg.jpg'
				star={
					<div className='flex gap-[8px] max-md:hidden'>
						<div className='flex gap-[6px]'>
							<Star rating={5} className='w-[17px]' />
						</div>
						<div className='font-dmSans text-sm font-bold'>
							9.7/10{' '}
							<span className='font-normal underline underline-offset-2'>
								3,578 reviews
							</span>
						</div>
					</div>
				}
				title={
					<h1 className='h1'>
						Car Rental in Varna - Compare Local Deals from €15/day
					</h1>
				}
				description={
					<div className='font-dmSans text-base max-md:max-w-[228px] max-md:mx-auto'>
						Book online or pay at pick-up. No hidden fees.
					</div>
				}
				advantages={
					<div className='flex justify-center items-center gap-[24px] max-md:order-2 max-md:flex-wrap'>
						{heroData.map((item, index) => (
							<div
								key={index}
								className='flex items-center gap-[8px] max-md:flex-[1_0_46%]'
							>
								<div className='flex justify-center w-[20px] h-[20px] bg-[#ffffff] rounded-2xl'>
									<item.icon className='w-[10px] text-[#0a58ca]' />
								</div>
								<span>{item.text}</span>
							</div>
						))}
					</div>
				}
				className='pt-[216px] pb-[32px] max-md:pt-[96px] max-md:pb-[24px]'
				bodyClassName='max-w-[1050px] space-y-[16px] mb-[78px] max-md:mb-[16px] max-md:text-center'
				variants='withForm'
			/>
			<AvailableCars products={products} />
			<WhyBook variants='varna-cro' />
			<AboutUs />
			<Steps />
			<TrustAndTransparency />
			<ExploreMore />
			{/* form */}
			<section className='pt-[80px] max-md:pt-[88px] max-md:pb-[48px]'>
				<div className='__container relative z-10'>
					<SearchForm
						variant='secondary'
						buttonTitle='Find Your Car in Varna'
						className='bg-[#0a58ca]'
					/>
				</div>
			</section>
			<AboutVarnaSection />
			<section className='py-[93px] max-md:pt-[72px] max-md:pb-[48px]'>
				<div className='__container'>
					{/* title */}
					<div className='h2 max-w-[906px] mx-auto mb-[56px] max-md:mb-[32px]'>
						Frequently asked questions about car rent in Varna
					</div>
					<FAQSection faqProps={faqVarnaCroProps} type='reverse' />
				</div>
			</section>
		</>
	)
}
