import BookingPageClient from '@/components/sections/booking/BookingPageClient'
import { getProduct } from '@/lib/getProducts'
import { redirect } from 'next/navigation'

type PageParams = {
	id: string
}
const page = async ({ params }: { params: Promise<PageParams> }) => {
	const { id } = await params
	let product
	try {
		product = await getProduct(id)
	} catch {
		redirect('/booking')
	}

	return <BookingPageClient product={product} />
}
export default page
