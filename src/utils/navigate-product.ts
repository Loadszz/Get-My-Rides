import { Product } from '@/data/products.type'
import { useRouter } from 'next/navigation'

export const goToBooking = (
	router: ReturnType<typeof useRouter>,
	product: Product
) => {
	router.push(`/booking/${product.id}`)
}
