// Dependencies
import React from 'react'

//Styles
import './layout.css'
import './styles.css'

// Images
import searchIcon from './searchIcon.svg'
import menuIcon from './menuIcon.svg'
import userIcon from './userIcon.svg'

function Header() {
	return (
		<header className="header">		
			<button className="sidebar">
				<img src={menuIcon} alt="menu"/>
			</button>
			<form className="search">
				<input type="text" placeholder="Search"  />
				<button className="sidebar">
					<img src={searchIcon} alt="menu"/>
				</button>
			</form>
			<div className="user">
				<h3>Danilo</h3>
				<img src={userIcon} alt="search" />
			</div>		
		</header>
	);
}

export default Header
