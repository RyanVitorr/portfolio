import { useState } from "react";
import { Wrapper } from "../componentes/componentesStyle/Wrapper.style.jsx";
import './stylepage.css';
import Principal from "../componentes/principal/Principal.jsx";
import Navbar from "../componentes/navbar/Navbar.jsx";

function App() {
  const [state, setState] = useState(false);
  const toggle = ()=> {
    setState(!state);
  };

    //function home on/off
    const [home, setHome] = useState(true);
    const onOffHome = ()=> {
      setHome(true);
      setSobre(false);
      setSkills(false);
      setProjetos(false);
      toggle();
    };
  
    //function sobre on/off
    const [sobre, setSobre] = useState();
    const onOffSobre = ()=> {
      setHome(false);
      setSobre(true);
      setSkills(false);
      setProjetos(false);
      toggle();
    };
  
    //function skills on/off
    const [skills, setSkills] = useState();
    const onOffSkills = ()=> {
      setHome(false);
      setSobre(false);
      setSkills(true);
      setProjetos(false);
      toggle();
    };
  
    //function projetos on/off
    const [projetos, setProjetos] = useState();
    const onOffProjetos = ()=> {
      setHome(false);
      setSobre(false);
      setSkills(false);
      setProjetos(true);
      toggle();
    };
  return (
    <Wrapper>
      <Principal home={home} 
      sobre={sobre}
      skills={skills}
      projetos={projetos}
      onSobre={onOffSobre}
      />
    
      <Navbar onHome={onOffHome} 
      onSobre={onOffSobre} 
      onSkills={onOffSkills} 
      onProjetos={onOffProjetos}
      state={state}
      toggle={toggle}
      />

    </Wrapper>
  ) 
   
  
};

export default App;
