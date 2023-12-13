import { useState } from "react";
import "./App.css";
import { Principal } from './componentesStyle/Principal.style.jsx';
import { Wrapper } from "./componentesStyle/Wrapper.style.jsx";
import { Nav } from "./componentesStyle/Nav.style.jsx";

function App() {
  return (
    <Wrapper>
      <Principal>
        <div className="conteudo-text-principal">
          <p><strong>Holá,</strong></p>
          
          <h1>Me chamo Ryan, Sou um desenvolvedor Front-end.</h1>
          
          <p><strong>Seja bem vindo(a) ao meu portfólio.</strong></p>
        </div>
      </Principal>

      <Nav>
        <div className="div-icone-puxar-nav">
          <p></p>
        </div>
        <div className="div-principal-nav">
          <ul>
            <li><i class="fa-solid fa-user"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
          </ul>
        </div>
      </Nav>
    </Wrapper>

  ) 
   
  
};

export default App;
