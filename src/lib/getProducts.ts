import { Product } from '@/data/products.type'

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000'

export async function getProducts(): Promise<Product[]> {
	try {
		const url = `${baseUrl}/api/products`
		console.log('Fetching products from:', url) // Лог для отладки
		const res = await fetch(url, { cache: 'no-store' })
		if (!res.ok) {
			throw new Error(
				`Failed to fetch products: ${res.status} ${res.statusText}`
			)
		}
		const data = await res.json()
		console.log('API response for products:', data) // Лог для отладки
		if (!data?.products || !Array.isArray(data.products)) {
			throw new Error(
				'Invalid response: products field is missing or not an array'
			)
		}
		return data.products as Product[]
	} catch (error) {
		console.error('Error in getProducts:', error)
		throw error // Компонент обработает ошибку
	}
}

export async function getProduct(id: string | number): Promise<Product> {
	try {
		const url = `${baseUrl}/api/products/${id}`
		console.log('Fetching product from:', url) // Лог для отладки
		const res = await fetch(url, { cache: 'no-store' })
		if (!res.ok) {
			throw new Error(
				`Failed to fetch product with id ${id}: ${res.status} ${res.statusText}`
			)
		}
		const data = await res.json()
		console.log('API response for product:', data) // Лог для отладки
		if (!data?.product) {
			throw new Error(`No product found for id ${id}`)
		}
		return data.product as Product
	} catch (error) {
		console.error(`Error fetching product with id ${id}:`, error)
		throw error // Компонент обработает ошибку
	}
}
