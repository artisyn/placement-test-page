import React, { useContext, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.jsx';
import PageRoutes from './components/PageRoutes/PageRoutes';
import Footer from './components/footer/Footer';
import { TestLevelContext } from '../src/context/index';

function App() {
	const [testLevel, setTestLevel] = useState('');

	return (
		<TestLevelContext.Provider value={{ testLevel, setTestLevel }}>
			<BrowserRouter>
				<div className="App">
					<Navigation />
					<PageRoutes />
					<Footer />
				</div>
			</BrowserRouter>
		</TestLevelContext.Provider>
	);
}

export default App;
