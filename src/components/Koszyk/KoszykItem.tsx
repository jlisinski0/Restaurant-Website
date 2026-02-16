import { useContext } from 'react'
import { CartContext } from '../../App'

export default function KoszykItem() {
	const context = useContext(CartContext)

	if (!context) {
		throw new Error('blad')
	}

	const { cart } = context
	return (
		<>
			{cart.map(item => (
				<div className='flex items-start justify-between min-w-25 pb-2  max-w-75' key={item.id}>
					<div className='border-snowWhite border rounded-2xl  mr-1'>
						<img className='flex items-center w-25 md:w-50' src={item.img} alt='' />
					</div>
					<div className='flex items-center justify-between w-full h-full mx-5 text-sm'>
						<div className='pr-2'>
							<h3 className='font-medium text-sm md:text-lg'>{item.name}</h3>
						</div>
						<p className='font-medium text-sm md:text-lg'>{item.cost}zł</p>
					</div>
				</div>
			))}
		</>
	)
}
