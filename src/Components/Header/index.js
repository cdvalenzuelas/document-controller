import React from 'react'
import './styles.css'
import image from './searchIcon.svg'

function Header() {
	return (
		<header className="header">
			<button className="sidebar">+</button>
			<input type="text" placeholder="Seach" className="search"/>			
			<img src={image} alt="search" className="user"/>										
		</header>
	)
}

export default Header
