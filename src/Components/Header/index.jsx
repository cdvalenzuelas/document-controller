// Dependencies
import React from "react";

// Styles
import "./styles.css";

// Components
import SearchBar from '../SearchBar'

// Images
import menuIcon from "./menuIcon.svg";
import userIcon from "./userIcon.svg";

const Header = () => ( 
  <>
    <header className="header">
      <button className="sidebar">
        <img src={menuIcon} alt="menu" />
      </button>
      <SearchBar />
      <div className="user">
        <h3>Danilo</h3>
        <img className="avatar" src={userIcon} alt="search" />
      </div>
    </header>
    <div className="header-shadow"></div>
  </>
);


export default Header;
