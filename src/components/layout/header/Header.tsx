'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import IconEn from '@/assets/icons/en-language.svg'
import { Nav } from '@/components/nav/Nav'
import Burger from '@/components/ui/Burger'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { useState } from 'react'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const handleBurger = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			document.body.classList.add('lock')
			setIsScrolled(false)
		} else {
			document.body.classList.remove('lock')
		}
	}

	return (
		<header className='bg-[#0a58ca] py-[48px] z-50 max-lg:py-[24px]'>
			<div className='__container'>
				{/* body */}
				<div className='flex justify-between items-center'>
					{/* logo */}
					<Logo className='z-10' />
					{/* burger */}
					<Burger
						isScrolled={isScrolled}
						isOpen={isOpen}
						handleBurger={handleBurger}
					/>
					{/* nav */}
					<div
						className={`flex justify-between items-center w-full max-lg:absolute max-lg:justify-start max-lg:flex-col max-lg:items-start max-lg:top-0 max-lg:h-[100%] max-lg:bg-[#0a58ca] max-lg:pt-[128px] max-lg:px-[15px] 
							${isOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'}`}
					>
						<Nav
							navClassName='w-full max-lg:mb-[56px]'
							ulClassName='flex justify-center divide-x-1 gap-[23px] max-xl:gap-[12px] max-lg:flex-col max-lg:gap-[48px] max-lg:divide-none'
							liClassName='relative font-dmSans text-base font-medium border-white/25 xl:not-last:pr-[23px] lg:not-last:pr-[12px] max-lg:before:absolute max-lg:before:w-[1px] max-lg:before:border-white/25 max-lg:not-last:before:border-b-[16px] max-lg:before:bottom-[-32px] max-lg:before:left-[9px] max-lg:before:rotate-90'
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
