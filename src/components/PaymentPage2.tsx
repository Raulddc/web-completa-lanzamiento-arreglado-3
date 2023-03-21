import React, { FC, useState, useEffect } from "react";

import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { requestTransaction } from "../shared/mmsk";
import { ProductSelection } from "../shared/ProductSelection";

import { PaymentButton1 } from "../shared/payment1";

import { PaymentButton3 } from "../shared/payment3";

import { FaBars } from "react-icons/fa";
import { AfiliadosButton } from "../shared/afiliados1";
import { ClientesButton } from "../shared/clientes1";
import { ServiciosButton } from "../shared/servicios1";
import { BDButton } from "../shared/BD1";
const PaymentPage2: FC = () => {
  useEffect(() => {
    document.title = "ELITE STRENGHT";
  }, []);
const { numSelected, price1, price2, handleAddClick, handleRemoveClick, handleDiscountCode, handleDiscountCodeSubmit } = ProductSelection();
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
  
      <div className="pb-20">
          <h1 className="text-center text-5xl mt-14 md:mt-28 mb-10">
          ELITE STRENGHT
          </h1>
          <div
            data-scroll
            data-scroll-speed="1"
            className="flex justify-center mx-[5vw] mt-8"
        >
        <div className=" w-full flex gap-10 flex-col md:flex-row">

        <div className="card-pay" >
          
  
          <img
            
            data-scroll
            data-scroll-speed="2"
            className="card-img-pay"
            src="FUERZA.jpg"
            alt=""
          />
          

        </div>

        
        <div className="flex-1 ">
            
            <div className=" flex justify-center mt-[25px] gap-[20px] ">

            
            Crypto: 48€

            / MES
            </div>

            

            
              <>
              <div className="flex justify-center mt-[25px] gap-[20px]">
              <button
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px]"
                style={{
                  border: '1px solid #ccc',
                  backgroundColor: 'transparent',
                }}
              >
                Meses: {numSelected}
              </button>
              <button
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px]"
                style={{
                  border: '1px solid #ccc',
                  backgroundColor: 'transparent',
                }}
              >
                {price2.toFixed(2)}€
              </button>
              </div>
              <div className="flex justify-center mt-[25px] gap-[20px]">
              
              <button style={{ borderRadius: '5px' }} onClick={handleRemoveClick} className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]">
                - 1 mes
              </button>
              <button style={{ borderRadius: '5px' }} onClick={handleAddClick} className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]">
                + 1 mes
              </button>
              </div>
              <form className="flex justify-center mt-[25px] gap-[20px]" onSubmit={handleDiscountCodeSubmit}>
                <input type="text" name="discountCode" placeholder="Código Descuento" />
                <button style={{ borderRadius: '5px' }} className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]" type="submit">Aplicar</button>
              </form>
              <div className="flex justify-center mt-[25px] gap-[20px]">
              <a
                onClick={() => {requestTransaction(price2)}}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: '5px' }}
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#ff8000] hover:bg-[#2884e0]" 
              >
                Pay
                <FaEthereum size={25} />
                
              </a>
              </div>
              <div className="flex justify-center mt-[25px] gap-[20px]">
              <iframe width="600" height="1015" src="https://ebc0809d.sibforms.com/serve/MUIEAGFjDsyJdMhaFXCMP-ug3YjnN7WxXTR1WulCK0kWftAmcPTi1QMKznmu1NqijWniPf4Z8KuBR9zFNLZexsD8ggIJg38o6Ang4M9ptqA97FwZc8eRLyDjFdmDUhVMYUNCJdc-oOqYZctCOdMBjilOAkh2nuh5CGr27QATYhmf2ykfnrRZDpjBWiQnJYymbEFircmM4CY6eENw"></iframe>
              </div>
              </>
           

        </div>


        

    </div>
    
    
</div>
</div>

<div className="div-line"></div>
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

export default PaymentPage2;

