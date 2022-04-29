import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../../pages/About';
import TakeTest from '../../pages/TakeTest';
import TestGuide from '../../pages/TestGuide';

function PageRoutes() {
	return (
		<div>
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/guide" element={<TestGuide />} />
				<Route path="/test" element={<TakeTest />} />
				<Route path="*" element={<Navigate to="/about" />} />
			</Routes>
		</div>
	);
}

export default PageRoutes;
