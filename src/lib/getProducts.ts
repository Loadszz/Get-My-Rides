import { Product } from '@/data/products.type'

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000'

export async function getProducts(): Promise<Product[]> {
	const res = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' })
	if (!res.ok) throw new Error('Не удалось загрузить товары')
	const data = await res.json()
	return data.products as Product[]
}

export async function getProduct(id: string | number): Promise<Product> {
	const res = await fetch(`${baseUrl}/api/products/${id}`, {
		cache: 'no-store',
	})
	if (!res.ok) throw new Error('Не удалось загрузить товар')
	const data = await res.json()
	return data.product as Product
}
