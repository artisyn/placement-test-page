import React, { useState, useContext } from 'react';
import { TestLevelContext } from '../../context';
import classes from '../testSelector/TestSelector.module.scss';

function TestSelector({ startTest }) {
	const { testLevel, setTestLevel } = useContext(TestLevelContext);

	// const [testLevel, setTestLevel] = useState('');

	const inputHandler = (e) => {
		console.log(e.target.dataset.letter);

		if (e.target.checked) {
			setTestLevel(e.target.dataset.letter);
		}
	};

	const startTestHandler = () => {
		if (testLevel === '') return;
		startTest();
	};

	return (
		<div className={classes.selector__container}>
			<h2>Select Test level</h2>
			<div className={classes.selector__options}>
				<div
					className={`${classes.selector__option} ${
						testLevel === 'A' ? classes.selected : ''
					} `}
				>
					<label htmlFor="levela">
						Include level
						<span className={classes.selector__letter}> A </span>
						(Basic)
					</label>

					<input
						onChange={(e) => inputHandler(e)}
						type="radio"
						name="level"
						id="levela"
						data-letter={'A'}
					/>
				</div>
				<div
					className={`${classes.selector__option} ${
						testLevel === 'B' ? classes.selected : ''
					} `}
				>
					<label htmlFor="levelb">
						Include level
						<span className={classes.selector__letter}> B </span>
						(Medium)
					</label>

					<input
						onChange={(e) => inputHandler(e)}
						type="radio"
						name="level"
						id="levelb"
						data-letter={'B'}
					/>
				</div>
				<div
					className={`${classes.selector__option} ${
						testLevel === 'C' ? classes.selected : ''
					} `}
				>
					<label htmlFor="levelc">
						Include level
						<span className={classes.selector__letter}> C </span>
						(Hardest)
					</label>

					<input
						onChange={(e) => inputHandler(e)}
						type="radio"
						name="level"
						id="levelc"
						data-letter={'C'}
					/>
				</div>
			</div>

			<div className={classes.button__container}>
				<div className={classes.test__text}>
					Selected test level:
					<span className={classes.test__level}> {testLevel} </span>
				</div>

				<button
					onClick={() => startTestHandler()}
					className={`${classes.btn__start} ${
						testLevel === '' ? classes.disabled : ''
					}`}
				>
					Start Test
				</button>
			</div>
		</div>
	);
}

export default TestSelector;
