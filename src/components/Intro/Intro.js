import React from 'react';
import { ForDesktop, ForMobile } from '../Media/Media';
import Logo from '../Logo/Logo';
import videoSrc from '../../assets/videos/video3.mp4';

export default function Intro(props) {
  return (
    <section>
      <div className=" intro-container" ref={props.blockRef}>
        <div>
          <Logo></Logo>
        </div>
        <div className="background-filter"></div>
        <ForDesktop>
          <video className="background-video" loop autoPlay muted>
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/ogg" />
          </video>
        </ForDesktop>
      </div>

      {/* <section>
      <div className=" intro-container" ref={props.blockRef}>
        <div className="background-filter">
          <div className="title-container">
            <span className="h3-1">MARQUES</span>
            <span className="h3-2">REPUESTOS</span>
            <span className="subtitle">Repuestos del Automotor</span>
          </div>
        </div>
        <ForDesktop>
          <video className="background-video" loop autoPlay muted>
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/ogg" />
          </video>
        </ForDesktop>
      </div>
      </section> */}
    </section>
  );
}
