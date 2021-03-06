import React, { useState, useContext } from 'react';
import classes from '../navigation/Navigation.module.scss';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { PlacementTestContext } from '../../context';
import logo from '../../logo.png';

function Navigation() {
	const { currentPage, setCurrentPage } = useContext(PlacementTestContext);

	const [menuOpen, setMenuOpen] = useState(false);
	// const [currentPage, setCurrentPage] = useState('about');

	const openMenu = () => {
		setMenuOpen(true);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const changePage = (val) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setCurrentPage(val);
		setMenuOpen(false);
	};

	return (
		<nav className={classes.navigation}>
			<div className={classes.logo__container}>
				<div className={classes.logo}>
					<img src={logo} alt="Logo" />
				</div>
			</div>

			<div
				className={`${classes.pages__container} ${
					menuOpen ? classes.menu__open : ''
				}`}
			>
				<Link
					onClick={() => changePage('about')}
					className={`${classes.link} ${
						currentPage === 'about' ? classes.active : ''
					} ${menuOpen ? classes.burgerColors : ''}`}
					to={'/about'}
				>
					About
				</Link>
				<Link
					onClick={() => changePage('guide')}
					className={`${classes.link} ${
						currentPage === 'guide' ? classes.active : ''
					} ${menuOpen ? classes.burgerColors : ''}`}
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
					Take Test
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
