import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState, type Dispatch, type SetStateAction } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import Koszyk from './components/Koszyk/Koszyk'
import Rules from './components/Rules/Rules'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'

interface Product {
	id: number
	name: string
	cost: number
	img: string | any
}

interface CartContextType {
	cart: Product[]
	setCart: Dispatch<SetStateAction<Product[]>>
	showToast: boolean
	addToCart: (product: Product) => void
}

export const CartContext = createContext<CartContextType | null>(null)

function HomePage() {
	return (
		<>
			<Header />
			<Menu />
			<About />
			<Faq />
		</>
	)
}

function App() {
	const [cart, setCart] = useState<Product[]>([])
	const [showToast, setShowToast] = useState(false)

	const addToCart = (product: Product) => {
		setCart(prev => [...prev, product])
		setShowToast(true)
		setTimeout(() => setShowToast(false), 3000)
	}

	return (
		<CartContext.Provider value={{ cart, setCart, showToast, addToCart }}>
			<BrowserRouter>
				<Nav />

				<main>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/Koszyk' element={<Koszyk />} />
						<Route path='/Regulamin' element={<Rules />} />
						<Route path='/Polityka-prywatności' element={<PrivacyPolicy />} />
					</Routes>
				</main>

				<footer>
					<Footer />
				</footer>
			</BrowserRouter>
		</CartContext.Provider>
	)
}

export default App
