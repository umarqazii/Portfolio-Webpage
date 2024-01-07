import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'; // Import the logo image
import '../Navbar.css'; // Create this file for custom styles if needed


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* adding image to the brand */}
        <img src={logo} alt="logo" width="100" height="110" className="d-inline-block align-text-top" style={{ marginRight: '5px' }}/>
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Audiowide, sans-serif' }}>Umar Qazi</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} style={{ transition: 'max-height 0.3s ease-in-out' }}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontFamily: 'Audiowide, sans-serif' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" style={{ fontFamily: 'Audiowide, sans-serif' }}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" style={{ fontFamily: 'Audiowide, sans-serif' }}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ fontFamily: 'Audiowide, sans-serif' }}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
