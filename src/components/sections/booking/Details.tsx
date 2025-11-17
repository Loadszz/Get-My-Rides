'use client'
import IconCheck from '@/assets/icons/check.svg'
import IconArrow from '@/assets/icons/common/arrow-down.svg'
import { BookingFormValues } from '@/components/sections/booking/BookingPageClient'
import {
	companyDetailsProps,
	driverDetailsProps,
} from '@/data/booking/details.type'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { Controller, useFormContext } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type Props = {
	isOpen: boolean
	toggle: () => void
}

const Details = ({ isOpen, toggle }: Props) => {
	const {
		register,
		control,
		watch,
		formState: { errors },
	} = useFormContext<BookingFormValues>()
	const choice = watch('choice')

	return (
		<section
			className={`${
				isOpen ? 'pb-0' : 'border-b border-[#e5e5e5] pb-[24px]'
			} pt-[40px] pb-[24px] max-lg:pb-0 max-md:pt-[24px]`}
		>
			{/* body */}
			<div className='flex flex-wrap justify-between max-md:flex-col'>
				{/* header */}
				<div className='flex justify-between items-center mb-[24px] max-md:mb-[16px]'>
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
				<div className={`${isOpen ? 'block' : 'hidden'} w-full space-y-[24px]`}>
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
									className='font-dmSans text-base text-[#757575] border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] py-[16px] pl-[16px] outline-0 placeholder:font-dmSans placeholder:text-base placeholder:text-[#757575]'
									id={item.name}
									type={item.type}
									placeholder={item.placeholder}
									{...register(item.name as keyof BookingFormValues, {
										required: `${item.label} is required`,
									})}
								/>
								{errors[item.name as keyof BookingFormValues] && (
									<p className='text-red-500 text-sm mt-1'>
										{errors[item.name as keyof BookingFormValues]?.message}
									</p>
								)}
							</div>
						))}
						<div className='flex flex-col flex-[0_1_47%]'>
							<label
								htmlFor='phone'
								className='font-dmSans font-bold text-base text-[#1a1a1a] mb-[11px]'
							>
								Phone Number*
							</label>
							<Controller
								name='phone'
								control={control}
								rules={{
									required: 'Phone* is required',
									validate: value => {
										console.log(value)
										const phoneNumber = parsePhoneNumberFromString('+' + value)
										if (!phoneNumber) return 'Invalid phone number'
										if (!phoneNumber.isValid())
											return 'Invalid phone number for this country'
										return true
									},
								}}
								render={({ field }) => (
									<PhoneInput
										inputProps={{
											id: 'phone',
											name: 'phone',
										}}
										{...field}
										country={'us'}
										onChange={val => field.onChange(val)}
										disableDropdown={false}
										countryCodeEditable={false}
									/>
								)}
							/>
							{errors.phone && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.phone.message}
								</p>
							)}
						</div>
						{/* radio */}
						<div className='flex flex-col flex-[0_1_47%]'>
							<div className='font-dmSans font-bold text-base text-[#1a1a1a] mb-[11px]'>
								Business Booking?
							</div>
							<div className='flex gap-x-[16px]'>
								<div className='flex items-center gap-x-[8px]'>
									<input
										type='radio'
										id='yes'
										value='yes'
										{...register('choice')}
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
										id='no'
										value='no'
										{...register('choice')}
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
							<div className='mb-[24px] max-md:mb-[16px]'>
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
											{...register(item.name as keyof BookingFormValues, {
												required: item.required
													? `${item.label} is required`
													: false,
											})}
											className={`${
												item.id === 1 ? 'w-[47%] max-md:w-full' : 'w-full'
											} font-dmSans text-base text-[#757575] border border-[#3a83ed] rounded-xl ring-[3px] ring-[#0A58CA1C] py-[16px] pl-[16px] outline-0 placeholder:font-dmSans placeholder:text-base placeholder:text-[#757575]`}
										/>
										{errors[item.name as keyof BookingFormValues] && (
											<p className='text-red-500 text-sm mt-1'>
												{errors[item.name as keyof BookingFormValues]?.message}
											</p>
										)}
									</div>
								))}
							</div>
						</>
					)}
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
							You can cancel your booking free of charge and get a full refund
							if you cancel up to 48 hours before pick-up.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Details
