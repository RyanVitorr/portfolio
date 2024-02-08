import React, { useState } from 'react';
import './ProjetosStyle.css';

const Projetos = () => {
  const [projetosList, setProjetosList] = useState([
    {
      id: 1,
      nome: "Reading-Time",
      img: "/img/reading-time.png",
      texto: "Reading-Time é um site de registro de leitura, que permite aos usuários acompanhar os livros que estão lendo, fornecendo uma forma eficiente de gerenciar sua lista de leitura.",
      mostrarTexto: false,
      completo: false,
      link:""
    },
    {
      id: 2,
      nome: "Lista de Tarefas",
      img: "/img/todolist.png",
      texto: "Lista de Tarefas é um site que permite aos usuários criar, organizar e gerenciar suas tarefas de forma eficiente.",
      mostrarTexto: false,
      completo: true,
      link:""
    },
  ]);


  const [state, setState] = useState(0);
  const [saibaMais, setSaibaMais] = useState("Saber Mais!");
  const handleClick = (id) => {
    setSaibaMais(id === state ?'Saber Mais!'  :'Esconder Saber Mais!' )
    setState(id === state ? null : id);
  };

  return (
    <section className='projetos'>
      <div className="conteudo-projetos">
        <div className="titulo-projetos">
          <h2>Projetos</h2>
          <span className="linha-titulo"></span>

          <div className='info-status'>
            <p>Status:</p>
            <div className='icons'>
              <div className='icone-completo'>
                <i className='bi bi-check-lg completo status'></i>
                <p>: Completo</p>
              </div>
              <div className='icone-incompleto'>
                <i className='bi bi-exclamation-lg status incompleto'></i>
                <p>: Incompleto</p>
              </div>
            </div>
          </div>
        </div>
        <div className="infos-projetos">
          {projetosList.map((projetos) => (
            <div key={projetos.id} className='card-projetos'>
              <div className='container-projeto'>
                <div className='img-projeto'>
                  <img src={projetos.img} />
                </div>
              </div>

              <div className={"texto " + (state === projetos.id ? "ativo " : "")}>
                <p>{projetos.texto}</p>
              </div>

              <div className='infos'>
                <div className='nome-site'>
                  <div className='nome-projeto'>
                    <h1>{projetos.nome}</h1>
                    <div className={'status ' + (projetos.completo ? 'completo' : 'incompleto')}>
                      <i className={projetos.completo ? 'bi bi-check-lg' : 'bi bi-exclamation-lg'}></i>
                    </div>
                  </div>
                  <div className='Link-projeto'>
                    <a href={projetos.link} target='_blank' rel="noopener noreferrer">Ir para o site</a>
                  </div>
                </div>

                <div className='saiba-mais' onClick={()=>{handleClick(projetos.id)}}>
                  <button>{saibaMais}</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
};

export default Projetos;