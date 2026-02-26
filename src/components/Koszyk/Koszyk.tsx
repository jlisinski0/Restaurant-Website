import KoszykItem from './KoszykItem'
import KoszykForm from './KoszykForm'
import { useContext } from 'react'
import { CartContext } from '../../App'

export default function ShoppingCart() {
	const context = useContext(CartContext)

	if (!context) {
		throw new Error('Error')
	}

	const { cart } = context

	return (
		<section className='min-h-[80vh] py-20 flex flex-col justify-center items-center h-max-[1000vh]'>
			<div className='flex flex-col justify-center items-center h-full w-full p-4  md:mx-auto md:min-w-75'>
				<KoszykForm />
				<div className='pt-10'>
					<h1 className='flex justify-start text-xl font-medium pb-5 md:text-3xl'>Podsumowanie</h1>
					{cart.length === 0 && <p className='text-sm md:text-xl text-center'>Koszyk jest pusty</p>}
				</div>
				<KoszykItem />
			</div>
			<div className='flex justify-center w-full h-full p-4'>
				<button className=' bg-accentTwo text-white px-6 py-2 rounded-sm cursor-pointer w-full mx-auto max-w-75 hover:font-medium hover:bg-accentTwo/80 transition-all duration-300'>Zamów</button>
			</div>
		</section>
	)
}
