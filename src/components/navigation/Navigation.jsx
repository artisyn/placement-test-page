import React from 'react';
import classes from '../navigation/Navigation.module.scss';
import { Link } from 'react-router-dom';
import About from '../../pages/About';

function Navigation() {
	return (
		<nav className={classes.navigation}>
			<div>Logo</div>
			<div className={classes.pages__container}>
				<Link to={'/about'}>About</Link>
				<Link to={'/guide'}>Test Guide</Link>
				<Link to={'/test'}>Test</Link>
			</div>
		</nav>
	);
}

export default Navigation;
