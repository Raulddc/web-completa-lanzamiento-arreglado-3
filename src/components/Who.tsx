import { FC, useState, useEffect, useRef } from "react";
import { IframeHTMLAttributes } from 'react';
/*
<p data-scroll className="text-lg text-gray-200" id="story">
          Actualmente estoy acabando la carrera en Ciencias de la Actividad Física 
          y Deporte ( CCAFYD ) y también estoy haciendo prácticas en un dentro de 
          entrenamiento personal dirigido a la salud, rendimiento y readaptación.
        </p>
*/
const Who: FC = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeAttributes: IframeHTMLAttributes<HTMLIFrameElement> = {
    
    src: 'https://www.youtube.com/embed/YXTsQd8K5Ko?autohide=0&amp;branding=0&amp;cc_load_policy=0&amp;controls=0&amp;fs=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;quality=hd720&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;enablejsapi=1&amp;origin=http://localhost:{3000}&amp;widgetid=1',
    title: 'YouTube video player',
    allowFullScreen: true,
    frameBorder: 0,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share",
    id: "myVideo",
  };
  return (
    <>
    



    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <span>WORKOUT</span>
        </div>
        <div className="slide">
          <span>EAT</span>
        </div>
        <div className="slide">
          <span>SLEEP</span>
        </div>
        <div className="slide">
          <span>WORKOUT</span>
        </div>
        <div className="slide">
          <span>EAT</span>
        </div>
        <div className="slide">
          <span>SLEEP</span>
        </div>
        <div className="slide">
          <span>WORKOUT</span>
        </div>
        <div className="slide">
          <span>EAT</span>
        </div>
        <div className="slide">
          <span>SLEEP</span>
        </div>
        <div className="slide">
          <span>WORKOUT</span>
        </div>
      </div>
    </div>
        

        <div className="video-container">
        <iframe {...iframeAttributes}>  </iframe>
        </div>
          
          
         
        <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <span>WORKOUT</span>
        </div>
        <div className="slide">
          <span>EAT</span>
        </div>
        <div className="slide">
          <span>SLEEP</span>
        </div>
        <div className="slide">
          <span>WORKOUT</span>
        </div>
        <div className="slide">
          <span>EAT</span>
        </div>
        <div className="slide">
          <span>SLEEP</span>
        </div>
        <div className="slide">
          <span>WORKOUT</span>
        </div>
        <div className="slide">
          <span>EAT</span>
        </div>
        <div className="slide">
          <span>SLEEP</span>
        </div>
        <div className="slide">
          <span>WORKOUT</span>
        </div>
      </div>
    </div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>


    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
      style={{  marginLeft: "5%",marginRight: "5%", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div 
        >
      <img
        
        className="card-img-main"
        src="/avatar.jpg"
        alt=""
      />
      </div>
      <div style={{ textAlign: "justify", }}>
        <h1 className="title text-[40px]">
          Quien soy?
        </h1>

        
        <p data-scroll className="text-lg text-gray-200" id="story">
          Mi nombre es Raúl de Diego Cancio. Soy un profesional del deporte y la actividad física, 
          viviendo en Galicia, España. 
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Empecé a practicar deporte a partir de los 6 años. Desde entonces me saqué 
          el curso de entrenador de nivel 1 en Béisbol y he llagado a ser reconocido 
          como deportista de alto rendimiento al entrenar en un centro de 
          tecnificación deportiva.
        </p>  


        <p data-scroll className="text-lg text-gray-200" id="story">  
          A parte, me gusta {" "}
          <a
            className="underline underline-offset-2"
            href="https://linktr.ee/raulddc"
            target="_blank"
            rel="noopener noreferrer"
          >
            subir contenido fitness a las redes y todo lo relacionado con WEB3 y NFTs
          </a>
          
        </p>
      </div>
    </div>
    </>

  );
};

export default Who;


