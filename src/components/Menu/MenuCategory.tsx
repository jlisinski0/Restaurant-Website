const categoryList = ['Obiady', 'Drinki', 'Desery']

interface MenuCategoryProps {
	setIsSelectedCategory: (category: string) => void
}

export default function MenuCategory({ setIsSelectedCategory}: MenuCategoryProps) {
	return (
		<>
			<div className='w-full mt-2 h-48 bg-snowWhite rounded-2xl py-5 lg:h-full lg:mt-0 lg:py-3 '>
				<div className='flex flex-col px-5'>
					<ul className='w-full lg:flex'>
						{categoryList.map((item, index) => {
							return (
								<li onClick={() => setIsSelectedCategory(item)} key={index} className='flex justify-center cursor-pointer font-montserrat text-xl w-full hover:text-accentTwo ease-in-out duration-300'>
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
