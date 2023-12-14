import React from 'react';
import '../home/HomeStyle.css';

import { Button } from '../../componentesStyle/Button.style.jsx';

const Home = () => {
  return (
    <section className="home">  
        <div className="conteudo-text-home">
            <p>Holá,</p>
               
            <h1>Me chamo Ryan, Sou um desenvolvedor Front-end.</h1>
                
            <p>Seja bem vindo(a) ao meu portfólio.</p>
        </div>
        
        <div className="area-sobre-home">
            <Button>Sobre Mim!</Button>
                
            <div className="icons-social">
                <a href="">
                    <i className="fa-solid fa-user"></i>
                </a>
         
                <a href="">
                    <i className="fa-solid fa-user"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home;