import React from 'react';
import { useState } from 'react';
import '../navbar/NavbarStyle.css';
import Nome from './nomeicones/Nome';


const Navbar = ({ onHome, onSobre, onSkills, onProjetos, state, toggle }) => {

  const [nomeAtivo, setNomeAtivo] = useState(null);

  const handleMouseOver = (nome) => {
    setNomeAtivo(nome);
  };

  const handleMouseOut = () => {
    setNomeAtivo(null);
  };

  return (
    <nav className="navbar">
      <div className="div-icone-puxar-nav" onClick={toggle}></div>

      <div className={"div-principal-nav " + (state ? "ativo" : "")}>
        <ul>
          <li onClick={onHome} onMouseEnter={()=>{handleMouseOver("Home")}} onMouseLeave={handleMouseOut}>
          <i className="bi bi-house-fill"></i>
            <Nome nome={"Home"} visivel={nomeAtivo === "Home"}/>
          </li>

          <li onClick={onSobre} onMouseEnter={()=>{handleMouseOver("Sobre")}} onMouseLeave={handleMouseOut}>
            <i className="fa-solid fa-user"></i>
            <Nome nome={"Sobre"} visivel={nomeAtivo === "Sobre"}/>
          </li>

          <li onClick={onSkills} onMouseEnter={()=>{handleMouseOver("Skills")}} onMouseLeave={handleMouseOut}>
            <i className="fa-solid fa-baseball-bat-ball"></i>
            <Nome nome={"Skills"} visivel={nomeAtivo === "Skills"}/>
          </li>

          <li onClick={onProjetos} onMouseEnter={()=>{handleMouseOver("Projetos")}} onMouseLeave={handleMouseOut}>
            <i className="bi bi-code-square"></i>
            <Nome nome={"Projetos"} visivel={nomeAtivo === "Projetos"}/>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;