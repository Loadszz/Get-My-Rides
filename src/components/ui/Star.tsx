import StarIcon from '@/assets/icons/star.svg'
export type Props = {
	rating: number
	className: string
}

export const Star = ({ rating, className }: Props) => {
	return (
		<>
			{[1, 2, 3, 4, 5].map(i => (
				<StarIcon
					key={i}
					className={`${
						i <= rating ? 'text-[#f3c10e]' : 'text-[#737373]'
					} ${className}`}
				/>
			))}
		</>
	)
}
