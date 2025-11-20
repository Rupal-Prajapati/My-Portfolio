import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Header() {
  return (
    <nav>
      {/* Use Link to navigate to the home route */}
      <Link to="/" className="logo">My Portfolio</Link>
      <ul>
        {/* Replace <li><a href="#link">...</a></li> with <li><Link to="/path">...</Link></li> */}
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;