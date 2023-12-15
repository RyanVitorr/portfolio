import React from 'react';
import '../sobre/SobreStyle.css';

const Sobre = () => {
  return (
    <section className="sobre">
        <div className="conteudo-sobre">
            <div className="titulo-sobre">
                <h2>Sobre</h2>
                <span className="linha-titulo"></span>
            </div>
      
            <div className="infos-sobre">
                <div className="imagem-sobre">
                    <div className="area-azul-img">
                        <div className="area-branca-img">
                            
                        </div>
                    </div>
                </div>
            
                <div className="text-sobre">
                    <h4>Desenvolvedor Front-end.</h4>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam cum tenetur qui necessitatibus et odio magnam cumque dolorem, sapiente quaerat aspernatur fugit perspiciatis incidunt. Molestias beatae cumque nostrum quod?</p>
                </div>
            </div>
        
            <div className="titulo-redes">
                <h2>Redes</h2>
                <span className="linha-titulo"></span>
            </div>
       
            <div className="infos-redes">
                <a><i className="bi bi-github"></i></a>
            
                <a><i className="bi bi-linkedin"></i></a>

                <a><i className="bi bi-whatsapp"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Sobre;