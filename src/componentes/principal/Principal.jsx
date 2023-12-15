import React, { useState } from 'react';
import '../principal/PrincipalStyle.css';


import Home from '../home/Home.jsx';
import Sobre from '../sobre/Sobre.jsx';

const Principal = () => {
  //function home on/off
  const [home, setHome] = useState(false);
  function onOffHome () {
    setHome(true);
    setSobre(false);
    setSkills(false);
    setProjetos(false);
  };

  //function sobre on/off
  const [sobre, setSobre] = useState(true);
  function onOffSobre () {
    setHome(false);
    setSobre(true);
    setSkills(false);
    setProjetos(false);
  };

  //function skills on/off
  const [skills, setSkills] = useState();
  function onOffSkills () {
    setHome(false);
    setSobre(false);
    setSkills(true);
    setProjetos(false);
  };

  //function projetos on/off
  const [projetos, setProjetos] = useState();
  function onOffProjetos() {
    setHome(false);
    setSobre(false);
    setSkills(false);
    setProjetos(true);
  };
    
  return (
    <section className="principal">
      {home && (
        <Home />
      )}
      {sobre && (
        <Sobre />
      )}
      
    </section>
  )
}

export default Principal;