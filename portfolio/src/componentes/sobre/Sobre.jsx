import React from 'react';
import '../sobre/SobreStyle.css';


const Sobre = () => {
    const apresentacao = "Olá! Sou Ryan Vitor, estudante de ADS, entusiasta da tecnologia e desenvolvedor Front-end com 7 meses de experiência. Estou procurando uma oportunidade de estágio para aprimorar minhas habilidades como Front-end e explorar o Back-end, com o objetivo de me tornar um desenvolvedor Full Stack. Estou animado para contribuir com minha paixão pela programação e crescer profissionalmente em um ambiente desafiador.";

  return (
    <section className="sobre">
        <div className="conteudo-sobre">
            <div className='sobre-container'>
                <div className="titulo-sobre">
                    <h2>Sobre</h2>
                    <span className="linha-titulo"></span>
                </div>
                <div className="infos-sobre">
                    <div className="imagem-sobre">
                        <div className="area-azul-img">
                            <div className="area-branca-img">
                                <img src="img/fotosobre.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                
                    <div className="text-sobre">
                        <h2>Desenvolvedor Front-end.</h2>
                
                        <p>{apresentacao}</p>
                    </div>
                </div>
            </div>
        
            <div className='redes-container'>
                <div className="titulo-redes">
                    <h2>Redes</h2>
                    <span className="linha-titulo"></span>
                </div>
                <div className="infos-redes">
                    <a href="https://github.com/RyanVitorr" target='_blank' rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                
                    <a href="https://www.linkedin.com/in/ryan-vitor-5b0522288/" target='_blank' rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sobre;