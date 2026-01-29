import arrow from '../../../public/chevron-down.svg'
import MenuCategory from './MenuCategory'
import { useState } from 'react'

export default function MenuBar() {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div className='h-full w-full z-10'>
			<nav className='flex justify-end items-center bg-snowWhite text-black h-full w-full  rounded-2xl'>
				<a className='cursor-pointer h-full w-[25%] flex items-center justify-end pr-4' onClick={() => setIsVisible(prev => !prev)}>
					<img src={arrow} alt='strzałka w dół rozwijająca menu' />
				</a>
			</nav>
			{isVisible ? <MenuCategory /> : <></>}
		</div>
	)
}
