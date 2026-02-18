const categoryList = ['Obiady', 'Drinki', 'Desery']

interface MenuCategoryProps {
	setIsSelectedCategory: (category: string) => void
	className?: string
}

export default function MenuCategory({ setIsSelectedCategory, className }: MenuCategoryProps) {
	return (
		<>
			<div className={`w-full mt-2 bg-snowWhite rounded-2xl lg:h-full lg:mt-0 ${className ?? ''}`}>
				<div className='flex flex-col px-5'>
					<ul className='w-full lg:flex'>
						{categoryList.map((item, index) => {
							return (
								<li
									onClick={() => setIsSelectedCategory(item)}
									key={index}
									className='flex justify-center cursor-pointer font-montserrat text-xl w-full hover:text-accentTwo hover:scale-115 ease-in-out duration-300'>
									<button className='py-3 cursor-pointer lg:py-0'>{item}</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	)
}
