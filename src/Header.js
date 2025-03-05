import React, { useState } from 'react';
import './App.css';
import consultlogo from './images/consultlogo.png'
import { NavLink } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
 
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <header className="App-header">
      <div className="logo">
 
        <img src={consultlogo} alt="HappyConsultancy Logo" />
        <span className="business-name">B&C</span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose size={30} color="#0073e6" /> : <TiThMenu size={30} color="#0073e6" />}
      </div>
      <nav className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
  <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
    Home
  </NavLink>
  <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
    Services
  </NavLink>
  <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
    About
  </NavLink>
  <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
    Contact
  </NavLink>
</nav>
    </header>
  );
}
 
export default Header;