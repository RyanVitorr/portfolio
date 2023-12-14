import { useState } from "react";
import "./App.css";
import { Wrapper } from "./componentesStyle/Wrapper.style.jsx";
import Principal from "./componentes/principal/Principal.jsx";
import Navbar from "./componentes/navbar/Navbar.jsx";


function App() {
  
  return (
    <Wrapper>
      <Principal />
    
      <Navbar />
    </Wrapper>
  ) 
   
  
};

export default App;
