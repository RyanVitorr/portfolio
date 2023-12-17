import React from 'react';
import "./CardSkillStyle.css";

const CardSkill = () => {
  return (
    <div className="card-skills">
        <div className="nome-skill">
            <h1>HTML5</h1>
        </div>

        <div className="icone-skill">
            <i className="fa-brands fa-html5"></i>
        </div>
        <div className="level-skill">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>

        <div className='info-hover-skill'>
            <p>/* Passe o mouse no card para saber mais! */</p>

        </div>

        <div className='text-sobre-skill'>
            <p>/* A Linguagem de Marcação de Hipertexto (HTML) é a linguagem de marcação mais utilizada para criar aplicações e páginas na web. */ </p>
        </div>

    </div>
  )
};

export default CardSkill;