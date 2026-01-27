import arrow from '../../../public/chevron-down.svg'
import MenuCategory from './MenuCategory'

export default function MenuBar() {
	return (
		<div className='h-full w-full'>
			<nav className='flex justify-end items-center bg-snowWhite text-black h-full w-full px-4 rounded-2xl'>
				<a>
					<img className='' src={arrow} alt='strzałka w dół rozwijająca menu' />
				</a>
			</nav>
			<MenuCategory />
		</div>
	)
}
