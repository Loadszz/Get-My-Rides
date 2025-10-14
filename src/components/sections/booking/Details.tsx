'use client'
import IconCheck from '@/assets/icons/check.svg'
import IconArrow from '@/assets/icons/filter/arrow-down-filter.svg'
import {
	companyDetailsProps,
	CompanyFormData,
	driverDetailsProps,
	DriverFormData,
} from '@/data/booking/details.type'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
type Props = {
	isOpen: boolean
	toggle: () => void
}
type BookingFormData = DriverFormData & CompanyFormData
const Details = ({ isOpen, toggle }: Props) => {
	const [form, setForm] = useState<BookingFormData>({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		companyName: '',
		address: '',
		addressSecond: '',
		postalCode: '',
		city: '',
		country: '',
		vatNumber: '',
	})

	const handleChange = (field: keyof BookingFormData, value: string) => {
		setForm(prev => ({ ...prev, [field]: value }))
	}
	const [phone, setPhone] = useState('')
	const [choice, setChoice] = useState<string>('no')
	return (
		<section className='pt-[40px] pb-[24px] max-lg:pb-0 max-md:pt-[24px]'>
			{/* form */}
			<form
				action='#'
				className='flex flex-wrap justify-between mb-[28px] max-md:mb-[24px] max-md:flex-col'
			>
				{/* header */}
				<div
					className={`${
						isOpen ? 'max-md:mb-[16px]' : 'max-md:mb-0'
					} flex justify-between items-center mb-[24px]`}
				>
					{/* title */}
					<div className='title-booking'>Driver Details</div>
					{/* arrow */}
					<IconArrow
						onClick={toggle}
						className={`md:hidden w-[24px] cursor-pointer transition-transform duration-300 ${
							isOpen ? 'rotate-180' : 'rotate-0'
						}`}
					/>
				</div>
				{/* body */}
				<div className={`${isOpen ? 'block' : 'hidden'}`}>
					{/* description */}
					<div className='font-dmSans text-base text-[#1a1a1a] mb-[24px] max-md:mb-[16px] max-md:text-sm'>
						Main driver`s details as they appear on the driving license
					</div>
					<div
						className={`${
							isOpen ? 'flex' : 'hidden'
						} flex-wrap justify-between gap-y-[20px] pb-[40px] border-b border-[#e5e5e5] max-md:pb-[24px] max-md:flex-col max-md:gap-y-[10px]`}
					>
						{driverDetailsProps.map(item => (
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
									required={item.required}
								/>
							</div>
						))}
						<div className='flex flex-col flex-[0_1_47%]'>
							<label
								htmlFor='phone'
								className='font-dmSans font-bold text-base text-[#1a1a1a] mb-[11px]'
							>
								Phone Number*
							</label>
							<PhoneInput
								inputProps={{
									id: 'phone',
									name: 'phone',
									required: true,
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
										className="appearance-none w-[24px] h-[24px] cursor-pointer border border-gray-400 rounded-full checked:bg-white0 checked:border-blue-600 relative
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
										className="appearance-none w-[24px] h-[24px] cursor-pointer border border-gray-400 rounded-full checked:bg-white0 checked:border-blue-600 relative
                 checked:after:content-[''] checked:after:block checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-full checked:after:bg-blue-600 checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
									/>
									<label className='text-sm text-[#1a1a1a]' htmlFor='no'>
										No
									</label>
								</div>
							</div>
						</div>
					</div>
					{choice === 'yes' && (
						<>
							<div className='mb-[24px] mt-[40px] max-md:mt-[24px] max-md:mb-[16px]'>
								{/* title */}
								<div className='title-booking mb-[24px] max-md:mb-[16px]'>
									Company Details
								</div>
								{/* description */}
								<div className='font-dmSans text-base text-[#1a1a1a] max-md:text-sm'>
									Please provide company details to receive an invoice
								</div>
							</div>
							<div className='flex flex-wrap justify-between gap-y-[20px] max-md:flex-col max-md:gap-y-[10px]'>
								{companyDetailsProps.map(item => (
									<div
										key={item.id}
										className='flex flex-col first:flex-[0_1_100%] flex-[0_1_47%]'
									>
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
											className={`${
												item.id === 1 ? 'w-[47%] max-md:w-full' : 'w-full'
											} font-dmSans text-base text-[#757575] border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] py-[16px] pl-[16px] outline-0 placeholder:font-dmSans placeholder:text-base placeholder:text-[#757575]`}
											required={item.required}
										/>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</form>
			{/* info */}
			<div className='p-[24px] bg-[#e2ffe8] max-md:p-[16px] max-md:mx-[-16px]'>
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
		</section>
	)
}

export default Details
