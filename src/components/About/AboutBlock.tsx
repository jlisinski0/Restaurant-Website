import { AboutItems } from './AboutItems'

export default function () {
	return (
		<>
			{AboutItems.map((item, index) => {
				return (
					<div className='flex flex-col items-center justify-center py-5 lg:px-3' key={index}>
						<h3 className='accentGradient font-fjallaone text-5xl lg:text-7xl'>{item.year}</h3>
						<p className='my-4 text-sm lg:text-lg'>{item.text}</p>
					</div>
				)
			})}
		</>
	)
}
