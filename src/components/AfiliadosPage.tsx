import React, { FC, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AfiliadosButton } from "../shared/afiliados1";
import { ClientesButton } from "../shared/clientes1";
import { ServiciosButton } from "../shared/servicios1";
import { BDButton } from "../shared/BD1";

const Afiliados: FC = () => {
    useEffect(() => {
        document.title = "AFILIADOS";
    }, []);

    const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick1 = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (windowWidth > 600 && isOpen) {
      setIsOpen(false);
    }
  }, [windowWidth]);
  
  return (
    <>
        <div className="navbar">
        <div className="logo">
            <a href="https://raulddc.eth.limo/">RAULDDC.ETH.LTD</a>
        </div>
        {windowWidth <= 600 && (
            <>
            <input type="checkbox" id="toggler" tabIndex={-1} checked={isOpen} onChange={handleClick1} />
            <label htmlFor="toggler">
                <i className="fa fa-bars"><FaBars size={25}/></i>
            </label>
            </>
        )}
        <ul className={`list menu ${windowWidth > 600 || isOpen ? 'open' : 'hide'}`}>
        <li><a onClick={BDButton()}>Productos Digitales</a></li>
            <li><a onClick={ServiciosButton()}>Servicios</a></li>
            <li><a onClick={ClientesButton()}>Clientes</a></li>
            <li><a onClick={AfiliadosButton()}>Afiliados</a></li>
        </ul>
        </div>
    
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <h1 className="text-center title text-[60px] ">PROGRAMA DE AFILIADOS</h1>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>

        <div
        id="who"
        className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
        >
            <img
            data-scroll
            data-scroll-speed="2"
            className="w-[450px] h-[600px] rounded-[12px]"
            src="freepick1.jpg"
            alt=""
            style={{
                maxWidth: "50%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: 'contain',
                borderRadius: "20px",
            }}
            />
            <div style={{ textAlign: "justify", }}>
                <h1 className="text-2xl mb-4">
                A quien va dirigido:
                </h1>
                    <p>
                    Este programa está diseñado para aquellos entusiastas y apasionados por el deporte y el entrenamiento que desean compartir su progreso y trabajo con sus seguidores. Si tienes una presencia en redes sociales o un sitio web relacionado con deportes y entrenamiento, entonces este programa es para ti.
                    </p>
                    <br></br><br></br>
                <h1 className="text-2xl mb-4">
                Ventajas de ser un afiliado:
                </h1>    
                    <p>-Programas al 50%</p>
                    <p>-Relación más cercana</p>
                    <p>-Los primeros en acceder a nuevas funcionalidades</p>
                
            </div>
            
        </div>
        <div
        id="who"
        className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
        >
            
            <div style={{ textAlign: "justify", }}>
                <h1 className="text-2xl mb-4">
                Requisitos:
                </h1>    
                    <p>
                    Para formar parte de nuestro programa de afiliados, es necesario tener redes sociales activas relacionadas con el deporte y entrenamiento. A parte, es necesario demostrar un compromiso con la promoción de nuestros programas de entrenamiento. 
                    </p>
                    <br></br><br></br>
                <p>
                Rellena el formulario que se encuentra más abajo para optar a ser uno de nuestros Afiliados y comienza a aprovechar los beneficios exclusivos en nuestros programas de entrenamiento.
                </p>
                <p>
                Tras un periodo de estudio, recivirá información al respecto a través del correo proporcionado.
                </p>
                
            </div>
            <img
                data-scroll
                data-scroll-speed="2"
                className="w-[450px] h-[600px] rounded-[12px]"
                src="freepick2.jpg"
                alt=""
                style={{
                    maxWidth: "50%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: 'contain',
                    borderRadius: "20px",
            }}
            />
            
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="flex justify-center">
        <iframe width="600" height="880" src="https://ebc0809d.sibforms.com/serve/MUIEAGFWSxd6O3HX4n8s_JcBaEtCl9z3ktm3TVCX72KlNJMIt8LoneVJaARqBvwODVxu4VE2g1Ep-MtfrFbgJJcpruTPSOzPvqwmUhC2mNKDZ7MG7Zy5t-L8ezuAl6lWTsOVKUdiWNu1xaG75Ixl8u7T223vtcRVtMLfG4PbI5IIzFnsGHck_sr7IgLlt7dWnE4OmHgJHhLjCCkS" ></iframe>
        </div>
        

    </>
  );
  };

export default Afiliados;