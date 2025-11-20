import { chooseYourVehicleProps } from '@/data/chooseYourVehicle.types'
import Image from 'next/image'
import Link from 'next/link'

const ChooseYourVehicle = () => {
	return (
		<section className='py-[56px] bg-[#f5f5f5] max-md:py-[32px]'>
			<div className='__container'>
				{/* header */}
				<div className='text-center max-w-[906px] mx-auto mb-[48px] max-md:mb-[24px]'>
					{/* title */}
					<div className='h2 mb-[16px]'>Choose Your Vehicle</div>
					{/* descriptrion */}
					<div className='font-dmSans text-base text-[#1a1a1a]'>
						Find the perfect car for your trip with options to suit every budget
						and travel style. No matter which vehicle you choose, all rentals
						include insurance options and flexible booking terms.
					</div>
				</div>
				{/* body */}
				<div className='grid grid-cols-3 items-stretch gap-[16px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[24px]'>
					{chooseYourVehicleProps.map(item => (
						<div key={item.id} className='flex flex-col'>
							{/* image */}
							<div className='relative'>
								<Image
									src={item.image}
									width={445}
									height={256}
									alt={item.typeCar}
									className='w-full object-cover rounded-t-2xl'
								/>
								<div className='font-dmSans font-medium text-base absolute top-[16px] left-[16px] py-[8px] px-[16px] border border-[rgba(255,255,255,0.56)] bg-[rgba(255,255,255,0.24)]  rounded-full'>
									{item.typeCar}
								</div>
							</div>
							{/* info */}
							<div className='flex flex-col flex-1 p-[16px] bg-white rounded-b-2xl'>
								{/* info-header */}
								<div className='mb-[16px]'>
									{/* title */}
									<div className='font-dmSans font-medium text-base text-[#1a1a1a]'>
										{item.title}
									</div>
									{/* sub-title */}
									<div className='font-dmSans text-base text-[#757575]'>
										{item.subTitle}
									</div>
								</div>
								{/* info-list */}
								<div className='mb-[56px] max-md:mb-[32px]'>
									<div className='font-dmSans font-medium text-base text-[#1a1a1a] mb-[8px]'>
										{item.ulTitle}
									</div>
									<ul className='space-y-[8px]'>
										{item.texts.map((text, index) => (
											<li key={index} className='flex items-start gap-x-[8px]'>
												<item.icon className='w-[24px] shrink-0' />{' '}
												<span className='font-dmSans text-base text-[#757575]'>
													{text}
												</span>
											</li>
										))}
									</ul>
								</div>
								{/* info-link */}
								<div className='mt-auto'>
									<Link
										href={item.link.href}
										className='font-dmSans font-medium text-sm text-[#0a58ca] border-b border-transparent transform-all duration-500 hover:border-[#0a58ca]'
									>
										{item.link.text}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ChooseYourVehicle
