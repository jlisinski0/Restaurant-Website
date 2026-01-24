import NavList from './NavList'
import { useState } from 'react'

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className='fixed h-16 w-screen mt-1'>
			<div className='flex justify-between items-center px-5 max-w-300 m-auto h-full'>
				<div className='cursor-pointer flex justify-start lg:justify-center items-center h-full  w-[25%]'>
					<img src='' alt='' />
					<p>test1</p>
				</div>
				<div className='flex justify-end lg:justify-center items-center h-full w-[50%] '>
					<button onClick={() => setIsMenuOpen(prev => !prev)} className='flex justify-center items-center cursor-pointer w-10 h-full lg:hidden '>
						<div className='flex relative justify-center items-center -top-1 h-0.5 w-[40%] bg-black after:absolute after:bg-black after:top-1 after:w-full after:h-full'></div>
					</button>
					<div className='hidden lg:flex justify-center items-center bg-amber-900  w-full h-full'>
						<NavList />
					</div>
				</div>
				<div className='hidden lg:flex lg: w-[25%] lg:justify-end'>
					<a className='cursor-pointer px-12 py-2 border-2 border-amber-300 '>test5</a>
				</div>
			</div>

			{isMenuOpen && (
				<div>
					<h1>test</h1>
				</div>
			)}
		</nav>
	)
}
