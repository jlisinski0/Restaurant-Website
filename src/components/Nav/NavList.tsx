import { navItem } from './NavItems'

export default function NavList({ ...props }) {
	return (
		<ul {...props}>
			{navItem.map(item => {
				return (
					<li key={item.id} className='border-b-3 border-transparent hover:text-accentTwo  lg:hover:border-accentTwo  transition-all ease-in-out duration-200 w-full h-full'>
						<a className=' w-full h-full flex lg:justify-center lg:items-center' href={item.href}>
							{item.text}
						</a>
					</li>
				)
			})}
		</ul>
	)
}
