import { SearchForm } from '@/components/search/SearchForm'
import { Star } from '@/components/ui/Star'
import { heroData } from '@/data/hero.types'
export const Hero = () => {
	return (
		<section className='bg-[#0a58ca] pt-[52px] pb-[114px] max-md:pt-[12px] max-md:pb-[24px]'>
			<div className='__container'>
				{/* body */}
				<div className='flex flex-col'>
					{/* star */}
					<div className='flex gap-[8px] mb-[16px] max-md:mb-[8px]'>
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
					{/* h1 */}
					<h1 className='h1 mb-[16px]'>Compare Rental Cars</h1>
					{/* description */}
					<div className='font-dmSans font-medium text-base mb-[48px] max-md:order-1 max-md:mb-[24px]'>
						Car rental comparison & Booking platform
					</div>
					{/* form */}
					<SearchForm />
					{/* footer */}
					<div className='flex items-center gap-[24px] max-md:order-2 max-md:flex-wrap max-md:items-baseline'>
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
				</div>
			</div>
		</section>
	)
}
