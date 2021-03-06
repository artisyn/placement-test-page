import React, { useContext, useEffect, useRef, useState } from 'react';
import { PlacementTestContext } from '../../context';
import classes from '../testSelector/TestSelector.module.scss';

function TestSelector({ startTest }) {
	const { testLevel, setTestLevel, userResults, setUserResults } =
		useContext(PlacementTestContext);
	const [userNameInput, setUserNameInput] = useState(null);

	const nameInput = useRef('');
	const surnameInput = useRef('');

	const inputHandler = (e) => {
		if (e.target.checked) {
			setTestLevel(e.target.dataset.letter);
		}
	};

	const startTestHandler = () => {
		if (testLevel === '' || !nameInput.current.value) return;

		const objCopy = { ...userResults };
		objCopy.name = `${nameInput.current.value}`;
		objCopy.surname = `${surnameInput.current.value}`;
		setUserResults(objCopy);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		startTest();
	};
	useEffect(() => {
		if (userResults.name) {
			nameInput.current.value = userResults.name;
			surnameInput.current.value = userResults.surname;
			setUserNameInput(userResults.name);
		}
	}, []);

	return (
		<div className={classes.selector__container}>
			<div className={classes.username__container}>
				<div className={classes.input__container}>
					<label htmlFor="userName">Enter Name</label>
					<input
						type="text"
						name=""
						id="userName"
						placeholder="your name.."
						ref={nameInput}
						onChange={() =>
							setUserNameInput(nameInput.current.value)
						}
					/>
				</div>

				<div className={classes.input__container}>
					<label htmlFor="userSurname">Enter Surname</label>
					<input
						type="text"
						name=""
						id="userSurname"
						placeholder="your surname .."
						ref={surnameInput}
					/>
				</div>
			</div>

			<h2>Select Test level</h2>

			<div className={classes.selector__explanation}>
				<p>
					If your level is below Pre-Intermediate, choose option
					<span> A </span>
				</p>
				<p>
					If your level is above Pre-Intermediate, choose option
					<span> B </span>
				</p>
			</div>

			<div className={classes.selector__options}>
				<div
					className={`${classes.selector__option} ${
						testLevel === 'A' ? classes.selected : ''
					} `}
				>
					<label htmlFor="levela">
						Level{' '}
						<span className={classes.selector__letter}> A </span>{' '}
						Test (50 questions)
					</label>

					<input
						onChange={(e) => inputHandler(e)}
						type="radio"
						name="level"
						id="levela"
						checked={testLevel === 'A'}
						data-letter={'A'}
					/>
				</div>
				<div
					className={`${classes.selector__option} ${
						testLevel === 'B' ? classes.selected : ''
					} `}
				>
					<label htmlFor="levelb">
						Level{' '}
						<span className={classes.selector__letter}> B </span>{' '}
						Test (100 questions)
					</label>

					<input
						onChange={(e) => inputHandler(e)}
						type="radio"
						name="level"
						id="levelb"
						checked={testLevel === 'B'}
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
					} ${
						testLevel !== '' && !userNameInput ? classes.noName : ''
					}`}
				>
					Start Test
				</button>
			</div>
		</div>
	);
}

export default TestSelector;
