import ArrowRight from '@/assets/icons/arrow-right.svg'
import IconEn from '@/assets/icons/en-language.svg'
import { Nav } from '@/components/nav/Nav'
import { AboutUs } from '@/components/sections/home/AboutUs'
import { AvailableCars } from '@/components/sections/home/AvailableCars'
import { OurPlatform } from '@/components/sections/home/OurPlatform'
import { RentalDestinations } from '@/components/sections/home/RentalDestinations'
import { SpecialOffers } from '@/components/sections/home/SpecialOffers'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

export default function Home() {
	return (
		<>
			<header className='bg-blue-600 py-[48px]'>
				<div className='__container'>
					{/* body */}
					<div className='flex justify-between items-center'>
						{/* logo */}
						<Logo />
						{/* nav */}
						<Nav
							ulClassName='flex gap-x-[23px] max-xl:gap-x-[12px]'
							liClassName='font-dmSans text-base font-medium not-last:border-r not-last:pr-[23px] border-white/25 max-xl:pr-[12px]'
						/>
						<div className='flex gap-x-[24px]'>
							{/* lang */}
							<div className='flex items-center gap-x-[4px]'>
								<IconEn className='w-[24px]' />
								<span className='font-dmSans font-medium text-sm'>EN</span>
							</div>
							{/* sign */}
							<div>
								<Button
									href='#'
									variant='sign'
									className='flex rounded-xl py-[16px] pl-[24px] w-[132px]'
								>
									<span className='mr-[7px]'>Sign In</span>
									<ArrowRight className='w-[24px]' />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</header>
			<AvailableCars />
			<RentalDestinations />
			<SpecialOffers />
			<AboutUs />
			<OurPlatform />
		</>
	)
}
