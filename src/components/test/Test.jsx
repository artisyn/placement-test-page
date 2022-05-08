import React, { useState, useContext, useEffect } from 'react';
import { PlacementTestContext } from '../../context';
import classes from '../test/Test.module.scss';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { questions } from '../../Data';

function Test({ finishTest }) {
	const {
		testLevel,
		userAnswers,
		setUserAnswers,
		userResults,
		setUserResults,
	} = useContext(PlacementTestContext);

	useEffect(() => {
		setUserAnswers(
			questions[testLevel].reduce((accu, el, i) => {
				accu[i + 1] = '';
				return accu;
			}, {})
		);
	}, []);

	let [currentQuestion, setCurrentQuestion] = useState(0);

	const handleRadioChange = (val) => {
		const objCopy = { ...userAnswers };
		objCopy[currentQuestion + 1] = val;
		setUserAnswers(objCopy);
	};

	const handleNext = () => {
		if (currentQuestion === questions[testLevel].length - 1) return;
		setCurrentQuestion(currentQuestion + 1);
	};

	const handlePrev = () => {
		if (currentQuestion === 0) return;
		setCurrentQuestion(currentQuestion - 1);
	};
	const determineUsersLevel = (num) => {
		if (num >= 0 && num <= 20) return 'Below Elementary';
		if (num >= 21 && num <= 35) return 'Elementary';
		if (num >= 36 && num <= 60) return 'Pre-intermediate';
		if (num >= 61 && num <= 85) return 'Intermediate';
		if (num >= 86 && num <= 100) return 'Upper Intermediate';
	};
	const handleFinish = () => {
		// getting date/time string

		const now = new Date();
		const options = {
			hour: 'numeric',
			minute: 'numeric',
			day: 'numeric',
			month: 'long', // 2-digit
			year: 'numeric',
			weekday: 'long',
		};

		const intApi = new Intl.DateTimeFormat('en-US', options).format(now);
		const userCorrectAnswers = questions[testLevel].reduce(
			(accu, el, i) => {
				if (userAnswers[i + 1] === el.correct) return accu + 1;
				return accu;
			},
			0
		);

		const userLevel = determineUsersLevel(userCorrectAnswers);
		const objCopy = { ...userResults };
		objCopy.testLevel = testLevel;
		objCopy.totalCorrect = userCorrectAnswers;
		objCopy.level = userLevel;
		objCopy.answers = userAnswers;
		objCopy.date = intApi;
		setUserResults(objCopy);

		let finishRequest = window.confirm('Finish and see Results ?');
		if (finishRequest) {
			finishTest();
		}
	};

	return (
		<div className={classes.test__container}>
			<div className={classes.candidate__container}>
				<div className={classes.candidate}>
					Name :
					<span className={classes.name}>
						{' '}
						{userResults.name} {userResults.surname}{' '}
					</span>
				</div>
				<div className={classes.difficulty__container}>
					Test difficulty :
					<h2 className={classes.difficulty}> {testLevel} </h2>
				</div>
			</div>

			<div className={classes.info__container}>
				<span className={classes.info__text}>Question No.</span>
				<span className={classes.question__no}>
					{currentQuestion + 1}
				</span>
				<span> / </span>
				<span className={classes.question__no}>
					{questions[testLevel].length}
				</span>
			</div>
			<p className={classes.explanation__text}>
				Choose the best answer and select it. If you do not know the
				answer, leave it blank.
			</p>

			<h2>{questions[testLevel][currentQuestion].question}</h2>
			<div className={classes.questions__container}>
				<div
					className={`${classes.question__option} ${
						userAnswers[currentQuestion + 1] === 'a'
							? classes.selected
							: ''
					}`}
				>
					<label htmlFor="a">
						{questions[testLevel][currentQuestion].a}
					</label>
					<input
						onChange={() => handleRadioChange('a')}
						type="radio"
						name="x"
						id="a"
						value={'a'}
						checked={userAnswers[currentQuestion + 1] === 'a'}
					/>
				</div>
				<div
					className={`${classes.question__option} ${
						userAnswers[currentQuestion + 1] === 'b'
							? classes.selected
							: ''
					} `}
				>
					<label htmlFor="b">
						{questions[testLevel][currentQuestion].b}
					</label>
					<input
						onChange={() => handleRadioChange('b')}
						type="radio"
						name="x"
						id="b"
						value={'b'}
						checked={userAnswers[currentQuestion + 1] === 'b'}
					/>
				</div>
				<div
					className={`${classes.question__option} ${
						userAnswers[currentQuestion + 1] === 'c'
							? classes.selected
							: ''
					}`}
				>
					<label htmlFor="c">
						{questions[testLevel][currentQuestion].c}
					</label>
					<input
						onChange={() => handleRadioChange('c')}
						type="radio"
						name="x"
						id="c"
						value={'c'}
						checked={userAnswers[currentQuestion + 1] === 'c'}
					/>
				</div>

				{questions[testLevel][currentQuestion].d ? (
					<div
						className={`${classes.question__option} ${
							userAnswers[currentQuestion + 1] === 'd'
								? classes.selected
								: ''
						} `}
					>
						<label htmlFor="d">
							{questions[testLevel][currentQuestion].d}
						</label>
						<input
							onChange={() => handleRadioChange('d')}
							type="radio"
							name="x"
							id="d"
							value={'d'}
							checked={userAnswers[currentQuestion + 1] === 'd'}
						/>
					</div>
				) : (
					''
				)}
			</div>
			<div className={classes.btn__container}>
				{currentQuestion !== 0 ? (
					<button
						onClick={() => handlePrev()}
						className={`${classes.btn__previous} ${classes.btn}`}
					>
						<HiArrowLeft className={classes.arrLeft} />
						Prev
					</button>
				) : (
					''
				)}
				{currentQuestion === questions[testLevel].length - 1 ? (
					<button
						onClick={() => handleFinish()}
						className={`${classes.btn__next} ${classes.btn}`}
					>
						Finish
					</button>
				) : (
					<button
						onClick={() => handleNext()}
						className={`${classes.btn__next} ${classes.btn}`}
					>
						Next
						<HiArrowRight className={classes.arrRight} />
					</button>
				)}
			</div>
		</div>
	);
}

export default Test;
