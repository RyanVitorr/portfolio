import React from 'react';
import { useState } from 'react';

const CardProjetos = ({ projeto }) => {

    const [state, setState] = useState(0);
    const [saibaMais, setSaibaMais] = useState("Saber Mais!");

    const handleClick = (id) => {
        setState(id === state ? null : id);
        setSaibaMais(id === state ?'Saber Mais!':'Esconder Saber Mais!' )
       
    };


    return (
        <div className='card-projetos'>
            <div className='container-projeto'>
                <div className='img-projeto'>
                    <img src={projeto.img} />
                </div>
            </div>

            <div className={"texto " + (state === projeto.id ? "ativo " : "")}>
                <p>{projeto.texto}</p>
                <p>Tecnologias: {projeto.tecnologias}</p>
            </div>

            <div className='infos'>
                <div className='nome-site'>
                    <div className='nome-projeto'>
                        <h1>{projeto.nome}</h1>
                        <div className={'status ' + (projeto.completo ? 'completo' : 'incompleto')}>
                            <i className={projeto.completo ? 'bi bi-check-lg' : 'bi bi-exclamation-lg'}></i>
                        </div>
                    </div>
                    <div className='Link-projeto'>
                        <a href={projeto.link} target='_blank' rel="noopener noreferrer">Ir para o site</a>
                    </div>
                </div>

                <div className='saiba-mais' onClick={() => { handleClick(projeto.id) }}>
                    <button>{saibaMais}</button>
                </div>
            </div>
        </div>
    )
};

export default CardProjetos;