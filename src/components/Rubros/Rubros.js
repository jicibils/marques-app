import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Rubros(props) {
  return (
    <div className="rubros-container" ref={props.blockRef}>
      <Grid>
        <Grid container item xs={12} justify="center">
          <div className="title-subsections-container">
            <Grid container item xs={12} justify="center">
              <h1 className="title">Nuestros Rubros</h1>
              <div className="title-underline"></div>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <p style={{ color: '#fff' }}>Explore entre todos nuestros rubros.</p>
          <p style={{ color: '#fff' }}>Tenemos lo que buscas!!</p>
          <br></br>
        </Grid>

        <Grid item xs={12}>
          <div
            className="button-rubros-container"
            onClick={() => props.goToAllRubros()}
          >
            <span className="button-rubros">Ver Todos</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
