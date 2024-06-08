import React from 'react';
import '../nomeicones/NomeStyle.css'

const Nome = ({ nome, visivel }) => {

  const estilo = {
    display: visivel ? 'block' : 'none'
  };

  return (
    <div className='container-nome' style={estilo}>
      <p>{nome}</p>
    </div>
  )
}

export default Nome;