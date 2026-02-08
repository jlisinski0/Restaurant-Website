import { useState } from 'react'
import { FaqItem } from './FaqItem'
import arrow from '/chevron-down.svg'

export default function FaqList() {
	const [isVisible, setIsVisible] = useState<Record<number, boolean>>({})

	const toggleItem = (index: number): void => {
		setIsVisible(prev => ({
			...prev,
			[index]: !prev[index],
		}))
	}

	return (
		<>
			{FaqItem.map((item, index) => (
				<div className='px-5' key={index}>
					<div className='flex justify-center items-center pb-3'>
						<h3 className='text-xl'>{item.heading}</h3>
						<button onClick={() => toggleItem(index)} className='cursor-pointer p-2' aria-label='Rozwnij i pokaż odpowiedź na pytanie'>
							<img src={arrow} />
						</button>
					</div>
					{isVisible[index] && <p className='text-base'>{item.text}</p>}
				</div>
			))}
		</>
	)
}
