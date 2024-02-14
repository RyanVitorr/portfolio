import React, { useState } from 'react';
import './ProjetosStyle.css';
import CardProjetos from './CardProjetos/CardProjetos';

const Projetos = () => {
  const [projetosList, setProjetosList] = useState([
    {
      id: 1,
      nome: "Reading-Time",
      img: "img/reading-time.png",
      texto: "Reading-Time é um site de registro de leitura, que permite aos usuários acompanhar os livros que estão lendo, fornecendo uma forma eficiente de gerenciar sua lista de leitura.",
      mostrarTexto: false,
      completo: false,
      link:"https://ryanvitorr.github.io/Reading_Time_react",
    },
    {
      id: 2,
      nome: "Lista de Tarefas",
      img: "img/todolist.png",
      texto: "Lista de Tarefas é um site que permite aos usuários criar, organizar e gerenciar suas tarefas de forma eficiente.",
      mostrarTexto: false,
      completo: true,
      link:"https://ryanvitorr.github.io/TodoList_react_vite_deploy/",
    },
    {
      id: 3,
      nome: "Play",
      img: "img/play.png",
      texto: "Play é um site de reprodução de audiobooks, uma plataforma online onde os usuários podem ouvir livros em formato de áudio",
      mostrarTexto: false,
      completo: false,
      link:"https://ryanvitorr.github.io/play/",
    }
  ]);

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
          {projetosList.map((projeto) => (
            <CardProjetos projeto={projeto} key={projeto.id}/>
          ))}

        </div>
      </div>
    </section>
  )
};

export default Projetos;