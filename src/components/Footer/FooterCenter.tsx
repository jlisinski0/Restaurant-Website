import { FooterCenter as FooterCenterItems } from './FooterItems'

export default function FooterCenter() {
	return (
		<>
			<h4 className='text-xl font-medium pt-10 lg:pt-0 md:pt-0'>Nawigacja</h4>
			{FooterCenterItems.map(item => {
				return (
					<a className='py-2 hover:text-accentOne transition-colors' key={item.id} href={item.href}>
						{item.name}
					</a>
				)
			})}
		</>
	)
}
