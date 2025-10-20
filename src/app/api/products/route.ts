import { products } from '@/data/products.type'
import { NextResponse } from 'next/server'

// Проверяем и фильтруем продукты по параметрам запроса
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)

	// Параметры из запроса
	const city = searchParams.get('city')
	const from = searchParams.get('from')
	const to = searchParams.get('to')

	// Преобразуем строки ISO в Date объекты
	const fromDate = from ? new Date(from) : null
	const toDate = to ? new Date(to) : null

	// Фильтруем продукты
	const availableProducts = products.filter(product => {
		// 1️⃣ Проверка города
		if (city) {
			const availableInCity =
				product.location?.some(
					loc => loc.city.toLowerCase() === city.toLowerCase()
				) ?? false
			if (!availableInCity) return false
		}

		// 2️⃣ Проверка занятости
		if (fromDate && toDate) {
			const isBooked =
				product.bookedPeriods?.some(period => {
					const bookedFrom = new Date(period.from)
					const bookedTo = new Date(period.to)

					// Пересечение диапазонов — значит занято
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
