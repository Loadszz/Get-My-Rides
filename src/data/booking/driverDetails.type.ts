export type FormData = {
	firstName: string
	lastName: string
	email: string
	phone: string
}

export interface IDriverDetailsProps {
	id: number
	label: string
	name: keyof FormData
	type: string
	placeholder: string
}

export const driverDetailsProp: IDriverDetailsProps[] = [
	{
		id: 1,
		label: 'First Name',
		name: 'firstName',
		type: 'text',
		placeholder: 'i.e. John',
	},
	{
		id: 2,
		label: 'Last Name',
		name: 'lastName',
		type: 'text',
		placeholder: 'i.e. Smith',
	},
	{
		id: 3,
		label: 'Email Address',
		name: 'email',
		type: 'email',
		placeholder: 'i.e. example@mail.com',
	},
]
