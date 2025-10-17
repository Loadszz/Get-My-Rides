'use client'
import IconDate from '@/assets/icons/date.svg'
import IconSearch from '@/assets/icons/search.svg'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { locationProps } from '@/data/locations.types'
import { Product } from '@/data/products.type'
import { DatePicker } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type FormProps = {
	className?: string
}
export const SearchForm = ({ className = '' }: FormProps) => {
	const router = useRouter()

	const [locationFrom, setlocationFrom] = useState('Varna, Bulgaria')
	const [locationTo, setlocationTo] = useState('Varna, Bulgaria')
	const [fromDate, setFromDate] = useState<Dayjs | null>(null)
	const [toDate, setToDate] = useState<Dayjs | null>(null)
	const [availableProducts, setAvailableProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(false)
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const handleResize = () => setIsDesktop(window.innerWidth < 1024)
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	// устанавливаем дефолтные даты: +7 и +12 дней от текущего
	useEffect(() => {
		const start = dayjs().add(7, 'day').hour(7).minute(0)
		const end = start.add(5, 'day')
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
				from: fromDate?.toISOString() || '',
				to: toDate?.toISOString() || '',
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

	const range = (start: number, end: number) => {
		const result = []
		for (let i = start; i < end; i++) {
			result.push(i)
		}
		return result
	}

	// блокируем только прошлые дни
	const disabledDate = (current: dayjs.Dayjs) => {
		return current && current < dayjs().startOf('day')
	}

	// блокируем время до текущего (если сегодня)
	const disabledTime = (current: dayjs.Dayjs | null) => {
		if (!current) return {}

		const now = dayjs()
		if (current.isSame(now, 'day')) {
			return {
				disabledHours: () => range(0, now.hour()),
				disabledMinutes: (selectedHour: number) =>
					selectedHour === now.hour()
						? range(0, Math.ceil(now.minute() / 15) * 15)
						: [],
				disabledSeconds: () => [],
			}
		}

		return {
			disabledHours: () => [],
			disabledMinutes: () => [],
			disabledSeconds: () => [],
		}
	}

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
					<div className='relative border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C]'>
						<DatePicker
							showTime={{ minuteStep: 15, hideDisabledOptions: true }}
							format='DD.MM.YYYY - HH:mm'
							value={fromDate}
							onChange={value => setFromDate(value)}
							disabledDate={disabledDate}
							disabledTime={disabledTime}
							getPopupContainer={trigger => trigger.parentElement!}
							styles={{
								popup: {
									root: {
										maxWidth: '95vw',
									},
								},
							}}
							needConfirm={isDesktop}
							suffixIcon={
								<IconDate className='absolute w-[24px] h-[24px] top-[50%] translate-y-[-50%] left-[-34px]' />
							}
							className='!py-[16px] !pl-[48px] !w-full !h-full !focus:outline-none !rounded-xl cursor-pointer antd-style my-custom-datepicker'
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
					<div className='relative border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C]'>
						<DatePicker
							showTime={{ minuteStep: 15, hideDisabledOptions: true }}
							format='DD.MM.YYYY - HH:mm'
							value={toDate}
							onChange={value => setToDate(value)}
							disabledDate={disabledDate}
							disabledTime={disabledTime}
							getPopupContainer={trigger => trigger.parentElement!}
							styles={{
								popup: {
									root: {
										maxWidth: '95vw',
									},
								},
							}}
							needConfirm={isDesktop}
							suffixIcon={
								<IconDate className='absolute w-[24px] h-[24px] top-[50%] translate-y-[-50%] left-[-34px]' />
							}
							className='!py-[16px] !pl-[48px] !w-full !h-full !focus:outline-none !rounded-xl cursor-pointer antd-style my-custom-datepicker'
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
