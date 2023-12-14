import React, { useState } from 'react';
import '../principal/PrincipalStyle.css';


import Home from '../home/Home.jsx';

const Principal = () => {
  //function home on/off
  const [home, setHome] = useState(true);
  function onOffHome () {
    setHome(!home);
    setSobre(false);
    setSkills(false);
    setProjetos(false);
  };

  //function sobre on/off
  const [sobre, setSobre] = useState();
  function onOffSobre () {
    setHome(false);
    setSobre(!sobre);
    setSkills(false);
    setProjetos(false);
  };

  //function skills on/off
  const [skills, setSkills] = useState();
  function onOffSkills () {
    setHome(false);
    setSobre(false);
    setSkills(!skills);
    setProjetos(false);
  };

  //function projetos on/off
  const [projetos, setProjetos] = useState();
  function onOffProjetos() {
    setHome(false);
    setSobre(false);
    setSkills(false);
    setProjetos(!projetos);
  };
    
  return (
    <section className="principal">
      {home && (
        <Home />
      )}
    </section>
  )
}

export default Principal;