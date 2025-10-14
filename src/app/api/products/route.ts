import { products } from '@/data/products.type'
import { NextResponse } from 'next/server'

// Функция парсинга даты из формата "DD.MM.YYYY - HH:mm"
function parseDate(dateStr: string | null) {
	if (!dateStr) return null
	const [datePart, timePart] = dateStr.split(' - ')
	if (!datePart || !timePart) return null

	const [day, month, year] = datePart.split('.').map(Number)
	const [hour, minute] = timePart.split(':').map(Number)

	// Создаём JS Date (месяцы в JS начинаются с 0)
	return new Date(year, month - 1, day, hour, minute)
}

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)

	// Получаем параметры из строки запроса
	const city = searchParams.get('city')
	const from = searchParams.get('from')
	const to = searchParams.get('to')

	// Преобразуем даты
	const fromDate = from ? new Date(from) : null
	const toDate = to ? new Date(to) : null

	// Фильтруем продукты
	const availableProducts = products.filter(product => {
		// 1. Проверяем город
		if (city) {
			const availableInCity = product.location.some(
				loc => loc.city.toLowerCase() === city.toLowerCase()
			)
			if (!availableInCity) return false
		}

		// 2. Проверяем даты (если указаны)
		if (fromDate && toDate) {
			const isBooked = product.bookedPeriods.some(period => {
				const bookedFrom = new Date(period.from)
				const bookedTo = new Date(period.to)
				// Пересечение диапазонов — значит машина занята
				return fromDate < bookedTo && toDate > bookedFrom
			})
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
