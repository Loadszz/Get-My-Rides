export function matchesFilter(
	product: any,
	filters: Record<string, string[]>
): boolean {
	for (const key in filters) {
		const filterValues = filters[key]
		if (!filterValues || filterValues.length === 0) continue

		const productValues = (product as any)[key]
		if (!productValues) return false

		if (Array.isArray(productValues)) {
			if (!productValues.some((v: string) => filterValues.includes(v))) {
				return false
			}
		} else {
			if (!filterValues.includes(productValues)) return false
		}
	}
	return true
}
