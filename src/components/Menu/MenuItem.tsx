import type { MenuItem as MenuItemType } from './MenuList'

interface MenuItemProps {
	filteredMenu: MenuItemType[]
}

export default function MenuItem({ filteredMenu }: MenuItemProps) {
	return (
		<>
			{filteredMenu.map(item => (
				<div className='flex flex-col items-center justify-center bg-snowWhite p-2 w-full max-w-[250px] min-w-[180px] h-[250px] mx-1 rounded-1xl' key={item.id}>
					<img className='w-48 h-48' src={item.img} alt='' />
					<div className='flex w-full justify-between'>
						<h3 className='pr-3.5 font-medium'>{item.name}</h3>
						<p className='text-accentTwo font-bold'>{item.cost}zł</p>
					</div>
				</div>
			))}
		</>
	)
}
