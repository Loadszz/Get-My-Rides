export type DriverFormData = {
	firstName: string
	lastName: string
	email: string
	phone: string
}
export type CompanyFormData = {
	companyName: string
	address: string
	addressSecond: string
	postalCode: string
	city: string
	country: string
	vatNumber: string
}

export interface IDriverDetailsProps {
	id: number
	label: string
	name: keyof DriverFormData
	type: string
	placeholder: string
	required?: boolean
}
export interface ICompanyDetailsProps {
	id: number
	label: string
	name: keyof CompanyFormData
	type: string
	placeholder: string
	required?: boolean
}

export const driverDetailsProps: IDriverDetailsProps[] = [
	{
		id: 1,
		label: 'First Name*',
		name: 'firstName',
		type: 'text',
		placeholder: 'i.e. John',
		required: true,
	},
	{
		id: 2,
		label: 'Last Name*',
		name: 'lastName',
		type: 'text',
		placeholder: 'i.e. Smith',
		required: true,
	},
	{
		id: 3,
		label: 'Email Address*',
		name: 'email',
		type: 'email',
		placeholder: 'i.e. example@mail.com',
		required: true,
	},
]
export const companyDetailsProps: ICompanyDetailsProps[] = [
	{
		id: 1,
		label: 'Company Name*',
		name: 'companyName',
		type: 'text',
		placeholder: 'Company Name',
		required: true,
	},
	{
		id: 2,
		label: 'Address*',
		name: 'address',
		type: 'text',
		placeholder: 'Address',
		required: true,
	},
	{
		id: 3,
		label: 'Address 2',
		name: 'addressSecond',
		type: 'text',
		placeholder: 'Address 2',
	},
	{
		id: 4,
		label: 'Postal Code*',
		name: 'postalCode',
		type: 'text',
		placeholder: 'Postal Code',
		required: true,
	},
	{
		id: 5,
		label: 'City*',
		name: 'city',
		type: 'text',
		placeholder: 'City',
		required: true,
	},
	{
		id: 6,
		label: 'Country*',
		name: 'country',
		type: 'text',
		placeholder: 'Country',
		required: true,
	},
	{
		id: 7,
		label: 'VAT Number*',
		name: 'vatNumber',
		type: 'text',
		placeholder: 'VAT Number',
		required: true,
	},
]
