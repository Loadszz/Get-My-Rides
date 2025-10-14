import { Product } from '@/data/products.type'
import { useRouter } from 'next/navigation'

type BookingParams = {
	from?: string | null
	to?: string | null
	city?: string | null
}

export const goToBooking = (
	router: ReturnType<typeof useRouter>,
	product: Product,
	params?: BookingParams
) => {
	const query = new URLSearchParams({
		...(params?.from ? { from: params.from } : {}),
		...(params?.to ? { to: params.to } : {}),
		...(params?.city ? { city: params.city } : {}),
	}).toString()

	console.log(
		'Navigating to:',
		`/booking/${product.id}${query ? `?${query}` : ''}`
	)

	router.push(`/booking/${product.id}${query ? `?${query}` : ''}`)
}
