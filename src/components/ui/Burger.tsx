export type Props = {
	isOpen: boolean
	handleBurger: () => void
}
const Burger = ({ isOpen, handleBurger }: Props) => {
	return (
		<button
			type='button'
			className={`hidden rounded-[32px] w-[24px] h-[24px] max-lg:block z-30 transition-all duration-700 relative ${
				isOpen ? 'border-none' : ''
			}`}
			onClick={handleBurger}
		>
			<span
				className={`absolute w-[12px] h-[2px] top-[4px] translate-x-[-50%] left-[50%] transition-all duration-300 rounded-[32px] bg-white ${
					isOpen ? 'rotate-[45deg] top-[50%]' : ''
				} `}
			></span>
			<span
				className={`absolute w-[18px] h-[2px] top-1/2 transform -translate-y-1/2 translate-x-[-50%] left-[50%] duration-300 rounded-[32px] bg-white ${
					isOpen ? 'hidden' : ''
				}`}
			></span>
			<span
				className={`absolute w-[12px] h-[2px] bottom-[4px] translate-x-[-50%] left-[50%] transition-all duration-300 rounded-[32px] bg-white ${
					isOpen ? 'rotate-[-45deg] top-[50%]' : ''
				} `}
			></span>
		</button>
	)
}

export default Burger
