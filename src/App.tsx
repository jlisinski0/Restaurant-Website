import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<Nav />
			<Header />
			<main>
				<Menu />
				<About />
				<Faq />
			</main>
			<footer>
				<Footer/>
			</footer>
		</>
	)
}

export default App
