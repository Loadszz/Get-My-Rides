import { products } from '@/data/products.type'

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params
	const product = products.find(p => p.id === Number(id))

	if (!product) return new Response('Not found', { status: 404 })

	return new Response(JSON.stringify({ product }), {
		headers: { 'Content-Type': 'application/json' },
	})
}
