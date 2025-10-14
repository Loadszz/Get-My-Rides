import BookingPageClient from '@/components/sections/booking/BookingPageClient'
import { getProducts } from '@/lib/getProducts'
import { redirect } from 'next/navigation'

type PageParams = {
	id: string
}

const page = async ({ params }: { params: PageParams }) => {
	const products = await getProducts()
	const { id } = params

	const product = products.find(p => p.id === Number(id))
	if (!product) {
		redirect('/booking')
	}

	return <BookingPageClient product={product} />
}

export default page
