import React from 'react';
import { useState } from 'react';
import '../navbar/NavbarStyle.css';


const Navbar = ({onHome, onSobre, onSkills, onProjetos, state, toggle}) => {

  return (
    <nav className="navbar">
      <div className="div-icone-puxar-nav" onClick={toggle}></div>
       
      <div className={"div-principal-nav " + (state ? "ativo":"")}>
        <ul>
          <li onClick={onHome} ><i className="fa-solid fa-user"></i></li>
           
          <li onClick={onSobre} ><i className="fa-solid fa-user"></i></li>
            
          <li onClick={onSkills} ><i className="fa-solid fa-user"></i></li>
            
          <li onClick={onProjetos} ><i className="fa-solid fa-user"></i></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;