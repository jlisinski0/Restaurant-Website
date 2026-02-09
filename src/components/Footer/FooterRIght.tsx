import { FooterRight as FooterRightItems } from './FooterItems'

export default function FooterRight() {
	return (
		<>
			<h4 className='text-xl font-medium pt-10 lg:pt-0 md:pt-0'>Inne</h4>
			{FooterRightItems.map(item => {
				return (
					<a className='py-2 hover:text-accentOne transition-colors' key={item.id} href={item.href}>
						{item.name}
					</a>
				)
			})}
		</>
	)
}
