

import { PaymentButton1 } from "../shared/payment1";
import { PaymentButton2 } from "../shared/payment2";
import { PaymentButton3 } from "../shared/payment3";
import { FaBlackTie, FaPlus } from "react-icons/fa";
import React, { FC, useEffect, useState } from "react";
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import { AfiliadosButton } from "../shared/afiliados1";
import { ClientesButton } from "../shared/clientes1";
import { ServiciosButton } from "../shared/servicios1";

import { FaShoppingCart } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { BDButton } from "../shared/BD1";


const BDPage: FC = () => {
  useEffect(() => {
    document.title = "PRODUCTOS DIGITALES";
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

  const items = [
    { title: "1º ENLACES", info: 
    <div style={{textAlign: "justify"}}>
    <p style={{ marginBottom: "15px"}}>Soluciona el problema de tener que explicar a tus clientes los ejercicios o andar buscando por youtube ejemplos bien ejecutados.</p>
    <p style={{ marginBottom: "15px"}}>En el nombre de los ejercición están vinculados enlaces a vídeos demostrativos del ejercicio en cuestión.</p>
    <p>Los vídeos están disponibles en youtube, nosotros te ahorramos el trabajo para que los tengas a tu disposición sin necesidad de buscar y filtrar uno a uno.</p>
    </div>
    },
    { title: "2º CLASIFICACIONES", info: 
    <div style={{textAlign: "justify"}}>
      <p style={{ marginBottom: "15px"}}>Las columnas de la tabla tienen encabezados que permiten filtrar la busqueda por las etiquetas de cada ejercicio.</p>
      <p style={{ marginBottom: "15px"}}>Están clasificados en cuanto al patrón de movimiento, nivel, tipo, musculatura implicada y plano de ejecución.</p>
      <p>Encuentra rápidamente ejercicios adecuados para el nivel de tu cliente y grupo muscular que deseas trabajar.</p>
    </div>
    },
    { title: "3º PROCESO DE COMPRA", info: 
    <div style={{textAlign: "justify"}}>
      <p style={{ marginBottom: "15px"}}>Una vez completado el pago serás redirigido a una ventana con el contenido de la base dedatos en modo solo lectura.</p>
      <p style={{ marginBottom: "15px"}}>Para poder trabajar con la base de datos y hacer modificaciones, deberás exportarlo como xlsx creando así una copia en tu ordenador.</p>
      <p>Si tienes cualqueir problema durante el proceso, ponte en contacto al correo: contacto.raul.fitness@gmail.com</p>
    </div>
    }
  ];
    
  const [showInfos, setShowInfos] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  

  const handleClick = (index: number) => {
    setShowInfos((prev) =>
      prev.map((_, i) => (i === index ? !prev[i] : false))
    );
  };

  
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
    <h1 className="text-center title text-[60px] ">PRODUCTOS DIGITALES</h1>
    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>

    <div className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[50vh] items-center justify-center flex-col md:flex-row">

    <div className="cardservice">
        
          <img
            data-scroll
            data-scroll-speed="2"
            className="card-img"
            src="BD1.png"
            alt=""
          />
        
        <div className="card-info">
          <p className="text-title">BASE DE DATOS </p>
          <p className="text-body">+900 Ejercicios</p>
          <br></br>
        </div>
        <div className="card-footer">
        <span className="text-title">19,99€</span>
        
        <a
                href="https://buy.stripe.com/00g3e3foE60Xc48dQU"
                target="_blank"
                rel="noopener noreferrer"
                className="card-button"
              >
                <svg className="svgcart" viewBox="0 0 20 20">
                  <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                  <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                  <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
        </a>

      </div>
    </div>

    
    </div>
    
    <h1 className="text-center title text-[40px] " style={{ marginTop: " 70px" }}>CARACTERÍSTICAS</h1>
    

    <div style={{ margin: "25px 50px" }}>
      <ul >
        {items.map((item, index) => (
          <li key={index}>
            <div className="containerli" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", padding: "10px 50px", marginTop: "25px ", borderRadius: "10px"}}>
              <h2 style={{ margin: 0, fontSize: "20px" }}>{item.title}</h2>
              <button onClick={() => handleClick(index)}>
                <FaPlus size={25} />
              </button>
            </div>
            {showInfos[index] && (
              <div style={{ paddingTop: "10px",padding: "10px 50px" }}>{item.info}</div>
            )}
          </li>
        ))}
      </ul>
    </div>

    <h1 className="text-center title text-[40px] " style={{ marginTop: " 70px" }}>MUESTRAS</h1>
    <br></br>

    <div className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[50vh] items-center justify-center flex-col md:flex-row">
      <div>
        <img
          
          className="card-img-main"
          src="/BD2.png"
          alt=""
        />
      </div>
      <div>
        <img
          
          className="card-img-main"
          src="/BD4.png"
          alt=""
        />
      </div>

    </div>

    <br></br><br></br><br></br>


    <div style={{ width: '100%', padding: '20px', textAlign: 'center', borderTop: '1px solid white' }}>
      <p>(CC) Creative Commons 2023 RAULDDC.ETH Ltd – Attribution-NonCommercial-NoDerivatives 4.0</p>
      <p>Company Number: 14696686  </p>
      <p>RAULDDC.ETH Ltd is registered in England and Wales | Registered Address: RAULDDC.ETH, 124 City Road, London, EC1V 2NX</p>
    </div>



    </>
  );
  };

export default BDPage;