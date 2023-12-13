import { useState } from "react";
import "./App.css";
import { Wrapper } from "./componentesStyle/Wrapper.style.jsx";
import Principal from "./componentes/Principal.jsx";
import Navbar from "./componentes/Navbar.jsx";


function App() {
  return (
    <Wrapper>
      <Principal />
    
      <Navbar />
    </Wrapper>
  ) 
   
  
};

export default App;
