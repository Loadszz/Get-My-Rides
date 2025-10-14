'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import Map from '@/components/map/Map'
import Choice from '@/components/sections/booking/Choice'
import Details from '@/components/sections/booking/Details'
import Extras from '@/components/sections/booking/Extras'
import Help from '@/components/sections/booking/Help'
import Information from '@/components/sections/booking/Information'
import Policies from '@/components/sections/booking/Policies'
import Price from '@/components/sections/booking/Price'
import RentalLocation from '@/components/sections/booking/RentalLocation'
import { Button } from '@/components/ui/Button'
import { IServicesProps, servicesProps } from '@/data/booking/extras.type'
import { Product } from '@/data/products.type'
import { useRef, useState } from 'react'

const BookingPageClient = ({ product }: { product: Product }) => {
	const formRef = useRef<HTMLFormElement>(null)

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
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault() // чтобы страница не перезагрузилась

		if (!formRef.current) return
		const formData = new FormData(formRef.current)
		const data: Record<string, string> = {}
		formData.forEach((value, key) => {
			data[key] = value.toString()
		})
		console.log('📤 Данные формы:', data)
		alert('Данные "отправлены", проверь консоль')
	}

	return (
		<div className='wrapper'>
			<div className='__container'>
				{/* body */}
				<div className='flex justify-between gap-x-[40px] max-lg:flex-col'>
					{/* column-left */}
					<div className='flex-[0_1_849px] pt-[24px] pb-[88px] max-lg:pb-0 max-md:pt-[16px]'>
						<Choice product={product} />
						<RentalLocation
							isOpen={openBlocks.rentalLocation}
							toggle={() => toggleBlock('rentalLocation')}
						/>
						<Map />
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
							isOpen={openBlocks.rentalLocation}
							toggle={() => toggleBlock('rentalLocation')}
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
									className='flex justify-center rounded-xl py-[16px] w-[404px] rounded-[6px]'
								>
									<span className='mr-[10px]'>Book Now</span>
									<ArrowRight className='w-[24px]' />
								</Button>
							</div>
						</div>
					</div>
					{/* column-right */}
					<div className='sticky top-0 flex-[0_1_388px] h-full py-[50px] max-lg:py-[24px] max-md:flex-[0_1_auto]'>
						<form id='bookingForm' ref={formRef} onSubmit={handleSubmit}>
							<Information
								isOpen={openBlocks.information}
								toggle={() => toggleBlock('information')}
							/>
						</form>
						<Price
							product={product}
							selectedExtras={selectedExtras}
							isOpen={openBlocks.price}
							toggle={() => toggleBlock('price')}
						/>
						<Help />
					</div>
				</div>
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
							className='flex justify-center rounded-xl py-[16px] w-[404px] rounded-[6px] max-md:w-full'
						>
							<span className='mr-[10px]'>Book Now</span>
							<ArrowRight className='w-[24px]' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookingPageClient
