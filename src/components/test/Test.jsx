import React, { useState, useContext } from 'react';
import { TestLevelContext } from '../../context';
import classes from '../test/Test.module.scss';

function Test() {
	const { testLevel } = useContext(TestLevelContext);
	// if testLevel === A -->
	// if testLevel === B -->
	// if testLevel === C -->
	const questions = [
		{
			question: 'What _____________ when i called?',
			answer1: 'Was you doing',
			answer2: 'You doing',
			answer3: 'You did',
			answer4: 'Were you doing',
			correct: 'Were you doing',
		},
		{
			question: 'Which word form is not correct',
			answer1: 'Clothing',
			answer2: 'Clotheful',
			answer3: 'Clothe',
			answer4: 'Clothed',
			correct: 'Clothe',
		},
		{
			question: 'Nothing ______________ done when the boss is away.',
			answer1: 'Becomes',
			answer2: 'Gets',
			answer3: 'Been',
			answer4: 'Got',
			correct: 'Gets',
		},
		{
			question:
				'English grammar is the worst language of any language. No, it is not. German grammar _______________.',
			answer1: 'Was worse',
			answer2: 'Is worse',
			answer3: 'Is worst',
			answer4: 'Is good',
			correct: 'Is worse',
		},
		{
			question:
				'______________________ you like ? I like Grapes and Mangoes.',
			answer1: 'What kind of fruit',
			answer2: 'what type of fruit do',
			answer3: 'How many fruits do',
			answer4: 'Types of fruits do',
			correct: 'What kind of fruit',
		},
	];
	const [currentQuestion, setQurrentQuestion] = useState(0);

	return (
		<div className={classes.test__container}>
			<h2>Test difficulty is {testLevel}</h2>
			<div className={classes.info__container}>
				<h2>Question No.</h2>
				<span className={classes.question__no}>{currentQuestion}</span>
				<span> / </span>
				<span className={classes.question__no}>{questions.length}</span>
			</div>

			<div>
				<h2>{questions[currentQuestion].question}</h2>

				<div className={classes.questions__container}>
					<div>
						<label htmlFor="1">
							{questions[currentQuestion].answer1}
						</label>
						<input type="radio" name="x" id="1" />
					</div>
					<div>
						<label htmlFor="2">
							{questions[currentQuestion].answer2}
						</label>
						<input type="radio" name="x" id="2" />
					</div>
					<div>
						<label htmlFor="3">
							{questions[currentQuestion].answer3}
						</label>
						<input type="radio" name="x" id="3" />
					</div>
					<div>
						<label htmlFor="4">
							{questions[currentQuestion].answer4}
						</label>
						<input type="radio" name="x" id="4" />
					</div>
				</div>

				<div>
					{currentQuestion !== 0 ? <button>Previous</button> : ''}
					{currentQuestion === questions.length - 1 ? (
						<button>Finish</button>
					) : (
						<button>Next</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Test;
