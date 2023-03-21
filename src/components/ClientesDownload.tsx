import React, { FC, useState, useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";

import { FaBars } from "react-icons/fa";
import { AfiliadosButton } from "../shared/afiliados1";
import { ClientesButton } from "../shared/clientes1";
import { ServiciosButton } from "../shared/servicios1";
import { BDButton } from "../shared/BD1";

const ClientesD: FC = () => {
  useEffect(() => {
    document.title = "CLIENTES DOWNLOAD";
  }, []);

  const [selectedContent, setSelectedContent] = useState("");
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
        <br></br>
    <br></br>

        <div className="lg:min-h-[20vh]   flex flex-col items-center justify-center z-[4]">
          <h1 style={{fontSize: '30px'}}>AREA EXCLUSIVA CLIENTES</h1>
        </div>
        <br></br>
    <br></br>
        <div className="lg:min-h-[5vh]   flex flex-col items-center justify-center z-[4]">
          <h1>Documentos iniciales</h1>
        </div>
        <br></br>
   
        <div className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[50vh] items-center justify-center flex-col md:flex-row">
        <a href="https://docs.google.com/spreadsheets/d/1ZvgjDBvTZ_a4yRPXoOLxk-bxSR7BBlb3/edit?usp=sharing&ouid=106983313444880109459&rtpof=true&sd=true" 
            target="_blank"
            rel="noopener noreferrer"> 
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <svg stroke="#ffffff" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 50 50" 
                    height="50px" 
                    width="50px" 
                    fill="#ffffff">

                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>

                    <g 
                    stroke-linejoin="round" 
                    stroke-linecap="round" 
                    id="SVGRepo_tracerCarrier">
                    </g>

                    <g id="SVGRepo_iconCarrier">
                    <FaRegFileExcel size={50}/>
                    </g>

                  </svg>
                  <strong className="text-center">Cuestionario Inicial</strong>
                </div>
              </div>
              <div className="front">
                
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">ABRIR</small>
                  <div className="description1">
                    <div className="title1">
                      <p className="title1">
                        <strong>Cuestionario Inicial</strong>
                      </p>
                      <svg fill-rule="nonzero" 
                        height="15px" 
                        width="15px" 
                        viewBox="0,0,256,256" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        xmlns="http://www.w3.org/2000/svg">
                          <g 
                          style={{ mixBlendMode: 'normal' }}
                          text-anchor="none" 
                          font-size="none" 
                          font-weight="none" 
                          font-family="none" 
                          stroke-dashoffset="0" 
                          stroke-dasharray="" 
                          stroke-miterlimit="10" 
                          stroke-linejoin="miter" 
                          stroke-linecap="butt" 
                          strokeWidth="1" 
                          stroke="none" 
                          fill-rule="nonzero" 
                          fill="#20c997">
                            <g transform="scale(8,8)">
                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                            </g>
                          </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="https://drive.google.com/file/d/1XiYr9NqfxFVThO2FQHEAcNy0Ds81niab/view?usp=share_link" 
            target="_blank"
            rel="noopener noreferrer"> 
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <svg stroke="#ffffff" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 50 50" 
                    height="50px" 
                    width="50px" 
                    fill="#ffffff">

                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>

                    <g 
                    stroke-linejoin="round" 
                    stroke-linecap="round" 
                    id="SVGRepo_tracerCarrier">
                    </g>

                    <g id="SVGRepo_iconCarrier">
                    <FaFilePdf size={50}/>
                    </g>

                  </svg>
                  <strong className="text-center">Valoración Funcional</strong>
                </div>
              </div>
              <div className="front">
                
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">ABRIR</small>
                  <div className="description1">
                    <div className="title1">
                      <p className="title1">
                        <strong>Valoración Funcional</strong>
                      </p>
                      <svg fill-rule="nonzero" 
                        height="15px" 
                        width="15px" 
                        viewBox="0,0,256,256" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        xmlns="http://www.w3.org/2000/svg">
                          <g 
                          style={{ mixBlendMode: 'normal' }}
                          text-anchor="none" 
                          font-size="none" 
                          font-weight="none" 
                          font-family="none" 
                          stroke-dashoffset="0" 
                          stroke-dasharray="" 
                          stroke-miterlimit="10" 
                          stroke-linejoin="miter" 
                          stroke-linecap="butt" 
                          strokeWidth="1" 
                          stroke="none" 
                          fill-rule="nonzero" 
                          fill="#20c997">
                            <g transform="scale(8,8)">
                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                            </g>
                          </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>


        <a href="https://drive.google.com/file/d/1Cj138lHkA2I4VJge3Q_CtIPO8kyS3Tje/view?usp=share_link" 
            target="_blank"
            rel="noopener noreferrer"> 
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <svg stroke="#ffffff" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 50 50" 
                    height="50px" 
                    width="50px" 
                    fill="#ffffff">

                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>

                    <g 
                    stroke-linejoin="round" 
                    stroke-linecap="round" 
                    id="SVGRepo_tracerCarrier">
                    </g>

                    <g id="SVGRepo_iconCarrier">
                    <FaFilePdf size={50}/>
                    </g>

                  </svg>
                  <strong className="text-center">Consentimiento Informado</strong>
                </div>
              </div>
              <div className="front">
                
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                  <small className="badge">ABRIR</small>
                  <div className="description1">
                    <div className="title1">
                      <p className="title1">
                        <strong>Consentimiento Informado</strong>
                      </p>
                      <svg fill-rule="nonzero" 
                        height="15px" 
                        width="15px" 
                        viewBox="0,0,256,256" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        xmlns="http://www.w3.org/2000/svg">
                          <g 
                          style={{ mixBlendMode: 'normal' }}
                          text-anchor="none" 
                          font-size="none" 
                          font-weight="none" 
                          font-family="none" 
                          stroke-dashoffset="0" 
                          stroke-dasharray="" 
                          stroke-miterlimit="10" 
                          stroke-linejoin="miter" 
                          stroke-linecap="butt" 
                          strokeWidth="1" 
                          stroke="none" 
                          fill-rule="nonzero" 
                          fill="#20c997">
                            <g transform="scale(8,8)">
                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                            </g>
                          </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        </div>
        <br></br>
    <br></br>

        <div className="lg:min-h-[10vh]   flex flex-col items-center justify-center z-[4]">
          <h1>Contenido de valor</h1>
        </div>
        <br></br>
    
        <div className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[50vh] items-center justify-center flex-col md:flex-row">
        <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <svg stroke="#ffffff" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 50 50" 
                    height="50px" 
                    width="50px" 
                    fill="#ffffff">

                    <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>

                    <g 
                    stroke-linejoin="round" 
                    stroke-linecap="round" 
                    id="SVGRepo_tracerCarrier">
                    </g>

                    <g id="SVGRepo_iconCarrier">
                    <FaEllipsisH size={50}/>
                    </g>

                  </svg>
                  <strong className="text-center">Coming soon...</strong>
                </div>
              </div>
              <div className="front">
                
                <div className="img">
                  <div className="circle">
                  </div>
                  <div className="circle" id="right">
                  </div>
                  <div className="circle" id="bottom">
                  </div>
                </div>

                <div className="front-content">
                <small className="badge"></small>
                  <div className="description1">
                    <div className="title1">
                      <p className="title1">
                        <strong>Stay tuned!</strong>
                      </p>
                      <svg fill-rule="nonzero" 
                        height="15px" 
                        width="15px" 
                        viewBox="0,0,256,256" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        xmlns="http://www.w3.org/2000/svg">
                          <g 
                          style={{ mixBlendMode: 'normal' }}
                          text-anchor="none" 
                          font-size="none" 
                          font-weight="none" 
                          font-family="none" 
                          stroke-dashoffset="0" 
                          stroke-dasharray="" 
                          stroke-miterlimit="10" 
                          stroke-linejoin="miter" 
                          stroke-linecap="butt" 
                          strokeWidth="1" 
                          stroke="none" 
                          fill-rule="nonzero" 
                          fill="#20c997">
                            
                          </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

            <div className="flex justify-center mt-[25px] gap-[20px]">

              <a
                href="https://billing.stripe.com/p/login/00g4gz5gD7GC5nq000"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#ff8000] hover:bg-[#2884e0]"
              >
          
                SUBSCRIPCIONES
                
              </a>

            </div>

          <br></br>
        <br></br>
          <div style={{ width: '100%', padding: '20px', textAlign: 'center', borderTop: '1px solid white' }}>
      <p>(CC) Creative Commons 2023 RAULDDC.ETH Ltd – Attribution-NonCommercial-NoDerivatives 4.0</p>
      <p>Company Number: 14696686  </p>
      <p>RAULDDC.ETH Ltd is registered in England and Wales | Registered Address: RAULDDC.ETH, 124 City Road, London, EC1V 2NX</p>
    </div>
        </>
      );
    };

export default ClientesD;