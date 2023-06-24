import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="navigation">
      <NavLink to="/">
        <img src={logo} alt="logo Kasa" />
      </NavLink>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Navbar;