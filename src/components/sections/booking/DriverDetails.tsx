'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import IconCheck from '@/assets/icons/check.svg'
import { Button } from '@/components/ui/Button'
import { driverDetailsProp, FormData } from '@/data/booking/driverDetails.type'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const DriverDetails = () => {
	const [form, setForm] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	})

	const handleChange = (field: keyof FormData, value: string) => {
		setForm(prev => ({ ...prev, [field]: value }))
	}
	const [phone, setPhone] = useState('')
	const [choice, setChoice] = useState<string>('no')
	return (
		<section className='pt-[40px] pb-[88px] max-md:pt-[24px] max-md:pb-0'>
			{/* body */}
			<div className='mb-[24px] max-md:mb-[16px]'>
				{/* title */}
				<div className='title-booking mb-[24px] max-md:mb-[16px]'>
					Driver Details
				</div>
				{/* description */}
				<div className='font-dmSans text-base text-[#1a1a1a] max-md:text-sm'>
					Main driver`s details as they appear on the driving license
				</div>
			</div>
			{/* form */}
			<form
				action='#'
				className='flex flex-wrap justify-between gap-y-[20px] mb-[28px] max-md:flex-col max-md:gap-y-[10px]'
			>
				{driverDetailsProp.map(item => (
					<div key={item.id} className='flex flex-col flex-[0_1_47%]'>
						<label
							htmlFor={item.name}
							className='font-dmSans font-bold text-base text-[#1a1a1a] mb-[11px]'
						>
							{item.label}
						</label>
						<input
							id={item.name}
							type={item.type}
							placeholder={item.placeholder}
							value={form[item.name]}
							onChange={e => handleChange(item.name, e.target.value)}
							className='font-dmSans text-base text-[#757575] border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] py-[16px] pl-[16px] outline-0 placeholder:font-dmSans placeholder:text-base placeholder:text-[#757575]'
							required
						/>
					</div>
				))}
				<div className='flex flex-col flex-[0_1_47%]'>
					<label
						htmlFor='phone'
						className='font-dmSans font-bold text-base text-[#1a1a1a] mb-[11px]'
					>
						Phone Number
					</label>
					<PhoneInput
						inputProps={{
							id: 'phone',
							name: 'phone',
						}}
						country={'us'}
						value={phone}
						onChange={setPhone}
						disableDropdown={false}
						countryCodeEditable={false}
						placeholder='+380 99 123 45 67'
					/>
				</div>
				{/* radio */}
				<div className='flex flex-col flex-[0_1_47%]'>
					<label className='font-dmSans font-bold text-base text-[#1a1a1a] mb-[11px]'>
						Business Booking?
					</label>
					<div className='flex gap-x-[16px]'>
						<div className='flex items-center gap-x-[8px]'>
							<input
								type='radio'
								name='choice'
								id='yes'
								value='yes'
								checked={choice === 'yes'}
								onChange={e => setChoice(e.target.value)}
								className="appearance-none w-[24px] h-[24px] border border-gray-400 rounded-full checked:bg-white0 checked:border-blue-600 relative
                 checked:after:content-[''] checked:after:block checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-full checked:after:bg-blue-600 checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
							/>
							<label className='text-sm text-[#1a1a1a]' htmlFor='yes'>
								Yes
							</label>
						</div>
						<div className='flex items-center gap-x-[8px]'>
							<input
								type='radio'
								name='choice'
								id='no'
								value='no'
								checked={choice === 'no'}
								onChange={e => setChoice(e.target.value)}
								className="appearance-none w-[24px] h-[24px] border border-gray-400 rounded-full checked:bg-white0 checked:border-blue-600 relative
                 checked:after:content-[''] checked:after:block checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-full checked:after:bg-blue-600 checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
							/>
							<label className='text-sm text-[#1a1a1a]' htmlFor='no'>
								No
							</label>
						</div>
					</div>
				</div>
			</form>
			{/* info */}
			<div className='mb-[24px] max-md:mb-0'>
				<div className='p-[24px] bg-[#e2ffe8] mb-[24px] max-md:p-[16px] max-md:mx-[-16px] max-md:mb-0'>
					<div className='flex items-center gap-x-[12px]'>
						<div className='flex justify-center w-[20px] h-[20px] bg-[#00cf3e] rounded-2xl'>
							<IconCheck className='w-[8px]' />
						</div>
						<div className='font-dmSans font-bold text-base text-[#1a1a1a]'>
							What if my plans change?
						</div>
					</div>
					<div className='text-sm text-[#1a1a1a] pl-[34px]'>
						You can cancel your booking free of charge and get a full refund if
						you cancel up to 48 hours before pick-up.
					</div>
				</div>
				<div className='text-sm text-[#1a1a1a] max-w-[670px] max-md:hidden'>
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
			</div>
			{/* button */}
			<div className='flex justify-end max-md:hidden'>
				<Button
					type='submit'
					variant='secondary'
					className='flex justify-center rounded-xl py-[16px] w-[404px] rounded-[6px]'
				>
					<span className='mr-[10px]'>Book Now</span>
					<ArrowRight className='w-[24px]' />
				</Button>
			</div>
		</section>
	)
}

export default DriverDetails
