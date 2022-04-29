import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.jsx';
import PageRoutes from './components/PageRoutes/PageRoutes';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navigation />
				<PageRoutes />
			</div>
		</BrowserRouter>
	);
}

export default App;
