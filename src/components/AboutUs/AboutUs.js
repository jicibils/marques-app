import React from 'react';
import { ForDesktop } from '../Media/Media';

export default function AboutUs(props) {
  return (
    <section>
      <ForDesktop>
        <div className="block-two-container"></div>
      </ForDesktop>
      <div className="about-us-container" ref={props.blockRef}>
        <div className="about-us-title">
          <span className="about-us-title-first">SOBRE</span>
          <span className="about-us-title-second">NOSOTROS</span>
        </div>
        <div className="about-us-text-container">
          <p className="about-us-text">
            Somos una empresa familiar dedicada a la comercialización de
            autopartes del automotor. 35 años de experiencia en el rubro, más de
            25.000 items en stock permanente , rápida solución ante productos
            difíciles, además de variedad en marcas y calidad, nos posiciona
            como una de las alternativas repuesteras más importantes de la
            provincia de San Luis y Córdoba. Trabajamos todas las marcas de
            autos, pick-up y camiones, como así también prácticamente todas las
            líneas y modelos. Consultenos, nuestras sucursales están a su
            disposición.
          </p>
        </div>
        <br></br>
        <br></br>
      </div>
      <ForDesktop>
        <div className="block-two-container"></div>
      </ForDesktop>
    </section>
  );
}
