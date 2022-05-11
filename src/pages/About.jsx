import React from 'react';
import classes from './About.module.scss';

function About() {
	return (
		<div className={classes.main__container}>
			<h1>About</h1>
			<p>
				Are you planning to take an English course, but don't know where
				to begin?
			</p>
			<p>
				Our website is the right place to start the journey! Not only
				can you find out your real level of language proficiency, but
				you can also have some fun with various vocabulary tests. Enjoy!
			</p>
		</div>
	);
}

export default About;
