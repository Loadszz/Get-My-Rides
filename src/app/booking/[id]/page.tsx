import BookingPageClient from '@/components/sections/booking/BookingPageClient'
import { getProducts } from '@/lib/getProducts'
import { redirect } from 'next/navigation'

interface PageProps {
	params: Promise<{ id: string }>
}

const BookingPage = async ({ params }: PageProps) => {
	try {
		// Ожидаем params
		const resolvedParams = await params
		const id = resolvedParams.id

		// Проверяем валидность id
		if (!id || isNaN(Number(id))) {
			console.error('Invalid or missing id:', id)
			redirect('/booking')
		}

		const products = await getProducts()
		// Проверяем, что getProducts вернул массив
		if (!Array.isArray(products)) {
			console.error('getProducts did not return an array:', products)
			redirect('/booking')
		}

		const product = products.find(p => p.id === Number(id))
		if (!product) {
			console.error('Product not found for id:', id)
			redirect('/booking')
		}

		return <BookingPageClient product={product} />
	} catch (error) {
		console.error('Error in BookingPage component:', error)
		redirect('/error') // Или отобразите страницу ошибки
	}
}

export default BookingPage
