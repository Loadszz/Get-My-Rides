import { whereWeOperateProps } from '@/data/about-us/whereWeOperate.type'
import Image from 'next/image'
import Link from 'next/link'

const WhereWeOperate = () => {
	return (
		<section className='pt-[88px] max-md:pt-[44px]'>
			<div className='__container'>
				{/* title */}
				<div className='h2 mb-[48px] max-md:mb-[24px]'>Where We Operate</div>
				{/* body */}
				<div className='grid grid-cols-3 gap-x-[16px] gap-y-[32px] max-md:grid-cols-2 max-md:gap-x-[8px] max-md:gap-y-[16px]'>
					{/* column */}
					{whereWeOperateProps.map(item => (
						<div key={item.id} className='space-y-[16px]'>
							{/* image */}
							<div className='relative min-h-[288px] max-md:min-h-[178px]'>
								<Image
									src={item.image}
									fill
									unoptimized
									alt={item.city}
									className='object-cover rounded-2xl'
								/>
								<div className='absolute top-[16px] right-[16px] flex items-center gap-x-[8px] py-[8px] px-[16px] border border-[rgba(255,255,255,0.56)] bg-[rgba(255,255,255,0.24)] rounded-full max-md:top-[8px] max-md:right-[8px] max-md:py-[4px]'>
									<div>
										<item.iconHeader className='w-[24px] max-md:w-[16px]' />
									</div>
									<div className='font-dmSans font-medium text-base max-md:text-sm hidden max-md:inline'>
										{item.cityShort || item.city}
									</div>
									<div className='font-dmSans font-medium text-base max-md:text-sm inline max-md:hidden'>
										{item.city}
									</div>
								</div>
							</div>
							{/* link */}
							<div className='flex items-center gap-x-[8px]'>
								{/* icon */}
								<item.iconLink className='w-[24px] shrink-0' />
								{/* text */}
								<Link
									href={item.link.href}
									className='font-dmSans text-base text-[#1a1a1a] opacity-[0.78] border-b border-transparent transform-all duration-500 hover:border-[#8c8c8c]'
								>
									{item.link.text}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default WhereWeOperate
