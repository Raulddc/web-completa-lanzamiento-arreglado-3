import React, { FC, useEffect, useState } from "react";
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import { AfiliadosButton } from "../shared/afiliados1";
import { ClientesButton } from "../shared/clientes1";
import { ServiciosButton } from "../shared/servicios1";
import { BDButton } from "../shared/BD1";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const NavBar: FC = () => {

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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (windowWidth > 600 && isOpen) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <>
    <a
    className="h-[25px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#FF0000] hover:bg-[#191e25]"
    onClick={BDButton()}
    style={{
      justifyContent: "center",
      width: "100%"}}
    >
      
      
      <FaArrowRight size={15} />
      <FaArrowRight size={15} />
      <a className="nav-text">BD +900 EJERCICIOS GRATIS PRIMEROS 100!! "BDFREE" </a>
      <FaArrowLeft size={15} />
      <FaArrowLeft size={15} />
      
      
          
    </a>
  <br></br>
    <div className="navbar">
      <div className="logo">
        <a href="https://raulddc.eth.limo/">RAULDDC.ETH.LTD</a>
      </div>
      {windowWidth <= 600 && (
        <>
          <input type="checkbox" id="toggler" tabIndex={-1} checked={isOpen} onChange={handleClick} />
          <label htmlFor="toggler">
            <i className="fa fa-bars"><FaBars size={25}/></i>
          </label>
        </>
      )}
      <ul className={`list menu ${windowWidth > 600 || isOpen ? 'open' : 'hide'}`}>
        <li style={{color:"red"}}><a onClick={BDButton()}>Productos Digitales</a></li>
        <li><a onClick={ServiciosButton()}>Servicios</a></li>
        <li><a onClick={ClientesButton()}>Clientes</a></li>
        <li><a onClick={AfiliadosButton()}>Afiliados</a></li>
      </ul>
    </div>
    
  </>
  );
};
export default NavBar;

