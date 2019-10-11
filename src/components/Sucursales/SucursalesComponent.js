import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from '../Card/CardComponent';
import Merlo from '../../assets/images/merlo.jpg';
import VillaDolores from '../../assets/images/villadolores.jpg';
import SanLuis from '../../assets/images/sanluis.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function SucursalesComponent(props) {
  return (
    <section>
      <div className="sucursales-container" ref={props.blockRef}>
        <Grid container item xs={12} justify="center">
          <div className="title-container">
            <Grid container item xs={12} justify="center">
              <Zoom>
                <p className="title" id="sucursales">
                  ¡Conoce Nuestras Sucursales!
                </p>
                <div className="title-underline"></div>
              </Zoom>
            </Grid>
          </div>
        </Grid>
        <Fade bottom cascade>
          <Grid container item xs={12} justify="space-between">
            <Grid
              container
              item
              xs={12}
              md={4}
              justify="center"
              className="space-bottom"
            >
              <CardComponent
                image={SanLuis}
                titleImage={'San Luis'}
                titleCard={'San Luis (Capital)'}
                phone={'(266) 442 0303'}
                address={'Av. Lafinur y 9 de Julio'}
                addressRef={
                  'https://www.google.com.ar/maps/place/Repuestos+Marques/@-33.3082156,-66.3474313,17z/data=!4m12!1m6!3m5!1s0x95d43be2bccb890b:0x7e629a22fae38c78!2sRepuestos+Marques!8m2!3d-33.3082156!4d-66.3452426!3m4!1s0x95d43be2bccb890b:0x7e629a22fae38c78!8m2!3d-33.3082156!4d-66.3452426'
                }
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={4}
              justify="center"
              className="space-bottom"
            >
              <CardComponent
                image={VillaDolores}
                titleImage={'Villa Dolores'}
                titleCard={'Villa Dolores (Córdoba)'}
                phone={'(3544) 420 879'}
                address={'Av.Belgrano 1235'}
                addressRef={
                  'https://www.google.com.ar/maps/place/Belgrano+1235,+Villa+Dolores,+C%C3%B3rdoba/@-31.9477257,-65.17347,17z/data=!4m13!1m7!3m6!1s0x942cd4bbe42f26b3:0xe550a26d0c35da1d!2sBelgrano+1235,+Villa+Dolores,+C%C3%B3rdoba!3b1!8m2!3d-31.9476323!4d-65.1734459!3m4!1s0x942cd4bbe42f26b3:0xe550a26d0c35da1d!8m2!3d-31.9476323!4d-65.1734459'
                }
              />
            </Grid>

            <Grid
              container
              item
              xs={12}
              md={4}
              justify="center"
              className="space-bottom"
            >
              <CardComponent
                image={Merlo}
                titleImage={'Merlo'}
                titleCard={'Merlo (San Luis)'}
                phone={'(2656) 472 983'}
                address={'Ruta 5 Esq. Las Toscas'}
                addressRef={
                  'https://www.google.com.ar/maps/place/MARQUES+REPUESTOS/@-32.3480641,-65.0187425,19.75z/data=!4m8!1m2!3m1!2s+ruta+5+,+Merlo,+San+Luis!3m4!1s0x95d2e15c7f650cfb:0x567de0957fd08449!8m2!3d-32.3480464!4d-65.0186898'
                }
              />
            </Grid>
          </Grid>
        </Fade>
      </div>
    </section>
  );
}

export default SucursalesComponent;
