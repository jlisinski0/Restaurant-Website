import type { MenuItem as MenuItemType } from './MenuList'
import shoppingBag from '/shopping-bag.svg'

interface MenuItemProps {
	filteredMenu: MenuItemType[]
}

export default function MenuItem({ filteredMenu }: MenuItemProps) {
	return (
		<>
			{filteredMenu.map(item => (
				<div className='relative flex flex-col items-center justify-center bg-snowWhite p-2  w-full max-w-62.5 min-w-45 h-62.5 m-1 rounded-1xl' key={item.id}>
					<img className='w-48 h-48' src={item.img} alt='' />
					<a className='absolute top-0 right-0 p-3 hover:scale-105 ease-in-out duration-100' href='#'>
						<img src={shoppingBag} alt='' />
					</a>
					<div className='flex w-full justify-between'>
						<h3 className='pr-3.5 font-medium'>{item.name}</h3>
						<p className='text-accentTwo font-bold'>{item.cost}zł</p>
					</div>
				</div>
			))}
		</>
	)
}
