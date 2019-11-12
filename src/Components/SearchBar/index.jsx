// Dependencies
import React from 'react'

// Styles
import './styles.css'

// Images
import searchIcon from './searchIcon.svg'

const SearchBar = () => (
  <form className="search">
    <input type="text" placeholder="Search" />
    <button className="search__glass">
      <img src={searchIcon} alt="menu" />
    </button>
  </form>
)

export default SearchBar
