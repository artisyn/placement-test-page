import React, { useContext, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.jsx';
import PageRoutes from './components/PageRoutes/PageRoutes';
import Footer from './components/footer/Footer';
import { TestLevelContext, UserAnswersContext } from '../src/context/index';

function App() {
	const [testLevel, setTestLevel] = useState('');
	const [userAnswers, setUserAnswers] = useState({ a: '' });

	return (
		<UserAnswersContext.Provider value={{ userAnswers, setUserAnswers }}>
			<TestLevelContext.Provider value={{ testLevel, setTestLevel }}>
				<BrowserRouter>
					<div className="App">
						<Navigation />
						<PageRoutes />
						<Footer />
					</div>
				</BrowserRouter>
			</TestLevelContext.Provider>
		</UserAnswersContext.Provider>
	);
}

export default App;
