import { useState } from 'react'

export const useBookingForm = () => {
	const [formData, setFormData] = useState({
		information: {},
		details: {},
		company: {},
		choice: 'no' as 'yes' | 'no', // добавили choice
	})

	// Универсальное обновление секций
	const handleUpdate = (section: string, data: Record<string, any>) => {
		setFormData(prev => ({
			...prev,
			[section]: { ...prev[section], ...data },
		}))
	}

	// Обновление выбора "Business Booking?"
	const handleChoice = (value: 'yes' | 'no') => {
		setFormData(prev => ({ ...prev, choice: value }))
	}

	// Отправка / логирование данных
	const handleSubmit = async () => {
		console.clear()

		// Обязательные поля
		const requiredFields: Record<string, string[]> = {
			details: ['firstName', 'lastName', 'email', 'phone'],
		}
		if (formData.choice === 'yes') {
			requiredFields.company = [
				'companyName',
				'address',
				'postalCode',
				'city',
				'country',
				'vatNumber',
			]
		}

		// Проверка обязательных полей
		for (const section in requiredFields) {
			for (const field of requiredFields[section]) {
				if (
					!formData[section]?.[field] ||
					formData[section][field].toString().trim() === ''
				) {
					alert(
						`❌ Поле "${field}" в секции "${section}" обязательно для заполнения`
					)
					return
				}
			}
		}

		// Логирование
		console.group(
			'%c📤 Отправка данных бронирования',
			'color:#0a58ca; font-weight: bold;'
		)
		Object.entries(formData).forEach(([section, data]) => {
			console.groupCollapsed(
				`%c📦 ${section}`,
				'color:#22c55e; font-weight: bold;'
			)
			console.table(data)
			console.groupEnd()
		})
		console.groupEnd()
		console.log(
			'%c✅ Данные успешно "отправлены" (локально)',
			'color:#16a34a; font-weight:bold;'
		)
		alert('✅ Данные успешно отправлены (проверь консоль)')
	}

	return { formData, handleUpdate, handleChoice, handleSubmit }
}
