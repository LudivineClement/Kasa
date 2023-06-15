import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Nav = () => {
    return (
        <header className="navigation">
            <img src={logo} alt="logo Kasa" />
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                   <li>Accueil</li> 
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                   <li>A propos</li> 
                </NavLink>
            </ul>
        </header>
    );
};

export default Nav;