import { useState } from 'react'
import { menuList } from './menuList'
const categoryList = ['Obiady', 'Drinki', 'Desery']

export default function MenuCategory() {
	const [isSelectedCategory, setIsSelectedCategory] = useState('all')
	const filteredMenu = isSelectedCategory === 'all' ? menuList : menuList.filter(item => item.category === isSelectedCategory)

	return (
		<>
			<div className='w-full mt-2 h-48 bg-snowWhite rounded-2xl py-5'>
				<div className='flex flex-col px-5'>
					<ul className='w-full'>
						{categoryList.map((item, index) => {
							return (
								<button onClick={() => setIsSelectedCategory(item)} className='flex justify-center cursor-pointer font-montserrat text-xl w-full hover:text-accentTwo ease-in-out duration-300'>
									<li className='py-3' key={index}>
										{item}
									</li>
								</button>
							)
						})}
					</ul>
				</div>
			</div>
			<div>
				{filteredMenu.map(item => (
					<div key={item.id}>
						<img src={item.img} alt='' />
						<h1>{item.name}</h1>
						<p>{item.cost}</p>
					</div>
				))}
			</div>
		</>
	)
}
