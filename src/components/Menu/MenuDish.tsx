import MenuItem from './MenuItem'
import type { MenuItem as MenuItemType } from './MenuList'

interface MenuDishProps {
	filteredMenu: MenuItemType[]
}

export default function MenuDish({ filteredMenu }: MenuDishProps) {
	return (
		<div className='bg-white w-full h-full rounded-2xl p-4'>
			<div className='flex flex-wrap justify-center w-full h-full'>
				<MenuItem filteredMenu={filteredMenu} />
			</div>
		</div>
	)
}
