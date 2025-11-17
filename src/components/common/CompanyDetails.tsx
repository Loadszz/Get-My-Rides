import IconLocation from '@/assets/icons/common/location.svg'
import picture from '@/assets/images/sections/common/company-details.jpg'
import Image from 'next/image'
import { ReactElement } from 'react'
interface IProps {
	title: string
	description?: ReactElement
	variant?: 'about-us' | 'contact'
}
const CompanyDetails = ({ title, description, variant }: IProps) => {
	return (
		<section
			className={`${
				variant === 'contact' ? 'pt-[144px]' : 'pt-[88px]'
			} max-md:pt-[72px]`}
		>
			<div className='__container'>
				{/* body */}
				<div
					className={`flex items-center ${
						variant === 'contact'
							? 'gap-[24px]'
							: 'gap-[74px] max-md:gap-[24px]'
					} max-md:flex-col-reverse max-md:items-stretch`}
				>
					{/* column-left */}
					<div className='relative flex-[0_1_676px] min-h-[368px] max-md:flex-[0_0_auto]'>
						<Image
							src={picture}
							fill
							unoptimized
							alt='map'
							className='object-cover rounded-2xl'
						/>
					</div>
					{/* column-right */}
					<div
						className={`${
							variant === 'contact'
								? 'flex-[0_0_341px] mx-auto space-y-[24px] max-md:flex-[0_0_100%] max-md:mx-0'
								: 'flex-[1_1_auto] space-y-[48px] max-md:space-y-[32px]'
						}`}
					>
						{/* header */}
						<div className='space-y-[24px] max-w-[618px] max-md:space-y-[16px]'>
							{/* title */}
							<div className='h2'>{title}</div>
							{/* description */}
							{description}
						</div>
						{/* body */}
						<div className='flex items-start gap-x-[16px]'>
							{/* icon */}
							<IconLocation className='w-[24px] shrink-0 text-[#0a58ca]' />
							{/* text */}
							<div className='font-dmSans text-base text-[#1a1a1a]'>
								<b>Get My Rides LTD</b>
								<br />
								Azur Deluxe, St. Constantin I Elena, 9006
								<br />
								Varna, Bulgaria
								<br />
								Company Registration: <b>208023864</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CompanyDetails
