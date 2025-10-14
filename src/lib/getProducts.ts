import { Product } from '@/data/products.type'
export async function getProducts(): Promise<Product[]> {
	const res = await fetch('http://localhost:3000/api/products', {
		cache: 'no-store', // всегда свежие данные
	})
	if (!res.ok) throw new Error('Не удалось загрузить товары')
	const data = await res.json()
	return data.products as Product[]
}
