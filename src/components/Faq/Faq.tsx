import FaqList from './FaqList'

export default function Faq() {
	return (
		<section className='min-h-screen w-full bg-white border border-snowWhite' id='Faq'>
			<div className='flex justify-center items-center flex-col max-w-300 mx-auto  pt-20 mb-20'>
				<h2 className='font-fjallaone pb-8 text-6xl uppercase lg:text-8xl'>Faq</h2>
				<div className='flex flex-col gap-10 text-center h-full mt-30 w-full '>
					<>
						<FaqList />
					</>
				</div>
			</div>
		</section>
	)
}
