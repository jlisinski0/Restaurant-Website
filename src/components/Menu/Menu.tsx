import MenuBar from './MenuBar'
import MenuDish from './MenuDish'
import { useState } from 'react'
import { menuList } from './MenuList'

export default function Menu() {
	const [isSelectedCategory, setIsSelectedCategory] = useState('all')
	const filteredMenu = isSelectedCategory === 'all' ? menuList : menuList.filter(item => item.category === isSelectedCategory)

	return (
		<section className='min-h-screen w-full bg-white' id='Menu'>
			<div className='flex justify-center items-center flex-col pt-20'>
				<h2 className='font-fjallaone pb-8 text-6xl uppercase'>Menu</h2>
				<div className='flex justify-between items-center w-full h-12 px-5 '>
					<MenuBar setIsSelectedCategory={setIsSelectedCategory} />
				</div>
				<div className='w-full h-300 px-5 mt-5'>
					<MenuDish filteredMenu={filteredMenu} />
				</div>
			</div>
		</section>
	)
}
