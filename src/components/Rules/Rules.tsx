import { RulesItems } from './RulesItems'

export default function Rules() {
	return (
		<section className='min-h-screen max-w-300 mx-auto py-25'>
			<div className='flex items-center justify-start w-full h-full flex-col'>
				<h1 className='text-3xl md:text-4xl lg:text-6xl font-fjallaone uppercase text-center'>Regulamin restauracji</h1>
				<div className='px-5 xl:px-0 w-full h-full'>
					{RulesItems.map(item => (
						<div className='flex flex-col justify-start my-15 w-full h-full' key={item.id}>
							<h2 className='text-lg lg:text-2xl  font-bold'>{item.name}</h2>
							<div className='pt-5'>
								<p className='text-base lg:text-lg'>
									<span className=' font-medium pr-2'>{item.id}.</span>
									{item.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
