import React from 'react';
import {Link} from 'react-router';

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse"> 
          <div className="container-fluid">
            <div className="nav-header">
              <Link to="/" className="navbar-brand">LOGO</Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">About Me</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>
        </nav>  
    );
}

export default Navbar;