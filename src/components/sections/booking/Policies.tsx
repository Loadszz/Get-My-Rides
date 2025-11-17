import IconArrow from '@/assets/icons/common/arrow-down.svg'
import IconTooltip from '@/assets/icons/tooltip.svg'
import { policiesProps } from '@/data/booking/policies.types'

type Props = {
	isOpen: boolean
	toggle: () => void
}

const Policies = ({ isOpen, toggle }: Props) => {
	return (
		<section className='border-b border-[#e5e5e5] py-[32px] max-md:py-[24px]'>
			{/* header */}
			<div className='flex justify-between items-center mb-[24px] max-md:mb-[16px]'>
				{/* title */}
				<div className='title-booking'>Policies</div>
				{/* arrow */}
				<IconArrow
					onClick={toggle}
					className={`md:hidden w-[24px] cursor-pointer transition-transform duration-300 ${
						isOpen ? 'rotate-180' : 'rotate-0'
					}`}
				/>
			</div>
			{/* body */}
			<div
				className={`${
					isOpen ? 'grid' : 'hidden'
				} grid-cols-2 2xl:grid-cols-[299px_214px_254px] gap-x-[40px] gap-y-[24px] max-md:grid-cols-1`}
			>
				{/* column-first */}
				{policiesProps.map(item => (
					<div key={item.id}>
						{/* column-header */}
						<div className='flex items-center mb-[16px]'>
							{/* icon */}
							<item.icon className='w-[24px] mr-[16px]' />
							{/* title */}
							<div className='font-dmSans font-semibold text-base text-[#1a1a1a] mr-[8px]'>
								{item.title}
							</div>
							<div className='relative group cursor-pointer'>
								<IconTooltip className='w-[16px]' />
								<div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-40 bg-gray-800 text-white text-sm text-center rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
									Вот всплывающая подсказка!
								</div>
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
