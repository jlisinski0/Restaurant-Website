import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Faq from './components/Faq/Faq'

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
		</>
	)
}

export default App
