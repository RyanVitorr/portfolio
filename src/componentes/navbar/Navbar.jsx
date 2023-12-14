import React from 'react';
import '../navbar/NavbarStyle.css';

import Principal from '../principal/Principal';

const Navbar = (home, ) => {
  return (
    <nav className="navbar">
        <div className="div-icone-puxar-nav"></div>
       
        <div className="div-principal-nav">
          <ul>
            <li><i className="fa-solid fa-user"></i></li>
           
            <li><i className="fa-solid fa-user"></i></li>
            
            <li><i className="fa-solid fa-user"></i></li>
            
            <li><i className="fa-solid fa-user"></i></li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar;