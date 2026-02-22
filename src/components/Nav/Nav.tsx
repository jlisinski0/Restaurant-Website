import NavList from './NavList'
import NavMobile from './NavMobile'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../App'
import logo from '/etsy.png'
import shoppingBag from '/shopping-bag.svg'
import { Link } from 'react-router-dom'

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const context = useContext(CartContext)

	if (!context) {
		throw new Error('MenuItem must be used within CartContext.Provider')
	}

	const { cart } = context

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={` fixed h-16 w-screen font-montserrat z-20 shadow-lg shadow-black-50  bg-white lg:bg-transparent  ${isScrolled ? 'lg:bg-white lg:shadow-lg lg:shadow-black-50' : 'lg:bg-transparent lg:shadow-none'} `}>
			<div className='flex justify-between items-center px-5 xl:px-0 max-w-300 m-auto h-full'>
				<Link to='/' className='cursor-pointer flex justify-start items-center h-full  w-[25%]'>
					<img className='w-5' src={logo} alt='logo (nie moje logo, logo etsy)' />
				</Link>
				<div className={`flex justify-end lg:justify-center items-center h-full w-[50%]  lg:bg-white ${isScrolled ? 'lg:shadow-none' : 'lg:shadow-lg lg:shadow-black-50'} `}>
					<Link className='flex items-center px-2 lg:px-10 h-full lg:hidden' to='/Koszyk'>
						<img src={shoppingBag} alt='Koszyk' />
						<div className='absolute top-3 right-20 '>
							<span className='absolute flex items-center justify-center bg-red-500 w-5 h-5 rounded-full text-white font-bold text-sm'>{cart.length}</span>
						</div>
					</Link>
					<button
						onClick={() => setIsMenuOpen(prev => !prev)}
						className='flex justify-center items-center cursor-pointer w-10 h-full lg:hidden'
						aria-label={`${isMenuOpen ? 'Zamknij menu' : 'Otworz menu'}`}>
						<div className='flex relative justify-center items-center -top-1 h-0.5 w-[40%] bg-black after:absolute after:bg-black after:top-1 after:w-full after:h-full'></div>
					</button>

					<div className='hidden lg:flex justify-center items-center w-full h-full'>
						<NavList className='hidden w-full h-full  lg:flex lg:gap-14' />
					</div>
				</div>
				<div className='hidden lg:flex lg: w-[25%] lg:justify-end'>
					<a href='#Menu' className='cursor-pointer font-medium px-12 py-2 border-2 border-accentTwo rounded-[5px] hover:bg-accentTwo hover:text-white  duration-200 ease-in-out '>
						Zamów
					</a>
				</div>
				<Link className='relative hidden lg:flex items-center px-2 lg:px-10 h-full hover:scale-105 transition-transform duration-200' to='/Koszyk'>
					<img src={shoppingBag} alt='' />
					<div className='absolute top-3 right-12 '>
						<span className='absolute flex items-center justify-center bg-red-500 w-5 h-5 rounded-full text-white font-bold text-sm'>{cart.length}</span>
					</div>
				</Link>
			</div>

			<div className={` bg-white w-full shadow-lg shadow-black-50 menu ${isMenuOpen ? 'open' : 'closed'}`}>
				<NavMobile />
			</div>
		</nav>
	)
}
