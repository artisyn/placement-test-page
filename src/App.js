import React, { useContext, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.jsx';
import PageRoutes from './components/PageRoutes/PageRoutes';
import Footer from './components/footer/Footer';
import { PlacementTestContext } from '../src/context/index';

function App() {
	const [testLevel, setTestLevel] = useState('');
	const [userAnswers, setUserAnswers] = useState({});
	const [userResults, setUserResults] = useState({
		testLevel: '',
		totalCorrect: 0,
		level: '',
		answers: {},
		name: '',
		date: '',
	});

	return (
		<PlacementTestContext.Provider
			value={{
				userAnswers,
				setUserAnswers,
				testLevel,
				setTestLevel,
				userResults,
				setUserResults,
			}}
		>
			<BrowserRouter>
				<div className="App">
					<Navigation />
					<PageRoutes />
					<Footer />
				</div>
			</BrowserRouter>
		</PlacementTestContext.Provider>
	);
}

export default App;
