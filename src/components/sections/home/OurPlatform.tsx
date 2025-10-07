import ourPlatformImg from '@/assets/images/sections/home/our-platform.jpg'
import { Accordion } from '@/components/ui/Accordion'
import { ourPlatform } from '@/data/ourPlatformText'
import Image from 'next/image'

export const OurPlatform = () => {
	return (
		<section className='pt-[156px] pb-[104px] max-md:pt-[48px] max-md:pb-[56px]'>
			<div className='__container'>
				{/* title */}
				<div className='title max-w-[676px] mb-[56px] max-md:mb-[32px]'>
					Everything you need to know about our platform
				</div>
				{/* body */}
				<div className='flex justify-between'>
					{/* block-left */}
					<div className='flex-[0_0_50.6%] max-lg:flex-[0_0_100%]'>
						<Accordion items={ourPlatform} multiple={false} />
					</div>
					{/* block-right */}
					<div className='flex-[0_1_45.2%] max-lg:hidden'>
						<Image
							src={ourPlatformImg}
							width={618}
							height={520}
							alt='ourPlatform'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
