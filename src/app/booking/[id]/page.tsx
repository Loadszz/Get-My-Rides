import BookingPageClient from '@/components/sections/booking/BookingPageClient'
import { getProduct } from '@/lib/getProducts'
import { redirect } from 'next/navigation'

const Page = async (props: { params: { id: string } }) => {
	const { id } = await props.params // <--- вот здесь await
	const product = await getProduct(id)
	if (!product) redirect('/booking')

	return <BookingPageClient product={product} />
}

export default Page
