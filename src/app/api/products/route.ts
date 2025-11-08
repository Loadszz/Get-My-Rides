import { products } from '@/data/products.type'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const city = searchParams.get('city')
	const from = searchParams.get('from')
	const to = searchParams.get('to')
	const fromDate = from ? new Date(from) : null
	const toDate = to ? new Date(to) : null

	const availableProducts = products.filter(product => {
		if (city) {
			const availableInCity =
				product.location?.some(
					loc => loc.city.toLowerCase() === city.toLowerCase()
				) ?? false
			if (!availableInCity) return false
		}
		if (fromDate && toDate) {
			const isBooked =
				product.bookedPeriods?.some(period => {
					const bookedFrom = new Date(period.from)
					const bookedTo = new Date(period.to)
					return fromDate < bookedTo && toDate > bookedFrom
				}) ?? false
			if (isBooked) return false
		}
		return true
	})

	return NextResponse.json({
		success: true,
		count: availableProducts.length,
		products: availableProducts,
	})
}
