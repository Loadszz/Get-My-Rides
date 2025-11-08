'use client'
import { createContext, ReactNode, useContext, useState } from 'react'
interface MenuContextType {
	isOpen: boolean
	handleBurger: () => void
}
const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const MenuProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleBurger = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}

	return (
		<MenuContext.Provider value={{ isOpen, handleBurger }}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenu = (): MenuContextType => {
	const context = useContext(MenuContext)
	if (!context) throw new Error('useMenu must be used within a MenuProvider')
	return context
}
