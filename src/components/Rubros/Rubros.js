import React from 'react';
import Grid from '@material-ui/core/Grid';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function Rubros(props) {
  return (
    <div className="rubros-container" ref={props.blockRef}>
      <Grid>
        <Grid container item xs={12} justify="center">
          <div className="title-subsections-container">
            <Grid container item xs={12} justify="center">
              <Zoom cascade>
                <h1 className="title" id="rubros">
                  Nuestros Rubros
                </h1>
                <div className="title-underline"></div>
              </Zoom>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Zoom cascade>
            <p style={{ color: '#fff' }}>
              Explore entre todos nuestros rubros.
            </p>
            <p style={{ color: '#fff' }}>Tenemos lo que buscas!!</p>
          </Zoom>
          <br></br>
        </Grid>

        <Grid item xs={12}>
          <Fade left>
            <div
              className="button-rubros-container"
              onClick={() => props.goToAllRubros()}
            >
              <span className="button-rubros">Ver Todos</span>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}
