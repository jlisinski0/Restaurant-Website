import { FaqItem } from './FaqItem'
import arrow from '/chevron-down.svg'

export default function FaqList() {
	return (
		<>
			{FaqItem.map(item => (
				<div className='px-5' key={item.id}>
					<div className='flex justify-center items-center pb-3'>
						<h3 className='text-xl'>{item.heading}</h3>
						<a aria-label='Rozwnij i pokaż odpowiedź na pytanie'>
							<img src={arrow} />
						</a>
					</div>
					<p className='text-base'>{item.text}</p>
				</div>
			))}
		</>
	)
}
