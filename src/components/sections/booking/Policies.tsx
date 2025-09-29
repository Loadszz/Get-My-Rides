import { policiesProps } from '@/data/booking/policies.types'

const Policies = () => {
	return (
		<section className='border-b border-[#e5e5e5] py-[32px]'>
			{/* title */}
			<div className='title-booking mb-[24px]'>Policies</div>
			{/* body */}
			<div className='flex flex-wrap gap-x-[40px] gap-y-[24px]'>
				{/* column */}
				{policiesProps.map(item => (
					<div
						key={item.id}
						className='first:flex-[0_1_299px] [&:nth-child(4)]:flex-[0_1_299px] [&:nth-child(2)]:flex-[0_1_214px] [&:nth-child(5)]:flex-[0_1_214px] [&:nth-child(3)]:flex-[0_1_254px] [&:nth-child(6)]:flex-[0_1_254px]'
					>
						{/* column-header */}
						<div className='flex items-center gap-x-[16px] mb-[16px]'>
							{/* icon */}
							<item.icon className='w-[24px]' />
							{/* title */}
							<div className='font-dmSans font-semibold text-base text-[#1a1a1a]'>
								{item.title}
							</div>
						</div>
						{/* column-body */}
						<ul className='pl-[40px]'>
							{item.content.map((c, index) => {
								if (c.type === 'text') {
									return (
										<li
											key={index}
											className='text-sm text-[#1a1a1a] list-disc list-inside marker:text-[#0a58ca] not-last:mb-[8px]'
										>
											{c.label}
										</li>
									)
								}
								if (c.type === 'links') {
									return c.links.map(link => (
										<li
											key={link.label}
											className='text-sm text-[#1a1a1a] list-disc list-inside marker:text-[#0a58ca] not-last:mb-[8px]'
										>
											<a href={link.href}>{link.label}</a>
										</li>
									))
								}

								return null
							})}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Policies
