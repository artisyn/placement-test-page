import React, { useState } from 'react';
import classes from './TakeTest.module.scss';
import Test from '../components/test/Test';
import TestSelector from '../components/testSelector/TestSelector';

function TakeTest() {
	const [testStage, setTestStage] = useState('start');

	const startTest = () => {
		setTestStage('test');
		console.log(testStage);
	};

	return (
		<div className={classes.main__container}>
			{testStage === 'start' ? <TestSelector /> : ''}
			{testStage === 'test' ? <Test /> : ''}
			{testStage === 'finish' ? (
				<div>
					Finish Test Yeah
					<button onClick={() => setTestStage('start')}>
						Start Over
					</button>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default TakeTest;
