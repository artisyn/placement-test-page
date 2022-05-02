import React, { useState } from 'react';
import classes from '../navigation/Navigation.module.scss';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Navigation() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState('about');

	const openMenu = () => {
		setMenuOpen(true);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const changePage = (val) => {
		setCurrentPage(val);
		setMenuOpen(false);
	};

	return (
		<nav className={classes.navigation}>
			<div className={classes.logo}>LOGO</div>
			<div
				className={`${classes.pages__container} ${
					menuOpen ? classes.menu__open : ''
				}`}
			>
				<Link
					onClick={() => changePage('about')}
					className={`${classes.link} ${
						currentPage === 'about' ? classes.active : ''
					}`}
					to={'/about'}
				>
					About
				</Link>
				<Link
					onClick={() => changePage('guide')}
					className={`${classes.link} ${
						currentPage === 'guide' ? classes.active : ''
					}`}
					to={'/guide'}
				>
					Test Guide
				</Link>
				<Link
					onClick={() => changePage('test')}
					className={`${classes.link} ${classes.link__main} ${
						currentPage === 'test' ? classes.active : ''
					}`}
					to={'/test'}
				>
					Test
				</Link>
				{menuOpen && (
					<AiOutlineClose
						onClick={closeMenu}
						className={classes.close__btn}
					/>
				)}
			</div>
			<div
				className={`${classes.burger} ${
					menuOpen ? classes.no__opacity : ''
				}`}
			>
				<BiMenuAltRight onClick={openMenu} />
			</div>
		</nav>
	);
}

export default Navigation;
