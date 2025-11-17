'use client'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import IconArrowDown from '@/assets/icons/common/arrow-down.svg'
import ContactFormBg from '@/assets/images/sections/contact/contact-form.jpg'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { formSelectProps } from '@/data/contact/formSelect.type'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ICompanyFormProps {
	fullName: number
	email: string
	message: string
	placeholder: string
	required?: boolean
}
const ContactForm = () => {
	const [subject, setSubject] = useState('Subject*')

	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm<ICompanyFormProps>()

	const onSubmit: SubmitHandler<ICompanyFormProps> = data => {
		console.log('Success', data)
	}

	const handleAlertSubmit = async () => {
		const isValid = await trigger()

		if (!isValid) {
			alert('Please fill all required fields')
			return
		}

		handleSubmit(onSubmit)()
	}

	return (
		<section className='pt-[92px] max-md:pt-[32px]'>
			<div className='__container'>
				{/* body */}
				<div className='flex gap-x-[16px]'>
					{/* column-form */}
					<div className='flex-[0_0_676px] p-[45px] bg-[#0a58ca] border border-[#e5e5e5] rounded-3xl space-y-[32px] max-lg:flex-[0_0_100%] max-md:p-[16px] max-md:space-y-[16px]'>
						{/* title */}
						<div className='h2 !text-white max-md:!text-2xl'>Contact Form</div>
						{/* form */}
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='font-dmSans text-base'
						>
							<div className='flex gap-[20px] relative mb-[22px] max-md:flex-wrap max-md:gap-[14px] max-md:mb-[14px]'>
								<input
									placeholder='Full Name*'
									type='text'
									{...register('fullName', {
										required: 'Full Name is required',
									})}
									className='p-[16px] flex-[0_1_50%] border-[0.5px] border-[#3a83ed] rounded-[12px] bg-white/16 outline-none ring-[3px] ring-[rgba(84,153,253,0.11)] placeholder:text-white max-md:flex-[0_0_100%]'
								/>
								<input
									placeholder='Email Address*'
									type='email'
									{...register('email', { required: 'Email is required' })}
									className='p-[16px] flex-[0_1_50%] border-[0.5px] border-[#3a83ed] rounded-[12px] bg-white/16 outline-none ring-[3px] ring-[rgba(84,153,253,0.11)] placeholder:text-white max-md:flex-[0_0_100%]'
								/>
							</div>
							<div className='mb-[22px] border-[0.5px] border-[#3a83ed] rounded-[12px] bg-white/16 ring-[3px] ring-[rgba(84,153,253,0.11)] max-md:mb-[14px]'>
								<Select
									options={formSelectProps}
									value={subject}
									onChange={setSubject}
									getLabel={option => option.text}
									className='flex-row-reverse justify-between !px-[16px]'
									icon={<IconArrowDown className='w-[24px] text-white' />}
								/>
							</div>
							<textarea
								placeholder='Message*'
								{...register('message')}
								className='pt-[16px] px-[16px] mb-[28px] w-full h-[162px] border-[0.5px] border-[#3a83ed] rounded-[12px] bg-white/16 outline-none ring-[3px] ring-[rgba(84,153,253,0.11)] placeholder:text-white resize-none max-md:mb-[20px]'
							></textarea>
							<Button
								onClick={handleAlertSubmit}
								type='submit'
								variant='white'
								className='flex justify-center gap-x-[10px] rounded-[12px] font-dmSans font-medium text-base text-[#1a1a1a] py-[16px] w-[288px] max-sm:w-full'
							>
								<span>Submit</span>
								<ArrowRight className='w-[24px]' />
							</Button>
						</form>
					</div>
					{/* column-image */}
					<div className='flex-[0_1_676px] relative max-lg:hidden'>
						<Image
							src={ContactFormBg}
							fill
							unoptimized
							alt='contact-form-bg'
							className='object-cover rounded-2xl'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactForm
