import React, { FC } from "react";

import {ProductSlider} from '../shared/ProductSlider';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ServiciosButton } from "../shared/servicios1";


const MainProjects: FC = () => {
  const { images, currentIndex, handleLeftArrowClick, handleRightArrowClick, } = ProductSlider();

  return (
    <>
    <h1
        className="text-center text-4xl mb-10 md:mb-20 ">Servicios que ofrezco
    </h1>
    
    <div className="flex gap-[5vw] px-[5px] z-[2] min-h-[300px] justify-content-center align-items-center flex-col md:flex-row" style={{  marginLeft: "5%",marginRight: "5%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        
        
        <img
        className="card-img-main-projects"
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        
        />
        
        

      <div style={{ textAlign: "justify", }}>
      <h1  className="title text-[40px]">
        {images[currentIndex].titulo}
        </h1>

        
        <p data-scroll className="text-lg text-gray-200" id="story">
          {images[currentIndex].text}
        </p>
        <div className="flex mt-[25px] gap-[20px]">
              
             
          <a
            className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
            onClick={ServiciosButton()}
          >
            <span> SABER MÁS </span>
                
          </a>
              
        </div>
      </div>
    </div>
    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>  
    <div className="flex gap-[5vw] items-center justify-center z-[2]">
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#191e25] hover:bg-[#1876d2]"
                onClick={handleLeftArrowClick}
              >
                <FaArrowLeft size={25} />
              </a>
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#191e25] hover:bg-[#1876d2]"
                onClick={handleRightArrowClick}
              >
                <FaArrowRight size={25} />
              </a>
      </div>
      
      <p data-scroll className="text-lg text-gray-200" id="story">
          <br></br>
      </p>


    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>

    <div style={{  marginLeft: "5%",marginRight: "5%", display: "flex", justifyContent: "center", alignItems: "center" }}>

    <div  className="lg:min-h-[60vh]   flex flex-col items-center justify-center z-[4]">
      <h1
        
        className="text-center text-3xl lg:text-4xl"
      >
        ¿Por qué entrenar conmigo?
      </h1>
      <p
        
        className="description text-lg text-center my-[10px]"
      >
        Si eres alguien que no coge rutina, vas a adquirir una al cabo de unos meses
      </p>
      <p
        
        className="description text-lg text-center my-[10px]"
      >
        Los programas están diseñados específicamente para ayudarte a alcanzar tus metas de manera efectiva y eficiente!
      </p>
      <p
        
        className="description text-lg text-center my-[10px]"
      >
        Te guiaré paso a paso para asegurar que alcances tus objetivos de manera segura y minimizando el riesgo de lesiones!
      </p>
      <p
        
        className="description text-lg text-center my-[10px]"
      >
        Vas a utilizar tecnología que atletas de alto rendimiento usan a diario.
      </p>
      <p
        
        className="description text-lg text-center my-[10px]"
      >
        No te arrepentirás de invertir en ti mismo y en tu salud.
      </p>
      <p
        
        className="description text-lg text-center my-[10px]"
      >
        ¿A que esperas?
      </p>
      </div>
      </div>

    </>
  );
};

export default MainProjects;
