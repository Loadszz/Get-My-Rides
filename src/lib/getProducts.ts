import { Product } from '@/data/products.type'

export async function getProducts(): Promise<Product[]> {
	// Для SSR на сервере: Vercel или локальный сервер
	const baseUrl = process.env.VERCEL_URL // если на Vercel
		? `https://${process.env.VERCEL_URL}`
		: 'http://localhost:3000' // локально

	const res = await fetch(`${baseUrl}/api/products`, {
		cache: 'no-store', // всегда свежие данные
	})

	if (!res.ok) throw new Error('Не удалось загрузить товары')

	const data = await res.json()
	return data.products as Product[]
}
