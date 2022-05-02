import React, { useState } from 'react';
import classes from './TakeTest.module.scss';
import Test from '../components/test/Test';

function TakeTest() {
	const [testStage, setTestStage] = useState('start');

	const startTest = () => {
		setTestStage('test');
		console.log(testStage);
	};

	return (
		<div className={classes.main__container}>
			{testStage === 'start' ? (
				<button
					onClick={() => startTest()}
					className={classes.btn__start}
				>
					Start Test
				</button>
			) : (
				''
			)}
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
