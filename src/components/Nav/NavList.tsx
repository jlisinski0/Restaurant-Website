import { navItem } from './NavItems'

export default function NavList({}) {
	return (
		<ul className='hidden lg:flex lg:gap-14'>
			{navItem.map(item => {
				return (
					<li key={item.href}>
						<a href={item.href}>{item.text}</a>
					</li>
				)
			})}
		</ul>
	)
}
