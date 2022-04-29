import React from 'react';
import classes from '../navigation/Navigation.module.scss';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Navigation() {
	return (
		<nav className={classes.navigation}>
			<div className={classes.logo}>LOGO</div>
			<div className={classes.pages__container}>
				<Link className={classes.link} to={'/about'}>
					About
				</Link>
				<Link className={classes.link} to={'/guide'}>
					Test Guide
				</Link>
				<Link className={classes.link} to={'/test'}>
					Test
				</Link>
			</div>
			<div className={classes.burger}>
				<BiMenuAltRight />
			</div>
		</nav>
	);
}

export default Navigation;
