import MenuBar from './MenuBar'
import MenuDish from './MenuDish'



export default function Menu() {
	return (
		<section className='min-h-screen w-full bg-white' id='Menu'>
			<div className='flex justify-center items-center flex-col pt-20'>
				<h2 className='font-fjallaone pb-8 text-6xl uppercase'>Menu</h2>
				<div className='flex justify-center items-center w-full h-12 px-5 '>
					<MenuBar />
				</div>
				<div className='w-full h-150 px-5 mt-5'>
					<MenuDish/>
				</div>
			</div>
		</section>
	)
}
