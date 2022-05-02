import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.jsx';
import PageRoutes from './components/PageRoutes/PageRoutes';
import Footer from './components/footer/Footer';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navigation />
				<PageRoutes />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
