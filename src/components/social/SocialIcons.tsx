import { socialLinks } from '@/data/socialLinks'

export const SocialIcons = () => {
	return (
		<ul className='flex gap-x-[16px] max-lg:justify-center max-sm:justify-start'>
			{socialLinks.map((link, index) => (
				<li key={index}>
					<a href={link.href} className=''>
						<link.Icon className='w-[24px]' />
					</a>
				</li>
			))}
		</ul>
	)
}
