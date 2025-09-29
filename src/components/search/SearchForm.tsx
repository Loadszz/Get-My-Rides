'use client'
import IconDate from '@/assets/icons/date.svg'
import IconSearch from '@/assets/icons/search.svg'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { locationProps } from '@/data/locations.types'
import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const onOk = (value: DatePickerProps['value']) => {
	console.log('onOk: ', value)
}
export const SearchForm = () => {
	const router = useRouter()

	const [locationFrom, setlocationFrom] = useState('Varna, Bulgaria')
	const [locationTo, setlocationTo] = useState('Varna, Bulgaria')
	const [date, setDate] = useState('22')
	const [time, setTime] = useState('23')

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()

		const params = new URLSearchParams({
			locationFrom,
			locationTo,
			date,
			time,
		})

		router.push(`/search?${params.toString()}`)
	}
	return (
		<form
			id='my-form'
			onSubmit={handleSearch}
			className='flex items-center gap-x-[24px] p-[24px] bg-white rounded-2xl mb-[40px] max-lg:flex-col max-md:mb-[16px] max-sm:p-[16px]'
		>
			<div className='flex items-center gap-[24px] w-full max-2xl:flex-wrap max-sm:gap-y-[12px]'>
				{/* location-from */}
				<div className='flex-[0_1_255px] max-2xl:flex-[1_0_48%]'>
					<label className='inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base'>
						Pick-up location
					</label>
					<Select
						options={locationProps}
						value={locationFrom}
						onChange={setlocationFrom}
					/>
				</div>
				{/* date-from */}
				<div className='flex-[0_1_255px] max-2xl:flex-[1_0_48%]'>
					<label className='inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base'>
						Pick-up location
					</label>
					<div className='relative border border-[#3a83ed] rounded-xl shadow-[0_0_3px_rgba(10,88,202,0.6)]'>
						<DatePicker
							showTime={{ format: 'HH:mm a' }}
							placeholder='19.10.2025 - 11:30 am'
							format='DD.MM.YYYY - HH:mm a'
							onChange={(value, dateString) => {
								console.log('Selected Time: ', value)
								console.log('Formatted Selected Time: ', dateString)
							}}
							onOk={onOk}
							suffixIcon={
								<IconDate className='absolute w-[24px] h-[24px]top-[50%] translate-y-[-50%] left-[-34px]' />
							}
							className='!py-[16px] !pl-[48px] !w-full !h-full !focus:outline-none !rounded-xl cursor-pointer antd-style'
						/>
					</div>
				</div>
				{/* location-to */}
				<div className='flex-[0_1_255px] max-2xl:flex-[1_0_48%]'>
					<label className='inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base'>
						Drop-off location
					</label>
					<Select
						options={locationProps}
						value={locationTo}
						onChange={setlocationTo}
					/>
				</div>
				{/* date-to */}
				<div className='flex-[0_1_255px] max-2xl:flex-[1_0_48%]'>
					<label className='inline-block font-dmSans font-bold text-xl text-[#1a1a1a] mb-[10px] max-md:text-base'>
						Pick-up location
					</label>
					<div className='relative border border-[#3a83ed] rounded-xl shadow-[0_0_3px_rgba(10,88,202,0.6)]'>
						<DatePicker
							showTime={{ format: 'HH:mm a' }}
							placeholder='19.10.2025 - 11:30 am'
							format='DD.MM.YYYY - HH:mm a'
							onChange={(value, dateString) => {
								console.log('Selected Time: ', value)
								console.log('Formatted Selected Time: ', dateString)
							}}
							onOk={onOk}
							suffixIcon={
								<IconDate className='absolute w-[24px] h-[24px]top-[50%] translate-y-[-50%] left-[-34px]' />
							}
							className='!py-[16px] !pl-[48px] !w-full !h-full !focus:outline-none !rounded-xl cursor-pointer antd-style'
						/>
					</div>
				</div>
			</div>
			<div className='flex pt-[38px] max-sm:w-full max-sm:pt-[16px]'>
				<Button
					type='submit'
					variant='secondary'
					formName='my-form'
					className='flex justify-center items-center rounded-xl py-[16px] w-[214px] max-sm:w-full max-sm:justify-center'
				>
					<span className='mr-[10px]'>Search</span>
					<IconSearch className='w-[24px]' />
				</Button>
			</div>
		</form>
	)
}
