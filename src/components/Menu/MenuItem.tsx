import type { MenuItem as MenuItemType } from './MenuList'
import shoppingBag from '/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../App'

interface MenuItemProps {
	filteredMenu: MenuItemType[]
}

export default function MenuItem({ filteredMenu }: MenuItemProps) {
	const context = useContext(CartContext)

	if (!context) {
		throw new Error('MenuItem must be used within CartContext.Provider')
	}

	const { cart, setCart } = context

	const addToCard = (product: MenuItemType) => {
		setCart([...cart, product])
	}

	return (
		<>
			{filteredMenu.map(item => (
				<div
					onClick={() => addToCard(item)}
					className='relative flex flex-col items-center justify-center bg-snowWhite p-2  w-full max-w-62.5 min-w-45 h-62.5 m-1 rounded-1xl hover:scale-105 transition-transform duration-200 cursor-pointer'
					key={item.id}>
					<img className='w-48 h-48' src={item.img} alt='' />

					<div className='absolute cursor-pointer top-0 right-0 p-3 '>
						<img aria-label='Dodaj do koszyka' src={shoppingBag} alt='Dodaj do koszyka' />
					</div>

					<div className='flex w-full justify-between'>
						<h3 className='pr-3.5 font-medium'>{item.name}</h3>
						<p className='text-accentTwo font-bold'>{item.cost}zł</p>
					</div>
				</div>
			))}
		</>
	)
}
