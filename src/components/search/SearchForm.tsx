'use client'
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
}
type CustomButtonProps = {
	value?: string
	onClick?: () => void
}
export const SearchForm = ({ className = '' }: FormProps) => {
	const router = useRouter()

	const [locationFrom, setlocationFrom] = useState('Varna, Bulgaria')
	const [locationTo, setlocationTo] = useState('Varna, Bulgaria')
	const [fromDate, setFromDate] = useState<Date | null>(null)
	const [toDate, setToDate] = useState<Date | null>(null)
	const [availableProducts, setAvailableProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(false)

	// дефолтные даты +7 и +12 дней
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
			alert('Выберите дату и время')
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
				alert('Ошибка при получении машин')
			}
		} catch (err) {
			console.error(err)
			alert('Ошибка сети')
		} finally {
			setLoading(false)
		}
	}
	const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
		({ value, onClick }, ref) => (
			<button
				className='font-dmSans text-base text-[#303030] w-full py-[16px] outline-0 cursor-pointer'
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
			className={`${className} flex items-center gap-x-[24px] p-[24px] bg-white rounded-2xl mb-[40px] max-lg:flex-col max-md:mb-[16px] max-sm:p-[16px]`}
		>
			<div className='flex items-center gap-[24px] w-full max-2xl:flex-wrap max-sm:gap-y-[12px]'>
				{/* location-from */}
				<div className='flex-[0_0_242px] max-2xl:flex-[1_0_48%] max-md:flex-[1_0_100%]'>
					<label className='inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base'>
						Pick-up location
					</label>
					<div className='border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C]'>
						<Select
							options={locationProps}
							value={locationFrom}
							onChange={setlocationFrom}
						/>
					</div>
				</div>

				{/* date-from */}
				<div className='flex-[0_0_242px] max-2xl:flex-[1_0_48%] max-md:flex-[1_0_100%]'>
					<label className='inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base'>
						Date from
					</label>
					<div className='border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] cursor-pointer transition-shadow duration-300 hover:border-[#0a58ca] hover:shadow-md hover:shadow-[#0a58ca]/50'>
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
									? new Date() // текущая дата и время
									: new Date(new Date().setHours(0, 0, 0, 0)) // 00:00 текущего дня
							}
							maxTime={new Date(new Date().setHours(23, 45, 0, 0))} // 23:45
							withPortal
							showIcon
							icon={
								<IconDate className='!w-[24px] !h-[24px] !p-0 !top-[50%] !translate-y-[-50%] !left-[16px]' />
							}
						/>
					</div>
				</div>
				{/* location-to */}
				<div className='flex-[0_0_242px] max-2xl:flex-[1_0_48%] max-md:flex-[1_0_100%]'>
					<label className='inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base'>
						Drop-off location
					</label>
					<div className='border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C]'>
						<Select
							options={locationProps}
							value={locationTo}
							onChange={setlocationTo}
						/>
					</div>
				</div>

				{/* date-to */}
				<div className='flex-[0_0_242px] max-2xl:flex-[1_0_48%] max-md:flex-[1_0_100%]'>
					<label className='inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base'>
						Date to
					</label>
					<div className='border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] cursor-pointer transition-shadow duration-300 hover:border-[#0a58ca] hover:shadow-md hover:shadow-[#0a58ca]/50'>
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
									? new Date() // текущая дата и время
									: new Date(new Date().setHours(0, 0, 0, 0)) // 00:00 текущего дня
							}
							maxTime={new Date(new Date().setHours(23, 45, 0, 0))} // 23:45
							withPortal
							showIcon
							icon={
								<IconDate className='!w-[24px] !h-[24px] !p-0 !top-[50%] !translate-y-[-50%] !left-[16px]' />
							}
						/>
					</div>
				</div>
			</div>

			<div className='flex pt-[38px] max-sm:w-full max-sm:pt-[16px]'>
				<Button
					type='submit'
					variant='secondary'
					formName='my-form'
					className='flex justify-center items-center rounded-xl py-[16px] w-[264px] max-sm:w-full max-sm:justify-center'
				>
					<span className='mr-[10px]'>Search</span>
					<IconSearch className='w-[24px]' />
				</Button>
			</div>
		</form>
	)
}
