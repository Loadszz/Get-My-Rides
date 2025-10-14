import BookingPageClient from '@/components/sections/booking/BookingPageClient'
import { getProducts } from '@/lib/getProducts'
import { redirect } from 'next/navigation'

type PageParams = { id: string }

const Page = async ({ params }: { params: Promise<PageParams> }) => {
	// Ожидаем params с помощью await
	const resolvedParams = await params
	const products = await getProducts()
	const product = products.find(p => p.id === Number(resolvedParams.id))

	if (!product) redirect('/booking')

	return <BookingPageClient product={product} />
}

export default Page
