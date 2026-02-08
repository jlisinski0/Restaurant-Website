import { navItem } from './NavItems'

export default function NavList({ ...props }) {
	return (
		<ul {...props}>
			{navItem.map(item => {
				return (
					<li key={item.id} className=' hover:text-accentTwo ease-in-out duration-200 w-full h-full'>
						<a className=' w-full h-full flex lg:justify-center lg:items-center' href={item.href}>
							{item.text}
						</a>
					</li>
				)
			})}
		</ul>
	)
}
