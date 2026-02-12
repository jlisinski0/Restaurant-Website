import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import ShoppingCart from './components/ShoppingCart.tsx/ShoppingCart'

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
	return (
		<BrowserRouter>
			<Nav />

			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/ShoppingCart' element={<ShoppingCart />} />
				</Routes>
			</main>

			<footer>
				<Footer />
			</footer>
		</BrowserRouter>
	)
}

export default App
