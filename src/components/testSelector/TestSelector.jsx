import React, { useContext } from 'react';
import { PlacementTestContext } from '../../context';
import classes from '../testSelector/TestSelector.module.scss';

function TestSelector({ startTest }) {
	const { testLevel, setTestLevel } = useContext(PlacementTestContext);

	const inputHandler = (e) => {
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

			<div className={classes.selector__explanation}>
				<p>
					If your level is below Pre-Intermediate, choose option{' '}
					<span> A </span>{' '}
				</p>
				<p>
					If your level is above Pre-Intermediate, choose option{' '}
					<span> B </span>{' '}
				</p>
			</div>

			<div className={classes.selector__options}>
				<div
					className={`${classes.selector__option} ${
						testLevel === 'A' ? classes.selected : ''
					} `}
				>
					<label htmlFor="levela">
						Test level
						<span className={classes.selector__letter}> A </span>
						(50 questions)
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
						Test level
						<span className={classes.selector__letter}> B </span>
						(100 questions)
					</label>

					<input
						onChange={(e) => inputHandler(e)}
						type="radio"
						name="level"
						id="levelb"
						data-letter={'B'}
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
