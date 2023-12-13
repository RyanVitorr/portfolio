import React from 'react';
import { Button } from "./componentesStyle/button.style.jsx";

const Principal = () => {
  return (
    <section className="principal">
        <div className="conteudo-text-principal">
            <p>Holá,</p>
      
            <h1>Me chamo Ryan, Sou um desenvolvedor Front-end.</h1>
      
            <p>Seja bem vindo(a) ao meu portfólio.</p>
        </div>

        <div className="area-sobre-principal">
            <Button>Sobre Mim!</Button>
      
            <div className="icons-social">
                <a href="">
                    <i class="fa-solid fa-user"></i>
                </a>
                
                <a href="">
                    <i class="fa-solid fa-user"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Principal;