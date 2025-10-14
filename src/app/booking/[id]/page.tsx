import BookingPageClient from '@/components/sections/booking/BookingPageClient'
import { getProduct } from '@/lib/getProducts'
import { redirect } from 'next/navigation'

interface PageProps {
	params: Promise<{ id: string }> // <--- промис
}

const page = async ({ params }: PageProps) => {
	const { id } = await params // <--- нужно await
	let product

	try {
		product = await getProduct(id)
	} catch {
		redirect('/booking')
	}

	return <BookingPageClient product={product} />
}

export default page
