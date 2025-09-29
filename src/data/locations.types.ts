export interface ILocationProps {
	id: number
	city: string
	country: string
}

export const locationProps: ILocationProps[] = [
	{ id: 1, city: 'Varna', country: 'Bulgaria' },
	{ id: 2, city: 'Sofia', country: 'Bulgaria' },
	{ id: 3, city: 'Burgas', country: 'Bulgaria' },
]
