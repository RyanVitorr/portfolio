import React, { useState } from 'react';
import "../skills/SkillsStyle.css";


const Skills = () => {

  const [skills, setSkills] = useState([
    {
      id: 1,
      nome: "HTML5",
      icone: "fa-brands fa-html5",
      level: 4,
      texto: "/* A Linguagem de Marcação de Hipertexto (HTML) é a linguagem de marcação mais utilizada para criar aplicações e páginas na web. */"
    },
    {
      id: 2,
      nome: "CSS3",
      icone: "fa-brands fa-css3",
      level: 4,
      texto: "/* CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets (ou simplesmente CSS), onde se define estilos para seu projeto web. */"
    },
    {
      id: 3,
      nome: "JavaScript",
      icone: "fa-brands fa-js",
      level: 4,
      texto: "/* JavaScript é uma linguagem de programação de script em alto nível. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. */"
    }, 
    {
      id: 4,
      nome: "React",
      icone: "fa-brands fa-react",
      level: 3,
      texto: "/* O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. */"
    }, 
    {
      id: 5,
      nome: "Node.js",
      icone: "fa-brands fa-node",
      level: 2,
      texto: "/* Node.js é um software de código aberto, multiplataforma, que permite a execução de códigos JavaScript fora de um navegador web. */"
    },
    {
      id: 6,
      nome: "SQL",
      icone: "bi bi-filetype-sql",
      level: 3,
      texto: "/* SQL é uma linguagem de domínio específico desenvolvida para gerenciar dados relacionais em um sistema de gerenciamento de banco de dados. */"
    }
  ]);

  /*  
    {
      id: ,
      nome: ,
      icone: ,
      level: ,
      texto:
    }, 

  */

  return (
    <section className="skills">
      <div className="conteudo-skills">
        <div className="titulo-skills">
          <h2>Skills</h2>
          <span className="linha-titulo"></span>
        </div>

        <div className="infos-skills">
          {skills.map((skill) => (
            <div key={skill.id} className="card-skills">
              <div className="nome-skill">
                <h1>{skill.nome}</h1>
              </div>

              <div className="icone-skill">
                <i className={skill.icone}></i>
              </div>
                
              <div key={skill.id} className="level-skill">
                {Array.from({ length: skill.level }, (_, index) => (
                  <i className="fa-solid fa-star" key={index}></i>
                ))}
              </div>
               
              <div className='info-hover-skill'>
                <p>/* Passe o mouse no card para saber mais! */</p>

              </div>

              <div className='text-sobre-skill'>
                <p>{skill.texto} </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Skills;