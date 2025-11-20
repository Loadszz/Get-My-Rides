'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import Choice from '@/components/sections/booking/Choice'
import Details from '@/components/sections/booking/Details'
import Extras from '@/components/sections/booking/Extras'
import Help from '@/components/sections/booking/Help'
import Information from '@/components/sections/booking/Information'
import Policies from '@/components/sections/booking/Policies'
import Price from '@/components/sections/booking/Price'
import RentalLocation from '@/components/sections/booking/RentalLocation'
import { Button } from '@/components/ui/Button'
import { CompanyFormData, DriverFormData } from '@/data/booking/details.type'
import { IServicesProps, servicesProps } from '@/data/booking/extras.type'
import { Product } from '@/data/products.type'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export type BookingFormValues = DriverFormData &
	CompanyFormData & {
		choice: 'yes' | 'no'
		fromLocation: string
		toLocation: string
		from: string
		to: string
		total: number
	}
const BookingPageClient = ({ product }: { product: Product }) => {
	const router = useRouter()
	const [selectedExtras, setSelectedExtras] = useState<IServicesProps[]>(
		servicesProps.map(item => ({ ...item, quantity: 0 }))
	)
	const [openBlocks, setOpenBlocks] = useState<Record<string, boolean>>({
		rentalLocation: true,
		policies: true,
		extras: true,
		details: true,
		information: true,
		price: true,
	})
	const toggleBlock = (key: string) => {
		setOpenBlocks(prev => ({ ...prev, [key]: !prev[key] }))
	}
	const methods = useForm<BookingFormValues>({
		defaultValues: {
			fromLocation: '',
			toLocation: '',
			choice: 'no',
			companyName: '',
			address: '',
			addressSecond: '',
			postalCode: '',
			city: '',
			country: '',
			vatNumber: '',
			from: '',
			to: '',
		},
		mode: 'onSubmit',
	})

	const onSubmit = (data: BookingFormValues) => {
		const payload = {
			...data,
			extras: selectedExtras,
		}
		console.log('📤 Booking form data:', data)
		alert('Data sent, check console.')
		router.push(
			`/thank-you?data=${encodeURIComponent(JSON.stringify(payload))}`
		)
	}

	return (
		<section>
			<div className='__container'>
				{/* body */}
				<FormProvider {...methods}>
					<form
						id='bookingForm'
						onSubmit={methods.handleSubmit(onSubmit)}
						className='flex justify-between gap-x-[40px] max-lg:flex-col'
					>
						{/* column-left */}
						<div className='flex-[0_1_849px] pt-[24px] pb-[88px] max-lg:pb-0 max-md:pt-[16px]'>
							<Choice product={product} />
							<RentalLocation
								isOpen={openBlocks.rentalLocation}
								toggle={() => toggleBlock('rentalLocation')}
							/>
							<Policies
								isOpen={openBlocks.policies}
								toggle={() => toggleBlock('policies')}
							/>
							<Extras
								selectedExtras={selectedExtras}
								setSelectedExtras={setSelectedExtras}
								isOpen={openBlocks.extras}
								toggle={() => toggleBlock('extras')}
							/>
							<Details
								isOpen={openBlocks.details}
								toggle={() => toggleBlock('details')}
							/>
							{/* button-form */}
							<div className='max-lg:hidden'>
								{/* info */}
								<div className='text-sm text-[#1a1a1a] max-w-[670px] max-md:hidden mb-[24px]'>
									By clicking Book Now, you are confirming that you have read,
									understood, and accepted our{' '}
									<a className='text-[#0a58ca] underline' href='#'>
										Service Terms
									</a>{' '}
									and{' '}
									<a className='text-[#0a58ca] underline' href='#'>
										Varna Rental Terms and Conditions.
									</a>
								</div>
								{/* button */}
								<div className='flex justify-end max-md:hidden'>
									<Button
										formName='bookingForm'
										type='submit'
										variant='secondary'
										className='flex justify-center py-[16px] px-[148px] rounded-md'
									>
										<span className='mr-[10px]'>Book Now</span>
										<ArrowRight className='w-[24px]' />
									</Button>
								</div>
							</div>
						</div>
						{/* column-right */}
						<div className='sticky top-[-50px] flex-[0_1_388px] h-full py-[50px] max-lg:py-[24px] max-md:flex-[0_1_auto]'>
							<Information
								isOpen={openBlocks.information}
								toggle={() => toggleBlock('information')}
							/>
							<Price
								product={product}
								selectedExtras={selectedExtras}
								isOpen={openBlocks.price}
								toggle={() => toggleBlock('price')}
							/>
							<Help />
						</div>
					</form>
					{/* button-form-mobile */}
					<div className='lg:hidden pb-[48px]'>
						{/* info */}
						<div className='text-sm text-[#1a1a1a] max-w-[670px] mb-[24px] lg:hidden'>
							By clicking Book Now, you are confirming that you have read,
							understood, and accepted our{' '}
							<a className='text-[#0a58ca] underline' href='#'>
								Service Terms
							</a>{' '}
							and{' '}
							<a className='text-[#0a58ca] underline' href='#'>
								Varna Rental Terms and Conditions.
							</a>
						</div>
						{/* button */}
						<div className='flex justify-end'>
							<Button
								formName='bookingForm'
								type='submit'
								variant='secondary'
								className='flex justify-center py-[16px] px-[148px] rounded-md max-md:w-full'
							>
								<span className='mr-[10px]'>Book Now</span>
								<ArrowRight className='w-[24px]' />
							</Button>
						</div>
					</div>
				</FormProvider>
			</div>
		</section>
	)
}

export default BookingPageClient
