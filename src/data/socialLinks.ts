import FacebookIcon from '@/assets/icons/fb.svg'
import InstagramIcon from '@/assets/icons/ig.svg'
import LinkedinIcon from '@/assets/icons/in.svg'
import TikTokIcon from '@/assets/icons/tt.svg'
import YouTubeIcon from '@/assets/icons/yb.svg'

export interface SocialLink {
	href: string
	Icon: React.FC<React.SVGProps<SVGSVGElement>>
}
export const socialLinks: SocialLink[] = [
	{ href: '#', Icon: FacebookIcon },
	{ href: '#', Icon: InstagramIcon },
	{ href: '#', Icon: TikTokIcon },
	{ href: '#', Icon: YouTubeIcon },
	{ href: '#', Icon: LinkedinIcon },
]
