export type Props = {
	isScrolled: boolean
	isOpen: boolean
	handleBurger: () => void
}
const Burger = ({ isScrolled, isOpen, handleBurger }: Props) => {
	return (
		<button
			type='button'
			className={`hidden rounded-[32px] w-[24px] h-[24px] max-lg:block z-30 transition-all duration-700 relative ${
				isOpen ? 'border-none' : ''
			}`}
			onClick={handleBurger}
		>
			<span
				className={`absolute w-[12px] h-[2px] top-[4px] translate-x-[-50%] left-[50%] transition-all duration-300 rounded-[32px] ${
					isOpen ? 'rotate-[45deg] top-[50%]' : ''
				} 
				${isScrolled ? 'bg-black' : 'bg-white'}`}
			></span>
			<span
				className={`absolute w-[18px] h-[2px] top-1/2 transform -translate-y-1/2 translate-x-[-50%] left-[50%] duration-300 rounded-[32px] ${
					isOpen ? 'hidden' : ''
				} ${isScrolled ? 'bg-black' : 'bg-white'}`}
			></span>
			<span
				className={`absolute w-[12px] h-[2px] bottom-[4px] translate-x-[-50%] left-[50%] transition-all duration-300 rounded-[32px] ${
					isOpen ? 'rotate-[-45deg] top-[50%]' : ''
				} 
				${isScrolled ? 'bg-black' : 'bg-white'}`}
			></span>
		</button>
	)
}

export default Burger
