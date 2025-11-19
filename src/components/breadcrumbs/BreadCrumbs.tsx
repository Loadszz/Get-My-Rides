import Link from 'next/link'
interface Crumb {
	label: string
	href?: string
}

interface BreadcrumbsProps {
	items: Crumb[]
}

const BreadCrumbs = ({ items }: BreadcrumbsProps) => {
	return (
		<section className='pt-[24px] max-md:pt-[32px]'>
			<div className='__container'>
				{/* list */}
				<ul className='flex font-dmSans font-bold text-[#8c8c8c]'>
					{items.map((item, i) => (
						<li key={i} className='flex items-center'>
							{item.href ? (
								<Link href={item.href} className=''>
									{item.label}
								</Link>
							) : (
								<span>{item.label}</span>
							)}

							{i < items.length - 1 && <span className='mx-1'>&gt;</span>}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default BreadCrumbs
