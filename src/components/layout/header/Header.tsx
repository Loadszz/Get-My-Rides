'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import IconBuildings from '@/assets/icons/buildings.svg'
import IconEn from '@/assets/icons/en-language.svg'
import IconPins from '@/assets/icons/pins.svg'
import IconRoads from '@/assets/icons/roads-fixed.svg'
import { Nav } from '@/components/nav/Nav'
// import { SearchForm } from '@/components/search/SearchForm'
import Burger from '@/components/ui/Burger'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const Header = () => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const isBookingPage = pathname.startsWith('/booking')

	const handleBurger = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			document.body.classList.add('lock')
			setIsScrolled(false)
		} else {
			document.body.classList.remove('lock')
		}
	}
	if (isBookingPage) {
		return (
			<header className='bg-[#0a58ca] py-[24px] z-50'>
				<div className='__container'>
					{/* body */}
					<div className='flex justify-between items-center'>
						{/* logo */}
						<Logo />
					</div>
				</div>
			</header>
		)
	}
	return (
		<header
			className={`${
				pathname === '/search'
					? 'h-[88px] max-lg:h-full overflow-hidden'
					: 'py-[48px]'
			} ${
				isOpen ? 'overflow-visible' : ''
			} relative bg-[#0a58ca] max-lg:py-[24px] `}
		>
			{isOpen && (
				<div className='absolute left-0 top-0 w-full h-[100vh] bg-[#0a58ca] z-20'></div>
			)}
			{/* background SVGs */}
			<div
				className={`${isOpen ? 'z-20' : 'z-10'} ${
					pathname === '/search' ? 'hidden max-lg:flex' : 'flex'
				} absolute inset-0 z-10 pointer-events-none`}
			>
				<IconBuildings className='absolute top-0 right-0 w-[958px] h-[539px]' />
				<IconRoads className='absolute top-0 right-[-200px] w-[1241px] h-[550px]' />
				<IconPins className='absolute top-[220px] right-0 w-[690px] h-[171px]' />
			</div>
			<div className='__container'>
				{/* body */}
				<div className='flex justify-between items-center'>
					{/* logo */}
					<Logo
						className={`${
							pathname === '/search'
								? 'hidden max-lg:inline-block'
								: 'inline-block'
						} z-30`}
					/>
					{/* burger */}
					<Burger
						isScrolled={isScrolled}
						isOpen={isOpen}
						handleBurger={handleBurger}
					/>
					{/* nav */}
					<div
						className={`justify-between items-center w-full max-lg:absolute max-lg:justify-start max-lg:flex-col max-lg:items-start max-lg:top-0 max-lg:pt-[128px] max-lg:px-[15px] z-20 ${
							isOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'
						} ${pathname === '/search' ? 'hidden max-lg:flex' : 'flex'}`}
					>
						<Nav
							navClassName='w-full max-lg:mb-[56px]'
							ulClassName='flex justify-center divide-x-1 gap-[23px] max-xl:gap-[12px] max-lg:flex-col max-lg:gap-[48px] max-lg:divide-none'
							liClassName='relative border-white/25 xl:not-last:pr-[23px] lg:not-last:pr-[12px] max-lg:before:absolute max-lg:before:w-[1px] max-lg:before:border-white/25 max-lg:not-last:before:border-b-[16px] max-lg:before:bottom-[-32px] max-lg:before:left-[9px] max-lg:before:rotate-90'
							linkClassName='font-dmSans text-base font-medium border-b border-transparent transform-all duration-500 hover:border-white'
						/>
						<div className='flex gap-[24px] max-lg:flex-col max-lg:items-center max-lg:gap-[16px] max-lg:w-full'>
							{/* lang */}
							<div className='flex items-center gap-x-[4px] max-lg:justify-center max-lg:py-[16px] max-lg:w-full max-lg:border max-lg:border-[#FFFFFF8F] max-lg:rounded-[12px]'>
								<IconEn className='w-[24px]' />
								<span className='font-dmSans font-medium text-sm'>EN</span>
							</div>
							{/* sign */}
							<Button
								href='#'
								variant='sign'
								className='flex rounded-xl py-[16px] px-[24px] w-[132px] max-lg:w-full max-lg:justify-center'
							>
								<span className='mr-[7px]'>Sign In</span>
								<ArrowRight className='w-[24px]' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
