'use client'
import { SearchForm } from '@/components/search/SearchForm'
import { useMenu } from '@/context/MenuContext'
import { ReactNode } from 'react'
type HeroProps = {
	bgImage?: string
	title?: ReactNode
	description?: ReactNode
	button?: ReactNode
	star?: ReactNode
	advantages?: ReactNode
	className?: string
	bodyClassName?: string
	variants?: 'primary' | 'secondary' | 'withForm' | 'withButton' | 'white'
}
const Hero = ({
	bgImage,
	title,
	description,
	button,
	star,
	advantages,
	className = '',
	bodyClassName = '',
	variants,
}: HeroProps) => {
	const { isOpen } = useMenu()
	return (
		<section
			className={`${className} relative mt-[-98px] bg-cover bg-center bg-no-repeat mx-[16px] rounded-3xl max-lg:mt-[-48px] max-md:rounded-none max-md:mx-0 max-md:mt-[-64px]
				${isOpen && 'h-screen'}`}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div className={`${isOpen && 'opacity-0'} __container`}>
				{/* body */}
				<div className={`${bodyClassName} text-center mx-auto`}>
					{/* star */}
					{star}
					{/* title */}
					{title}
					{/* description */}
					{description}
					{/* button */}
					{button}
				</div>
				<div className='flex flex-col gap-y-[30px]'>
					{/* advantages */}
					{advantages}
					{/* form */}
					{variants === 'withForm' && <SearchForm className='bg-white' />}
				</div>
			</div>
		</section>
	)
}

export default Hero
