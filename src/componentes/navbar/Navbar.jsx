import React from 'react';
import { useState } from 'react';
import '../navbar/NavbarStyle.css';

import Principal from '../principal/Principal';

const Navbar = () => {
  const [state, setState] = useState(false);
  const toggle = ()=> {
    setState(!state);
  };

  return (
    <nav className="navbar">
      <div className="div-icone-puxar-nav" onClick={toggle}></div>
       
      <div className={"div-principal-nav " + (state ? "ativo":"")}>
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