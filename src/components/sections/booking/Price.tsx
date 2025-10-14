'use client'
import IconArrow from '@/assets/icons/filter/arrow-down-filter.svg'
import { IServicesProps } from '@/data/booking/extras.type'
import { Product } from '@/data/products.type'
import { FormEvent, useMemo } from 'react'

type SelectedExtra = IServicesProps & { quantity: number }

interface PriceProps {
	product: Product
	selectedExtras?: SelectedExtra[]
	isOpen: boolean
	toggle: () => void
}

const Price = ({
	product,
	selectedExtras = [],
	isOpen,
	toggle,
}: PriceProps) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const data = Object.fromEntries(formData.entries())
		console.log('Booking data:', data)
	}

	// --- Расчёты ---
	const basePrice = product.price
	const insurancePrice = 80 // фиксировано
	const extrasTotal = selectedExtras.reduce(
		(sum, extra) => sum + extra.price * extra.quantity,
		0
	)
	const total = basePrice + insurancePrice + extrasTotal

	const payAtPickup = (total * 0.87).toFixed(2)
	const payNow = (total * 0.13).toFixed(2)

	// --- Отфильтруем extras, у которых выбрали 1+ ---
	const activeExtras = useMemo(
		() => selectedExtras.filter(extra => extra.quantity > 0),
		[selectedExtras]
	)

	return (
		<section className='max-lg:border-b max-lg:border-[#e5e5e5] max-lg:pb-[15px] mb-[24px] max-md:pt-[24px]'>
			<form
				onSubmit={handleSubmit}
				className='p-[24px] border border-[#e4e4e4] rounded-2xl shadow-[0_4px_15px_0_rgba(8,15,52,0.08)] max-md:border-none max-md:shadow-none max-md:p-0'
			>
				<input type='hidden' name='productId' value={product.id} />
				<input type='hidden' name='productName' value={product.name} />
				<input type='hidden' name='days' value='8' />

				{/* header */}
				<div className='flex justify-between flex-wrap gap-[14px] mb-[24px]'>
					<div className='text-2xl font-bold text-[#1a1a1a] max-md:text-xl'>
						Price for 8 days
					</div>
					<div className='font-dmSans font-medium text-xs text-[#00ce3e] py-[8px] px-[12px] bg-[#e2ffe8] border border-[#e4e4e4] rounded-2xl'>
						Today’s Best Price
					</div>
					<IconArrow
						onClick={toggle}
						className={`md:hidden w-[24px] cursor-pointer transition-transform duration-300 ${
							isOpen ? 'rotate-180' : 'rotate-0'
						}`}
					/>
				</div>
				<div className={`${isOpen ? 'block' : 'hidden'}`}>
					{/* Основные пункты */}
					<div className='flex flex-col gap-y-[16px] border-b border-[#e5e5e5] pb-[15px]'>
						{/* Car rental */}
						<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
							<span>Car rental</span>
							<span>€{basePrice}</span>
						</div>

						{/* Full insurance */}
						<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
							<span>Full insurance</span>
							<span>€{insurancePrice}</span>
						</div>

						{/* Дополнительные Extras */}
						{activeExtras.length > 0 && (
							<>
								{activeExtras.map(extra => (
									<div
										key={extra.id}
										className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'
									>
										<span>
											{extra.title} {extra.quantity > 1 && `x${extra.quantity}`}
										</span>
										<span>€{extra.price * extra.quantity}</span>
									</div>
								))}
							</>
						)}
					</div>
					{/* Итого */}
					<div className='flex flex-col gap-y-[16px] mt-[15px]'>
						<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
							<span>Total</span>
							<span className='font-semibold'>€{total}</span>
						</div>
						<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
							<span>Pay at pick-up</span>
							<span>€{payAtPickup}</span>
						</div>
						<div className='flex justify-between items-center font-dmSans text-base text-[#1a1a1a]'>
							<span>Pay now</span>
							<span>€{payNow}</span>
						</div>
					</div>
				</div>
				{/* Terms
				<div className='text-sm text-[#1a1a1a] max-w-[670px] mb-[24px]'>
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

				<Button
					type='submit'
					variant='secondary'
					className='flex justify-center py-[16px] w-full rounded-[6px]'
				>
					<span className='mr-[10px]'>Book Now</span>
					<ArrowRight className='w-[24px]' />
				</Button> */}
			</form>
		</section>
	)
}

export default Price
