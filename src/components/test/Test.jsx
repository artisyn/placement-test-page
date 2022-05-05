import React, { useState, useContext } from 'react';
import { TestLevelContext, UserAnswersContext } from '../../context';
import classes from '../test/Test.module.scss';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

function Test() {
	const { testLevel } = useContext(TestLevelContext);
	const { userAnswers, setUserAnswers } = useContext(UserAnswersContext);

	const questionsObj = { A: ['a', 'a'], B: ['b', 'b'], C: ['c', 'c'] };
	console.log(questionsObj[testLevel]);
	console.log(userAnswers);

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
	const [currentQuestion, setQurrentQuestion] = useState(1);

	return (
		<div className={classes.test__container}>
			<div className={classes.candidate__container}>
				<div className={classes.candidate}>
					Name :
					<span className={classes.name}> {'John Johnson'} </span>
				</div>
				<div className={classes.difficulty__container}>
					Test difficulty :
					<span className={classes.difficulty}> {testLevel} </span>
				</div>
			</div>

			<div className={classes.info__container}>
				<span className={classes.info__text}>Question No.</span>
				<span className={classes.question__no}>{currentQuestion}</span>
				<span> / </span>
				<span className={classes.question__no}>{questions.length}</span>
			</div>

			<div>
				<h2>{questions[currentQuestion].question}</h2>

				<div className={classes.questions__container}>
					<div className={`${classes.question__option}`}>
						<label htmlFor="1">
							{questions[currentQuestion].answer1}
						</label>
						<input type="radio" name="x" id="1" />
					</div>
					<div className={`${classes.question__option}`}>
						<label htmlFor="2">
							{questions[currentQuestion].answer2}
						</label>
						<input type="radio" name="x" id="2" />
					</div>
					<div className={`${classes.question__option}`}>
						<label htmlFor="3">
							{questions[currentQuestion].answer3}
						</label>
						<input type="radio" name="x" id="3" />
					</div>
					<div className={`${classes.question__option}`}>
						<label htmlFor="4">
							{questions[currentQuestion].answer4}
						</label>
						<input type="radio" name="x" id="4" />
					</div>
				</div>
			</div>
			<div className={classes.btn__container}>
				{currentQuestion !== 0 ? (
					<button
						className={`${classes.btn__previous} ${classes.btn}`}
					>
						<HiArrowLeft className={classes.arrLeft} />
						Prev
					</button>
				) : (
					''
				)}
				{currentQuestion === questions.length - 1 ? (
					<button className={`${classes.btn__next} ${classes.btn}`}>
						Finish
					</button>
				) : (
					<button className={`${classes.btn__next} ${classes.btn}`}>
						Next
						<HiArrowRight className={classes.arrRight} />
					</button>
				)}
			</div>
		</div>
	);
}

export default Test;
