

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

const ServiciosPage: FC = () => {
  useEffect(() => {
    document.title = "SERVICIOS";
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
    { title: "1º Evaluación inicial", info: 
    <div style={{textAlign: "justify"}}>
    <p style={{ marginBottom: "15px"}}>La evaluación inicial es una herramienta fundamental en el diseño de un programa de entrenamiento personalizado y eficaz. Su objetivo principal es obtener información relevante sobre el estado físico y de salud del cliente, de manera que se puedan identificar las limitaciones y necesidades específicas de cada individuo.</p>
    <p style={{ marginBottom: "15px"}}>Se realizará una valoración funcional con la cual, se podrán establecer objetivos realistas y diseñar un programa de entrenamiento personalizado que se adapte a tus necesidades específicas.</p>
    <p>Además de la valoración funcional, se solicitará al cliente que complete un cuestionario de hábitos e información relacionada con la salud, con el fin de descartar posibles complicaciones o riesgos para la salud. En este cuestionario se pueden recoger información relevante sobre la historia clínica, el estilo de vida, los hábitos alimentarios, el nivel de estrés, entre otros aspectos.</p>
    </div>
    },
    { title: "2º Asesoría", info: 
    <div style={{textAlign: "justify"}}>
      <p style={{ marginBottom: "15px"}}>Esta reunión es un momento clave en el proceso de diseño de un programa de entrenamiento personalizado. Durante la misma, se establecerán los objetivos específicos que el cliente desea alcanzar, así como la metodología que se seguirá para lograrlos. </p>
      <p style={{ marginBottom: "15px"}}>En cuanto a los objetivos, es fundamental que estos sean claros, realistas y alcanzables. Deben estar alineados con las necesidades y expectativas del cliente, y tener en cuenta su estado físico y de salud actual. De esta forma, se pueden diseñar un programa de entrenamiento que sea efectivo y seguro. Esto incluirá la elección de los ejercicios adecuados, el volumen e intensidad de entrenamiento, la frecuencia de las sesiones, entre otros aspectos. Además, se pueden considerar aspectos como la nutrición y el descanso, que también son fundamentales para el éxito del programa de entrenamiento.</p>
      <p>También se pueden resolver las dudas que el cliente tenga sobre el programa de entrenamiento que se le propondrá. Esto puede incluir aspectos como el tiempo estimado para lograr los objetivos, el tipo de progresión que se seguirá, el seguimiento y evaluación del progreso, entre otros aspectos.</p>
    </div>
    },
    { title: "3º Monitorización", info: 
    <div style={{textAlign: "justify"}}>
      <p style={{ marginBottom: "15px"}}>El sistema de feedback y cuantificación del esfuerzo es una herramienta fundamental en el diseño de un programa de entrenamiento personalizado y efectivo. Su objetivo principal es recopilar información sobre el desempeño del cliente durante el entrenamiento, con el fin de ajustar y adaptar los microciclos de entrenamiento en función de su respuesta a los estímulos.</p>
      <p style={{ marginBottom: "15px"}}>Es importante destacar que la adaptación de los microciclos de entrenamiento se realizará periódicamente, con el fin de garantizar la efectividad del programa y evitar posibles lesiones o sobreentrenamiento. De esta forma, se puede garantizar que el entrenamiento sea seguro y efectivo.</p>
      <p> Todo ello será posible gracias a la app de hrv4training a través de la cual es posible analizar variables como la variabilidad cardiaca y diferentes parámetros que reflejan fatiga y estado de forma, pudiendo observar facilmente como recupera cada uno y cuando es necesario descargar, entre muchas otras características.</p>
    </div>
    },
    { title: "4º Progresión", info: 
    <div style={{textAlign: "justify"}}>
      <p style={{ marginBottom: "15px"}}>La medición de la progresión es un aspecto fundamental en el seguimiento de un programa de entrenamiento personalizado. La toma de medidas antropométricas y tests de fuerza son dos herramientas muy efectivas para evaluar los cambios en la composición corporal y en la capacidad física.</p>
      <p>Es importante destacar que estas mediciones se realizarán de forma periódica, lo que permitirá evaluar su progresión como cliente a lo largo del tiempo y ajustar el programa de entrenamiento en consecuencia.</p>
    </div>
    },
    { title: "5º Puesta en marcha", info: 
    <div style={{textAlign: "justify"}}>
      <p style={{ marginBottom: "15px"}}>14 días de margen: desde el pago de la subscrición hay 14 días hasta que se cobra el primer més, para poder recivir todos los documentos necesarios, se lleva a cabo la asesoría y se realiza la programación.  </p>
      <p style={{ marginBottom: "15px"}}>Una vez acabado el periodo de margen y realizado el primer pago, se enviará la programación correspndiente.</p>
      <p>¡¡IMPORTANTE!! Esto no aplica para el pago con Crypto, habrá un margen de 14 días hasta que empiece el primer més, pero el primer pago se realizará en el momento de contratación.</p>
    </div>
    },
    { title: "6º Contenido Exclusivo Clientes", info: 
    <div style={{textAlign: "justify"}}>
      <p style={{ marginBottom: "15px"}}>Está disponble una página con contenido reservado solo para clientes.  </p>
      <p style={{ marginBottom: "15px"}}>Encontrarás los documentos iniciales que deben ser descargados, rellenados y enviados para comenzar el programa. </p>
      <p>La Clave de acceso se envía por correo al realizar el pago de la subscripción, si no es así, contacta al correo: contacto.raul.fitness@gmail.com.</p>
    </div>
    },
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
    <h1 className="text-center title text-[60px] ">SERVICIOS</h1>
    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>

    <div className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[50vh] items-center justify-center flex-col md:flex-row">

    <div className="cardservice">
        
          <img
            data-scroll
            data-scroll-speed="2"
            className="card-img"
            src="HI.jpg"
            alt=""
          />
        
        <div className="card-info">
          <p className="text-title">HYPERTROPHY </p>
          <p className="text-body">Programa personalizado</p>
          <br></br>
        </div>
        <div className="card-footer">
        <span className="text-title">60€</span>
        <div className="card-button-1" onClick={PaymentButton1()}>
        <FaEthereum size={20} />
        </div>
        <a
                href="https://buy.stripe.com/fZe5mbccs60X8RW8ww"
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

    <div className="cardservice">
        
          <img
            data-scroll
            data-scroll-speed="2"
            className="card-img"
            src="FUERZA.jpg"
            alt=""
          />
        
        <div className="card-info">
          <p className="text-title">ELITE STRENGHT </p>
          <p className="text-body">Programa personalizado</p>
          <br></br>
        </div>
        <div className="card-footer">
        <span className="text-title">60€</span>
        <div className="card-button-1" onClick={PaymentButton2()}>
        <FaEthereum size={20} />
        </div>
        <a
                href="https://buy.stripe.com/cN24i73FW60Xd8cdQR"
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

    <div className="cardservice">
        
          <img
            data-scroll
            data-scroll-speed="2"
            className="card-img"
            src="ADELGAZAR.jpg"
            alt=""
          />
        
        <div className="card-info">
          <p className="text-title">HEALTH PEAK </p>
          <p className="text-body">Programa personalizado</p>
          <br></br>
        </div>
        <div className="card-footer">
        <span className="text-title">60€</span>
        <div className="card-button-1" onClick={PaymentButton3()}>
        <FaEthereum size={20} />
        </div>
        <a
                href="https://buy.stripe.com/4gwbKz3FWblh4BGaEG"
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

    <br></br><br></br><br></br>


    <div style={{ width: '100%', padding: '20px', textAlign: 'center', borderTop: '1px solid white' }}>
      <p>(CC) Creative Commons 2023 RAULDDC.ETH Ltd – Attribution-NonCommercial-NoDerivatives 4.0</p>
      <p>Company Number: 14696686  </p>
      <p>RAULDDC.ETH Ltd is registered in England and Wales | Registered Address: RAULDDC.ETH, 124 City Road, London, EC1V 2NX</p>
    </div>



    </>
  );
  };

export default ServiciosPage;