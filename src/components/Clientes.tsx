import React, { FC, useState, useEffect } from "react";

import { useRouter } from 'next/router';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import {PASSWORD_CLIENTES} from "../shared/EnvironmentVariables";

import { FaBars } from "react-icons/fa";
import { AfiliadosButton } from "../shared/afiliados1";
import { ClientesButton } from "../shared/clientes1";
import { ServiciosButton } from "../shared/servicios1";
import { BDButton } from "../shared/BD1";

const Clientes: FC = () => {
  useEffect(() => {
    document.title = "CLIENTES";
  }, []);
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const router = useRouter();
    const validar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputPassword = document.getElementById("password") as HTMLInputElement;
        const contraseña = inputPassword.value;
        if (contraseña === PASSWORD_CLIENTES) {
          router.push("/clientesdownload");
        } else {
          alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
        }
      };
      
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

          <div className="card-container">
            <div className="content-container">
            <form onSubmit={validar}>
            <h1>CONTENIDO RESERVADO PARA CLIENTES</h1>
            <br></br>
            <input placeholder="Contraseña" type={mostrarContraseña ? "text" : "password"} id="password" name="password" />
            <button type="button" onClick={() => setMostrarContraseña(!mostrarContraseña)}>
              {mostrarContraseña ? <FaRegEyeSlash size={25}/> : <FaRegEye size={25} />}
            </button>
            <br /><br />
            <button
              className="h-[45px] px-[15px] text-white transition duration-300 gap-[10px] hover:bg-[#ccc]" 
              style={{
              border: '1px solid #ccc',
              
              }}
                type="submit">ACCEDER</button>
          </form>
            </div>
          </div>

         

        </>
      );
    };

export default Clientes;