import KoszykItem from './KoszykItem'
import KoszykForm from './KoszykForm'

export default function ShoppingCart() {
	return (
		<section className='min-h-[80vh] py-17.5 h-max-[1000vh]'>
			<div className='flex flex-col justify-center items-center h-full w-full p-4  md:mx-auto md:min-w-75'>
				<KoszykForm />
				<div>
					<h2 className='flex justify-start text-xl font-medium pb-5'>Podsumowanie</h2>
				</div>
				<KoszykItem />
			</div>
			<div className='flex justify-center w-full h-full p-4'>
				<button className=' bg-accentTwo text-white px-6 py-2 rounded-sm cursor-pointer w-full mx-auto max-w-75 hover:font-medium hover:bg-accentTwo/80 transition-all duration-300'>Zamów</button>
			</div>
		</section>
	)
}
