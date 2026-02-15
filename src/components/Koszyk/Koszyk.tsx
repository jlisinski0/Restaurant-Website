import KoszykItem from "./KoszykItem"

export default function ShoppingCart() {
	return (
		<section className='h-[65vh] pt-17.5'>
			<div className='flex flex-col justify-center items-center h-full w-full p-4  md:mx-auto md:min-w-[300px]'>
				<div>
					<h2 className='flex justify-start text-xl font-medium pb-5'>Podsumowanie</h2>
				</div>
				<KoszykItem/>
			</div>
		</section>
	)
}
