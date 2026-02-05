import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import About from './components/About/About'

function App() {
	return (
		<>
			<Nav />
			<Header />
			<main>
				<Menu />
				<About/>
			</main>
		</>
	)
}

export default App
