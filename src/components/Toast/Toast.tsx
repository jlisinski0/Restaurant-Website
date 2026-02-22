import { useContext } from 'react'
import { CartContext } from '../../App'

export default function Toast() {
	const context = useContext(CartContext)

	if (!context) {
		throw new Error('MenuItem must be used within CartContext.Provider')
	}

	const { cart } = context

	return (
		<div className='fixed top-20 flex justify-end w-full pr-10 max-w-300 z-20'>
			<div className=' bg-accentOne border border-accentTwo/40 rounded-sm p-4'>
				<p className='text-[12px] md:text-base text-black font-medium'>
					Dodano <span className='font-bold'>{cart[cart.length - 1]?.name}</span> do koszyka!
				</p>
			</div>
		</div>
	)
}
