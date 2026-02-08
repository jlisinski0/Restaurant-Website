import arrow from '/chevron-down.svg'
import MenuCategory from './MenuCategory'
import { useState } from 'react'

interface MenuBarProps {
	setIsSelectedCategory: (category: string) => void
}

export default function MenuBar({ setIsSelectedCategory }: MenuBarProps) {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div className='h-full w-full z-10'>
			<nav className='flex justify-end items-center bg-snowWhite text-black h-full w-full  rounded-2xl'>
				<div className='w-full h-full hidden lg:flex'>
					<MenuCategory setIsSelectedCategory={setIsSelectedCategory} />
				</div>
				<a
					aria-label={`${isVisible ? 'Zamknij menu' : 'Otworz menu'}`}
					className='cursor-pointer h-full w-[25%] flex items-center justify-end pr-4 lg:hidden'
					onClick={() => setIsVisible(prev => !prev)}>
					<img src={arrow} alt='strzałka w dół rozwijająca menu' className={`${isVisible ? 'transition-transform rotate-180' : 'rotate-0 transition-transform'}`} />
				</a>
			</nav>
			{isVisible ? <MenuCategory setIsSelectedCategory={setIsSelectedCategory} /> : <></>}
		</div>
	)
}
