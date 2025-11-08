'use client'
import IconArrowLeft from '@/assets/icons/arrow-slider-left.svg'
import IconArrowRight from '@/assets/icons/arrow-slider-right.svg'
import IconDate from '@/assets/icons/date.svg'
import IconSearch from '@/assets/icons/search.svg'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { locationProps } from '@/data/locations.types'
import { Product } from '@/data/products.type'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type FormProps = {
	className?: string
	textClassName?: string
	variant?: 'primary' | 'secondary'
}
type CustomButtonProps = {
	value?: string
	onClick?: () => void
}
export const SearchForm = ({
	className = '',
	variant = 'primary',
}: FormProps) => {
	const router = useRouter()

	const [locationFrom, setlocationFrom] = useState('Varna, Bulgaria')
	const [locationTo, setlocationTo] = useState('Varna, Bulgaria')
	const [fromDate, setFromDate] = useState<Date | null>(null)
	const [toDate, setToDate] = useState<Date | null>(null)
	const [availableProducts, setAvailableProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const start = new Date()
		start.setDate(start.getDate() + 7)
		start.setHours(10, 0, 0, 0)
		const end = new Date(start)
		end.setDate(start.getDate() + 5)
		setFromDate(start)
		setToDate(end)
	}, [])

	const handleSearch = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!fromDate || !toDate) {
			alert('Select date and time')
			return
		}

		setLoading(true)

		try {
			const params = new URLSearchParams({
				city: locationFrom.split(',')[0],
				from: fromDate.toISOString(),
				to: toDate.toISOString(),
			})

			const res = await fetch(`/api/products?${params.toString()}`)
			const data = await res.json()

			if (data.success) {
				setAvailableProducts(data.products)
				router.push(`/search?${params.toString()}`)
			} else {
				alert('Error receiving cars')
			}
		} catch (err) {
			console.error(err)
			alert('Network error')
		} finally {
			setLoading(false)
		}
	}
	const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
		({ value, onClick }, ref) => (
			<button
				className={`${
					variant === 'primary' ? 'text-[#303030]' : 'text-white'
				} font-dmSans text-base text-left w-full py-[16px] pl-[48px] outline-0 cursor-pointer`}
				type='button'
				onClick={onClick}
				ref={ref}
			>
				{value || 'Select date'}
			</button>
		)
	)

	CustomButton.displayName = 'CustomButton'
	return (
		<form
			id='my-form'
			onSubmit={handleSearch}
			className={`${className} flex justify-between items-center gap-x-[19px] p-[24px] rounded-2xl max-lg:flex-col max-sm:p-[16px]`}
		>
			<div className='flex items-center gap-[22px] w-full max-2xl:flex-wrap max-sm:gap-y-[12px]'>
				{/* location-from */}
				<div className='flex-[0_1_242px] max-2xl:flex-[1_0_48%] max-md:flex-[1_0_100%]'>
					<label
						className={`${
							variant === 'primary' ? 'text-[#1a1a1a]' : 'text-white'
						} inline-block font-dmSans font-bold text-xl mb-[10px] max-md:text-base`}
					>
						Pick-up location
					</label>
					<div
						className={`${
							variant === 'primary'
								? 'ring-[#0A58CA1C]'
								: 'ring-[#ffffff1c] bg-[rgba(255,255,255,0.16)]'
						} border-[0.5px] border-[#3a83ed] ring-[3px] rounded-xl transition-shadow duration-300 hover:border-[#0a58ca] hover:shadow-md hover:shadow-[#0a58ca]/50`}
					>
						<Select
							options={locationProps}
							value={locationFrom}
							onChange={setlocationFrom}
							variant={variant}
						/>
					</div>
				</div>

				{/* date-from */}
				<div className='flex-[0_1_242px] max-2xl:flex-[1_0_48%] max-md:flex-[1_0_100%]'>
					<label
						className={`${
							variant === 'primary' ? 'text-[#1a1a1a]' : 'text-white'
						} inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base`}
					>
						Date from
					</label>
					<div
						className={`${
							variant === 'primary'
								? 'ring-[#0A58CA1C]'
								: 'ring-[#ffffff1c] bg-[rgba(255,255,255,0.16)]'
						} border-[0.5px] border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] cursor-pointer transition-shadow duration-300 hover:border-[#0a58ca] hover:shadow-md hover:shadow-[#0a58ca]/50`}
					>
						<DatePicker
							customInput={<CustomButton />}
							selected={fromDate}
							onChange={date => setFromDate(date)}
							showTimeSelect
							timeFormat='HH:mm'
							timeIntervals={15}
							dateFormat='dd.MM.yyyy - HH:mm'
							calendarStartDay={1}
							minDate={new Date()}
							minTime={
								fromDate &&
								fromDate.toDateString() === new Date().toDateString()
									? new Date()
									: new Date(new Date().setHours(0, 0, 0, 0))
							}
							maxTime={new Date(new Date().setHours(23, 45, 0, 0))}
							withPortal
							showIcon
							fixedHeight
							renderCustomHeader={({
								date,
								decreaseMonth,
								increaseMonth,
								prevMonthButtonDisabled,
								nextMonthButtonDisabled,
							}) => (
								<div className='relative flex items-center justify-center'>
									<button
										onClick={decreaseMonth}
										disabled={prevMonthButtonDisabled}
										className='absolute left-[10px] w-[30px] text-[#0a58ca] disabled:text-gray-500'
									>
										<IconArrowLeft />
									</button>
									<span className='font-dmSans font-bold text-xl text-[#0a58ca]'>
										{date.toLocaleString('en', { month: 'long' })}{' '}
										{date.getFullYear()}
									</span>
									<button
										onClick={increaseMonth}
										disabled={nextMonthButtonDisabled}
										className='absolute right-[10px] w-[30px] text-[#0a58ca] disabled:text-gray-500'
									>
										<IconArrowRight />
									</button>
								</div>
							)}
							icon={
								<IconDate
									className={`${
										variant === 'primary' ? 'text-[#0a58ca]' : 'text-white'
									} !w-[24px] !h-[24px] !p-0 !top-[50%] !translate-y-[-50%] !left-[16px]`}
								/>
							}
						/>
					</div>
				</div>
				{/* location-to */}
				<div className='flex-[0_1_242px] max-2xl:flex-[1_0_48%] max-md:flex-[1_0_100%]'>
					<label
						className={`${
							variant === 'primary' ? 'text-[#1a1a1a]' : 'text-white'
						} inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base`}
					>
						Drop-off location
					</label>
					<div
						className={`${
							variant === 'primary'
								? 'ring-[#0A58CA1C]'
								: 'ring-[#ffffff1c] bg-[rgba(255,255,255,0.16)]'
						} border-[0.5px] border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] transition-shadow duration-300 hover:border-[#0a58ca] hover:shadow-md hover:shadow-[#0a58ca]/50`}
					>
						<Select
							options={locationProps}
							value={locationTo}
							onChange={setlocationTo}
							variant={variant}
						/>
					</div>
				</div>

				{/* date-to */}
				<div className='flex-[0_1_242px] max-2xl:flex-[1_0_48%] max-md:flex-[1_0_100%]'>
					<label
						className={`${
							variant === 'primary' ? 'text-[#1a1a1a]' : 'text-white'
						} inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base`}
					>
						Date to
					</label>
					<div
						className={`${
							variant === 'primary'
								? 'ring-[#0A58CA1C]'
								: 'ring-[#ffffff1c] bg-[rgba(255,255,255,0.16)]'
						} border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] cursor-pointer transition-shadow duration-300 hover:border-[#0a58ca] hover:shadow-md hover:shadow-[#0a58ca]/50`}
					>
						<DatePicker
							customInput={<CustomButton />}
							selected={toDate}
							onChange={date => setToDate(date)}
							showTimeSelect
							timeFormat='HH:mm'
							timeIntervals={15}
							dateFormat='dd.MM.yyyy - HH:mm'
							calendarStartDay={1}
							minDate={new Date()}
							minTime={
								fromDate &&
								fromDate.toDateString() === new Date().toDateString()
									? new Date()
									: new Date(new Date().setHours(0, 0, 0, 0))
							}
							maxTime={new Date(new Date().setHours(23, 45, 0, 0))}
							withPortal
							showIcon
							fixedHeight
							renderCustomHeader={({
								date,
								decreaseMonth,
								increaseMonth,
								prevMonthButtonDisabled,
								nextMonthButtonDisabled,
							}) => (
								<div className='relative flex items-center justify-center'>
									<button
										onClick={decreaseMonth}
										disabled={prevMonthButtonDisabled}
										className='absolute left-[10px] w-[30px] text-[#0a58ca] disabled:text-gray-500'
									>
										<IconArrowLeft />
									</button>
									<span className='font-dmSans font-bold text-xl text-[#0a58ca]'>
										{date.toLocaleString('en', { month: 'long' })}{' '}
										{date.getFullYear()}
									</span>
									<button
										onClick={increaseMonth}
										disabled={nextMonthButtonDisabled}
										className='absolute right-[10px] w-[30px] text-[#0a58ca] disabled:text-gray-500'
									>
										<IconArrowRight />
									</button>
								</div>
							)}
							icon={
								<IconDate
									className={`${
										variant === 'primary' ? 'text-[#0a58ca]' : 'text-white'
									} !w-[24px] !h-[24px] !p-0 !top-[50%] !translate-y-[-50%] !left-[16px]`}
								/>
							}
						/>
					</div>
				</div>
			</div>

			<div className='flex pt-[38px] max-sm:w-full max-sm:pt-[16px]'>
				<Button
					type='submit'
					variant={`${variant === 'primary' ? 'secondary' : 'white'}`}
					formName='my-form'
					className='flex justify-center items-center rounded-xl py-[16px] w-[264px] max-sm:w-full max-sm:justify-center'
				>
					<span
						className={`${
							variant === 'primary' ? 'text-white' : 'text-[#1a1a1a]'
						} mr-[10px]`}
					>
						Search
					</span>
					<IconSearch
						className={`${
							variant === 'primary' ? 'text-white' : 'text-[#1a1a1a]'
						} w-[24px]`}
					/>
				</Button>
			</div>
		</form>
	)
}
