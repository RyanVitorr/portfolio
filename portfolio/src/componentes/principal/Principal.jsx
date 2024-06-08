import React, { useState } from 'react';
import './PrincipalStyle.css';

import Home from '../home/Home.jsx';
import Sobre from '../sobre/Sobre.jsx';
import Skills from '../skills/Skills.jsx';
import Projetos from '../projetos/Projetos.jsx'

const Principal = ({home, sobre, skills, projetos, onSobre }) => {
   
  return (
    <section className="principal">
      {home && (
        <Home sobre={sobre} onSobre={onSobre}/>
      )}
      {sobre && (
        <Sobre />
      )}
      {skills && (
        <Skills />
      )}
      {projetos && (
        <Projetos />
      )}
    </section>
  )
}

export default Principal;