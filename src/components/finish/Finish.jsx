import React, { useContext, useEffect, useState } from 'react';
import { PlacementTestContext } from '../../context';
import classes from '../finish/Finish.module.scss';
import MailTo from '../mailto/MailTo';
import { EMAIL } from '../../Data';
import { BiMailSend } from 'react-icons/bi';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { FaRegThumbsUp } from 'react-icons/fa';

function Finish({ startTestOver }) {
	const { userResults, setUserResults } = useContext(PlacementTestContext);

	const [str, setStr] = useState('');
	const [strForMail, setStrForMail] = useState('');

	const handleTryAgain = () => {
		console.log('try again');
		setUserResults({
			testLevel: `${userResults.testLevel}`,
			totalCorrect: 0,
			level: '',
			answers: {},
			name: `${userResults.name}`,
			surname: `${userResults.surname}`,
			date: '',
		});

		startTestOver();
	};

	useEffect(() => {
		let tempStr = '';
		for (const [key, value] of Object.entries(userResults.answers)) {
			tempStr += `${key} : ${value} / `;
		}
		setStr(tempStr);
	}, []);

	useEffect(() => {
		setStrForMail(` %0A%0A 
        Name: ${userResults.name} ${userResults.surname} %0A%0A
        Test Level: ${userResults.testLevel} %0A%0A
        Total Correct Answers: ${userResults.totalCorrect} %0A%0A
        Language Level: ${userResults.level} %0A%0A
        Date: ${userResults.date} %0A%0A
        Students Answers: ${str} 
        `);
	}, [str]);

	return (
		<div className={classes.finish__container}>
			<h2>
				Congratulations on finishing the test !{' '}
				<FaRegThumbsUp className={classes.icon__thumb} />{' '}
			</h2>
			<div className={classes.results__container}>
				<h3>Your Results : </h3>

				<p>
					Test Level:
					<span className={classes.result}>
						{userResults.testLevel}
					</span>
				</p>
				<p>
					Total Correct Answers:
					<span className={classes.result}>
						{userResults.totalCorrect}
					</span>
				</p>
				<p>
					Your Language Level:
					<span className={classes.result}>{userResults.level}</span>
				</p>
				<p>
					Date:
					<span className={classes.result}>{userResults.date}</span>
				</p>
				<p>Your Answers: {str} </p>
			</div>

			<div className={classes.buttons__container}>
				<MailTo
					email={EMAIL}
					subject={`Placement Test Results ${userResults.name}`}
					body={strForMail}
				>
					<button className={classes.mail__btn}>
						<span className={classes.swapWord}>Mail Results</span>
						<BiMailSend className={classes.icon__mail} />
					</button>
				</MailTo>

				<button
					onClick={() => handleTryAgain()}
					className={classes.try__btn}
				>
					{' '}
					<span className={classes.swapWord}>Try Again</span>{' '}
					<BsArrowCounterclockwise className={classes.icon__try} />{' '}
				</button>
			</div>
		</div>
	);
}

export default Finish;
