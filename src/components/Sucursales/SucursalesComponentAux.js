import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import HorizontalCard from '../Card/HorizontalCard';
import Merlo from '../../assets/images/merlo.jpg';
import VillaDolores from '../../assets/images/villadolores.jpg';
import SanLuis from '../../assets/images/sanluis.jpg';

function SucursalesComponent(props) {
  return (
    <section>
      <div className="sucursales-container" ref={props.blockRef}>
        <Grid container item xs={12} justify="center">
          <div className="title-container">
            <Grid container item xs={12} justify="center">
              <p className="title">¡Conoce Nuestras Sucursales!</p>
              <div className="title-underline"></div>
            </Grid>
          </div>
        </Grid>

        <Grid container item xs={12} justify="space-between">
          <Grid
            container
            item
            xs={12}
            justify="center"
            className="space-bottom-min"
          >
            <HorizontalCard
              image={SanLuis}
              titleImage={'San Luis'}
              titleCard={'San Luis (Capital)'}
              phone={'(266) 442 0303'}
              address={'Av. Lafinur y 9 de Julio'}
              addressRef={
                'https://www.google.com.ar/maps/place/Repuestos+Marques/@-33.3082156,-66.3474313,17z/data=!4m12!1m6!3m5!1s0x95d43be2bccb890b:0x7e629a22fae38c78!2sRepuestos+Marques!8m2!3d-33.3082156!4d-66.3452426!3m4!1s0x95d43be2bccb890b:0x7e629a22fae38c78!8m2!3d-33.3082156!4d-66.3452426'
              }
              left={true}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="center"
            className="space-bottom-min"
          >
            <HorizontalCard
              image={VillaDolores}
              titleImage={'Villa Dolores'}
              titleCard={'Villa Dolores (Córdoba)'}
              phone={'(3544) 420 879'}
              address={'Av.Belgrano 1235'}
              addressRef={
                'https://www.google.com.ar/maps/place/Belgrano+1235,+Villa+Dolores,+C%C3%B3rdoba/@-31.9477257,-65.17347,17z/data=!4m13!1m7!3m6!1s0x942cd4bbe42f26b3:0xe550a26d0c35da1d!2sBelgrano+1235,+Villa+Dolores,+C%C3%B3rdoba!3b1!8m2!3d-31.9476323!4d-65.1734459!3m4!1s0x942cd4bbe42f26b3:0xe550a26d0c35da1d!8m2!3d-31.9476323!4d-65.1734459'
              }
              right={true}
            />
          </Grid>

          <Grid
            container
            item
            xs={12}
            justify="center"
            className="space-bottom-min"
          >
            <HorizontalCard
              image={Merlo}
              titleImage={'Merlo'}
              titleCard={'Merlo (San Luis)'}
              phone={'(2656) 472 983'}
              address={'Ruta 5 Esq. Las Toscas'}
              addressRef={
                'https://www.google.com.ar/maps/place/MARQUES+REPUESTOS/@-32.3480641,-65.0187425,19.75z/data=!4m8!1m2!3m1!2s+ruta+5+,+Merlo,+San+Luis!3m4!1s0x95d2e15c7f650cfb:0x567de0957fd08449!8m2!3d-32.3480464!4d-65.0186898'
              }
              left={true}
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default SucursalesComponent;
