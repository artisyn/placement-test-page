import React from 'react';
import classes from './TestGuide.module.scss';

export default function TestGuide() {
	return (
		<div className={classes.main__container}>
			<h1>Test Guide</h1>

			<h2>
				<span className={classes.text__heading}>
					General Testing Tips
				</span>
			</h2>
			<p>
				There are two keys to success when taking any standardized test:
				knowing the content, and knowing the form. If you want to work
				on the content, click here to review the English materials, or
				here to review the math materials. Stay right here on this page,
				though, if you want to know the form of the exam and the most
				effective test-taking strategies for the Accuplacer.
			</p>
			<h2>
				<span className={classes.text__number}>#1:</span>
				<span className={classes.text__heading}>Take Your Time</span>
			</h2>
			<p>
				The single biggest advantage you have in the Accuplacer is time.
				Since it is an untimed test, you have all the time you could ask
				for. You may be tempted to rush through so that you get it over
				with as soon as you can, but resist the urge. Be slow and
				methodical, and do your absolute best to get every single answer
				correct. Specifically, be sure to read every word of the test –
				all instructions, all questions, and all multiple choice
				answers. Reread any passages that are confusing, and reread your
				own answers before clicking “Confirm” to submit your answer. If
				you need a break during the test, take it. As long as you let
				the proctor know, you are free to get up, stretch your legs, and
				get a drink of water or visit the restroom. You are even allowed
				to pause the test and finish it on a later day if you feel you
				need more time.
			</p>

			<h2>
				<span className={classes.text__number}>#2:</span>
				<span className={classes.text__heading}>Breathe</span>
			</h2>
			<p>
				Nearly everyone gets nervous when taking a test. It’s natural.
				If you feel overwhelmed during the exam, take a few deep
				breaths. Since the test has no time limit, you can afford to
				look away from the screen or close your eyes, breathe in and
				breathe out, and refocus. Remind yourself why you are taking the
				test and why you want to go to college. Channel your nervousness
				into focusing on doing your best.
			</p>

			<h2>
				<span className={classes.text__number}>#3:</span>
				<span className={classes.text__heading}>
					Do the Sample Questions
				</span>
			</h2>
			<p>
				Before each Accuplacer test, you will be given 1-2 sample
				questions so that you understand the format. Take these sample
				questions seriously, using them as an opportunity to prime
				yourself for the actual questions. If you get the sample
				question wrong, don’t worry. Learn from the mistake and think
				about why it was wrong. If you get the sample question right,
				way to go! You’re right on track.
			</p>

			<h2>
				<span className={classes.text__number}>#4:</span>
				<span className={classes.text__heading}>
					Eliminate Obvious Outliers
				</span>
			</h2>
			<p>
				As with any multiple choice test, each question on the
				Accuplacer usually has 1-2 multiple choice options that will
				stand out as obviously wrong. Use process of elimination to
				narrow your final selection. That way, if you truly cannot
				figure out the answer, at least you can guess with a 33-50%
				chance of getting it right (instead of a random 25% guess). If
				it is difficult for you to do process of elimination in your
				head, write out the options on scratch paper and cross off the
				ones that are definitely wrong.
			</p>
		</div>
	);
}
