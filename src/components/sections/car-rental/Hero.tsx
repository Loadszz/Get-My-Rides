'use client'
import { SearchForm } from '@/components/search/SearchForm'
import { useMenu } from '@/context/MenuContext'
import Link from 'next/link'

const Hero = () => {
	const { isOpen } = useMenu()
	return (
		<section className='relative top-[-98px] bg-[url(/images/sections/car-rental/hero-bg.jpg)] bg-cover bg-center bg-no-repeat pt-[216px] pb-[32px] mx-[16px] rounded-3xl max-lg:top-[-48px] max-md:rounded-none max-md:pt-[96px] max-md:pb-[24px] max-md:mx-0 max-md:top-[-64px]'>
			<div className={`${isOpen && 'opacity-0'} __container`}>
				{/* body */}
				<div className='text-center mb-[122px] max-md:mb-[32px]'>
					<h1 className='h1 mb-[40px] max-md:mb-[24px]'>
						Car Rental Made Easy - <br />
						Compare & Book with Get My Rides
					</h1>
					<Link
						href={'#'}
						className='font-dmSans font-medium text-base py-[8px] px-[16px] rounded-full bg-[#0a58ca]'
					>
						Economy rentals from <span className='font-bold'>€15/day</span>
					</Link>
				</div>
				{/* form */}
				<SearchForm className='bg-white' />
			</div>
		</section>
	)
}

export default Hero
