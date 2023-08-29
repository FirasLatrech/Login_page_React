import React from 'react';
import {useState,useEffect} from 'react'
import "./Home.css"
import { NavLink } from "react-router-dom";
const Home = () => {
  const[stat,setStat]=useState(true)
  const changeStat =()=>{
    setStat(!stat)
  }

  

  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  return (
    <div className={stat ? 'body' : "body nav-active"}>
      <>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="./style.css" />
  {/* partial:index.partial.html */}
  <header className="cd-header">
    <div className="header-wrapper">
      <div className="logo-wrap">
        <a href="/Home" className="">
          <span>Firas </span>Latrach
        </a>
      </div>
      <div className="nav-but-wrap">
        <div className= "menu-icon hover-target"   onClick={changeStat}>
          <span className="menu-icon__line menu-icon__line-left" />
          <span className="menu-icon__line" />
          <span className="menu-icon__line menu-icon__line-right" />
        </div>
      </div>
    </div>
  </header>
  <div className="nav">
      <div className="nav__content">
        <ul className="nav__list">
          <li className={`nav__list-item ${activeNavItem === 0 ? 'active-nav' : ''}`}>
            <NavLink to="/Home" className="hover-target" onClick={() => handleNavItemClick(0)}>
              Home
            </NavLink>
          </li>
          <li className={`nav__list-item ${activeNavItem === 1 ? 'active-nav' : ''}`}>
            <NavLink to="/" className="hover-target" onClick={() => handleNavItemClick(1)}>
              Portfolio
            </NavLink>
          </li>
          <li className={`nav__list-item ${activeNavItem === 2 ? 'active-nav' : ''}`}>
            <NavLink to="/" className="hover-target" onClick={() => handleNavItemClick(2)}>
              Studio
            </NavLink>
          </li>
          <li className={`nav__list-item ${activeNavItem === 3 ? 'active-nav' : ''}`}>
            <NavLink to="/" className="hover-target" onClick={() => handleNavItemClick(3)}>
              News
            </NavLink>
          </li>
          <li className={`nav__list-item ${activeNavItem === 4 ? 'active-nav' : ''}`}>
            <NavLink to="/" className="hover-target" onClick={() => handleNavItemClick(4)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  <div className="section full-height over-hide">
    
  </div>
  

</>

    </div>
  );
}

export default Home;
