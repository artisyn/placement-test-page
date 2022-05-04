import React, { useState } from 'react';
import classes from '../testSelector/TestSelector.module.scss';

function TestSelector() {
	const [testLevel, setTestLevel] = useState('A');

	const inputHandler = (e) => {
		if (e.target.checked) {
			setTestLevel(e.target.name);
		}
		if (!e.target.checked && e.target.name === 'C') setTestLevel('B');
		if (!e.target.checked && e.target.name === 'B') setTestLevel('A');
	};

	return (
		<div className={classes.selector__container}>
			<h2>Select Test level</h2>
			<div className={classes.selector__options}>
				<div
					className={`${classes.selector__option} ${classes.disabled} ${classes.selected}`}
				>
					<label htmlFor="levela">
						Include level
						<span className={classes.selector__letter}> A </span>
						(Basic)
					</label>

					<input
						type="checkbox"
						checked={true}
						name=""
						id="levela"
						disabled
					/>
				</div>
				<div
					className={`${classes.selector__option}  ${
						testLevel === 'C' ? classes.disabled : ''
					} ${testLevel !== 'A' ? classes.selected : ''}`}
				>
					<label htmlFor="levelb">
						Include level
						<span className={classes.selector__letter}> B </span>
						(Medium)
					</label>

					<input
						onChange={(e) => inputHandler(e)}
						type="checkbox"
						name="B"
						id="levelb"
					/>
				</div>
				<div
					className={`${classes.selector__option} ${
						testLevel === 'A' ? classes.disabled : ''
					} ${testLevel === 'C' ? classes.selected : ''}`}
				>
					<label htmlFor="levelc">
						Include level
						<span className={classes.selector__letter}> C </span>
						(Hardest)
					</label>

					<input
						onChange={(e) => inputHandler(e)}
						type="checkbox"
						name="C"
						id="levelc"
					/>
				</div>
			</div>

			<div className={classes.button__container}>
				<div className={classes.test__text}>
					Selected test level:
					<span className={classes.test__level}> {testLevel} </span>
				</div>

				<button className={classes.btn__start}> Start Test</button>
			</div>
		</div>
	);
}

export default TestSelector;
