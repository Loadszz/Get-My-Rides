import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'

export function formatDateTime(dateString: string | null) {
	if (!dateString) return ''
	const date = new Date(dateString)
	return format(date, 'EEEE, MMM do - HH:mm', { locale: enUS })
}
