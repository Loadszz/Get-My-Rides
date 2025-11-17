'use client'
import OrderStatus from '@/components/sections/thank-you/OrderStatus'
import { useSearchParams } from 'next/navigation'

const ThankYouPageClient = () => {
	const params = useSearchParams()
	const raw = params.get('data')
	const data = raw ? JSON.parse(decodeURIComponent(raw)) : {}

	console.log('Data received:', data)
	return (
		<>
			<OrderStatus items={data} />
		</>
	)
}

export default ThankYouPageClient
