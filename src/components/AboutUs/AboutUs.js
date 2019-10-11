import React from 'react';
import Zoom from 'react-reveal/Zoom';

export default function AboutUs(props) {
  return (
    <section>
      <div
        className="about-us-container"
        // ref={props.blockRef}
        // innerRef={props.blockRef}
      >
        <div className="about-us-title" id="about-us">
          <Zoom>
            <span className="about-us-title-first">SOBRE</span>
            <span className="about-us-title-second">NOSOTROS</span>
          </Zoom>
        </div>
        <div className="about-us-text-container">
          <Zoom>
            <p className="about-us-text">
              Somos una empresa familiar dedicada a la comercialización de
              autopartes del automotor. 35 años de experiencia en el rubro, más
              de 25.000 items en stock permanente , rápida solución ante
              productos difíciles, además de variedad en marcas y calidad, nos
              posiciona como una de las alternativas repuesteras más importantes
              de la provincia de San Luis y Córdoba. Trabajamos todas las marcas
              de autos, pick-up y camiones, como así también prácticamente todas
              las líneas y modelos. Consultenos, nuestras sucursales están a su
              disposición.
            </p>
          </Zoom>
        </div>
        <br></br>
        <br></br>
      </div>
    </section>
  );
}
