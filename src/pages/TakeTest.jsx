import React, { useState } from 'react';
import classes from './TakeTest.module.scss';
import Test from '../components/test/Test';
import TestSelector from '../components/testSelector/TestSelector';
import Finish from '../components/finish/Finish';

function TakeTest() {
	const [testStage, setTestStage] = useState('start');

	const startTestOver = () => {
		setTestStage('start');
	};

	const startTest = () => {
		setTestStage('test');
	};

	const finishTest = () => {
		setTestStage('finish');
	};

	return (
		<div className={classes.main__container}>
			{testStage === 'start' ? (
				<TestSelector startTest={startTest} />
			) : (
				''
			)}
			{testStage === 'test' ? <Test finishTest={finishTest} /> : ''}
			{testStage === 'finish' ? (
				<Finish startTestOver={startTestOver} />
			) : (
				''
			)}
		</div>
	);
}

export default TakeTest;
