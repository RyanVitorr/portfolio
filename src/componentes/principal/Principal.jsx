import React, { useState } from 'react';
import '../principal/PrincipalStyle.css';
import App from '../../App.jsx';

import Home from '../home/Home.jsx';
import Sobre from '../sobre/Sobre.jsx';
import Skills from '../skills/Skills.jsx';

const Principal = ({home, sobre, skills, onSobre}) => {
   
  return (
    <section className="principal">
      {home && (
        <Home onSobre={onSobre}/>
      )}
      {sobre && (
        <Sobre />
      )}
      {skills && (
        <Skills />
      )}
    </section>
  )
}

export default Principal;