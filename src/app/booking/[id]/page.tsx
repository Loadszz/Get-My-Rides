import BookingPageClient from '@/components/sections/booking/BookingPageClient'
import { getProducts } from '@/lib/getProducts'
import { redirect } from 'next/navigation'

interface PageProps {
	params: {
		id: string
	}
}

const page = async ({ params }: PageProps) => {
	const products = await getProducts()
	const product = products.find(p => p.id === Number(params.id))

	if (!product) {
		redirect('/booking')
	}

	return <BookingPageClient product={product} />
}

export default page
