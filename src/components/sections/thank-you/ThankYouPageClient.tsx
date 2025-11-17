'use client'
import TipsAndGuides from '@/components/common/TipsAndGuides'
import OrderStatus from '@/components/sections/thank-you/OrderStatus'
import { useSearchParams } from 'next/navigation'

const ThankYouPageClient = () => {
	const params = useSearchParams()
	const raw = params.get('data')
	const data = raw ? JSON.parse(decodeURIComponent(raw)) : {}

	console.log('Data received:', data)
	return (
		<>
			<section className='pt-[24px] pb-[64px] max-md:pb-[24px]'>
				<div className='__container'>
					{/* body */}
					<div className='space-y-[16px]'>
						{/* text */}
						<div className='font-dmSans font-medium text-xl text-[#0a58ca] max-md:text-sm'>
							Thank you!
						</div>
						{/* title */}
						<h1 className='title max-md:mb-0'>
							Your booking number is:{' '}
							<span className='text-[#0a58ca]'>8HAR45</span>
						</h1>
						{/* description */}
						<div className='font-dmSans text-base text-[#1a1a1a] max-w-[712px] max-md:hidden'>
							We`ve sent your booking request to the rental provider. They
							usually confirm within 1–3 hours. You`ll receive an email once
							your booking is approved.
						</div>
					</div>
				</div>
			</section>
			<OrderStatus items={data} />
			<TipsAndGuides variants='thank-you' />
		</>
	)
}

export default ThankYouPageClient
