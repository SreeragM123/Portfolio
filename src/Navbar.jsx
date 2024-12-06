import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Navbar = () => {
  return (
<header>
    <div class="navbar-container">
        <nav class="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about" >About</Link></li>
              <li><Link to="/contact" >Resume</Link></li>
            </ul>
        </nav>
        <div class="contact-info">
            <a href="tel:7745553021">📞 1234567890</a>
        </div>
    </div>
</header>

  );
};

export default Navbar;

