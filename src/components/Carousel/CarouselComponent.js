import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import chevrolet from '../../assets/images/marcas/chevrolet.png';
import fiat from '../../assets/images/marcas/fiat.png';
import ford from '../../assets/images/marcas/ford.png';
import honda from '../../assets/images/marcas/honda.png';
import hyundai from '../../assets/images/marcas/hyundai.png';
import isuzu from '../../assets/images/marcas/isuzu.png';
import iveco from '../../assets/images/marcas/iveco.png';
import kia from '../../assets/images/marcas/kia.png';
import landrover from '../../assets/images/marcas/landrover.png';
import mazda from '../../assets/images/marcas/mazda.png';
import mercedes from '../../assets/images/marcas/mercedes.png';
import mitsubishi from '../../assets/images/marcas/mitsubishi.png';
import nissan from '../../assets/images/marcas/nissan.png';
import peugeot from '../../assets/images/marcas/peugeot.png';
import renault from '../../assets/images/marcas/renault.png';
import suzuki from '../../assets/images/marcas/suzuki.png';
import toyota from '../../assets/images/marcas/toyota.png';
import volkswagen from '../../assets/images/marcas/volkswagen.png';

function CarouselComponent() {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3}
        centerMode={false}
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={0.5}
        swipeable
        transitionDuration={1000}
      >
        <img src={chevrolet} alt="chevrolet" height="130"></img>
        <img src={fiat} alt="fiat" height="130"></img>
        <img src={ford} alt="ford" height="130"></img>
        <img src={honda} alt="honda" height="130"></img>
        <img src={hyundai} alt="hyundai" height="130"></img>
        <img src={isuzu} alt="isuzu" height="130"></img>
        <img src={iveco} alt="iveco" height="130"></img>
        <img src={kia} alt="kia" height="130"></img>
        <img src={landrover} alt="landrover" height="130"></img>
        <img src={mazda} alt="mazda" height="130"></img>
        <img src={mercedes} alt="mercedes" height="130"></img>
        <img src={mitsubishi} alt="mitsubishi" height="130"></img>
        <img src={nissan} alt="nissan" height="130"></img>
        <img src={peugeot} alt="peugeot" height="130"></img>
        <img src={renault} alt="renault" height="130"></img>
        <img src={suzuki} alt="suzuki" height="130"></img>
        <img src={toyota} alt="toyota" height="130"></img>
        <img src={volkswagen} alt="volkswagen" height="130"></img>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
