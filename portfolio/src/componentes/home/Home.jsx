import React from 'react';
import '../home/HomeStyle.css';
import { Button } from '../componentesStyle/Button.style';

const Home = ({ sobre, onSobre }) => {
  return (
    <section className="home">  
        <div className="conteudo-text-home">
            <p>Holá,</p>
               
            <h1>Me chamo Ryan, Sou um desenvolvedor Front-end.</h1>
                
            <p>Seja bem vindo(a) ao meu portfólio.</p>
        </div>
        
        <div className="area-sobre-home">
            <Button onClick={onSobre}>Sobre Mim!</Button>
                
            <div className="icons-social">
                <a href="https://github.com/RyanVitorr" target='_blank' rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                </a>
         
                <a href="https://www.linkedin.com/in/ryan-vitor-5b0522288/" target='_blank' rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home;