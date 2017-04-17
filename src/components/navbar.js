import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse"> 
          <div className="container-fluid">
            <div className="nav-header">
              <a className="navbar-brand">LOGO</a>
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