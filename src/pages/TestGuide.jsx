import React from 'react';
import classes from './TestGuide.module.scss';
import { CgDanger } from 'react-icons/cg';

export default function TestGuide() {
	return (
		<div className={classes.main__container}>
			<h1>Test Guide</h1>

			<p>
				Our Placement test is divided into two parts. If you think that
				you know only a bit more than just the basics, you don't have to
				waste your time on the whole test and should only do Level A
				Test, which contains 50 questions.
			</p>
			<p>
				However, if you suspect that your level exceeds
				Pre-Intermediate, then we recommend doing Level B Test which has
				100 questions in it.
			</p>

			<p>
				<span>
					N.B. <CgDanger className={classes.special__symbol} />
				</span>
				To get a more reliable interpretation of the results please DO
				NOT tick any option randomly and just leave it blank.
			</p>

			<p>
				As soon as you finish the test your will have the option to send
				it to our teachers who you can contact and ask for advice
				regarding improving your English, choosing the relevant course
				or textbooks, etc.
			</p>
		</div>
	);
}
