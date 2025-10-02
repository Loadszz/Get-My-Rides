export async function getCars() {
	const res = await fetch('https://api.example.com/cars', { cache: 'no-store' })
	if (!res.ok) throw new Error('Failed to fetch cars')
	return res.json()
}
