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
				<div className='px-5 ' key={index}>
					<div onClick={() => toggleItem(index)} className='flex flex-col justify-center items-center pb-3 cursor-pointer ' aria-live='polite'>
						<div className='flex items-center '>
							<h3 className='text-xl'>{item.heading}</h3>
							<button className='cursor-pointer p-2' aria-label={`${isVisible[index] ? 'Zwiń odpowiedź ' : 'Rozwnij i pokaż odpowiedź na pytanie'}`}>
								<img className={`${isVisible[index] ? 'transition-transform rotate-180' : 'transition-transform rotate-0'}`} src={arrow} alt='Strzałka rozwijająca menu' />
							</button>
						</div>
					</div>
					<div className={`faq ${isVisible[index] ? 'open' : 'closed'} `}>
						<p className='text-center pt-5'>{item.text}</p>
					</div>
				</div>
			))}
		</>
	)
}
