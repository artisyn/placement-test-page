import React from 'react';
import classes from '../footer/Footer.module.scss';
import { IoHeartCircle } from 'react-icons/io5';

function Footer() {
	return (
		<footer className={classes.footer__container}>
			<p> © Lingua Plus. All rights reserved. 2022</p>
			<p>
				Made with
				<IoHeartCircle
					style={{ verticalAlign: 'middle', margin: ' 0 .5rem' }}
				/>
				by
				<a className={classes.link} href="https://github.com/artisyn">
					artisyn
				</a>
			</p>
		</footer>
	);
}

export default Footer;
