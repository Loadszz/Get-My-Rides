import IconAE from '@/assets/icons/footer/american-express.svg'
import IconAP from '@/assets/icons/footer/apple-pay.svg'
import IconGP from '@/assets/icons/footer/google-pay.svg'
import IconMCMobile from '@/assets/icons/footer/mastercard-mobile.svg'
import IconMC from '@/assets/icons/footer/mastercard.svg'
import IconPayPal from '@/assets/icons/footer/pay-pal.svg'
import IconPci from '@/assets/icons/footer/pci.svg'
import IconSecure from '@/assets/icons/footer/secure.svg'
import IconStripe from '@/assets/icons/footer/stripe.svg'
import IconTrustpilot from '@/assets/icons/footer/trustpilot.svg'
import IconVisa from '@/assets/icons/footer/visa.svg'

export interface IPaymentLogosProps {
	id: number
	icon: React.ElementType
	iconMobile?: React.ElementType
}

export const paymentLogosProps: IPaymentLogosProps[] = [
	{ id: 1, icon: IconVisa },
	{ id: 2, icon: IconAE },
	{ id: 3, icon: IconMC, iconMobile: IconMCMobile },
	{ id: 4, icon: IconGP },
	{ id: 5, icon: IconAP },
	{ id: 6, icon: IconPayPal },
	{ id: 7, icon: IconStripe },
	{ id: 8, icon: IconTrustpilot },
	{ id: 9, icon: IconPci },
	{ id: 10, icon: IconSecure },
]
