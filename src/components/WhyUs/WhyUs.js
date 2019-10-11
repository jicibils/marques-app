import React from 'react';
import Grid from '@material-ui/core/Grid';
import Payment from '@material-ui/icons/Payment';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ThumbUp from '@material-ui/icons/ThumbUp';
import LocalShipping from '@material-ui/icons/LocalShipping';

export default function WhyUs(props) {
  return (
    <div className="why-us-container">
      <Grid>
        <Grid container item xs={12} justify="center">
          <div className="title-subsections-container">
            <Grid container item xs={12} justify="center">
              <h1 className="title">¿Porque Nosotros?</h1>
              <div className="title-underline"></div>
            </Grid>
          </div>
        </Grid>

        <Grid container item xs={12} justify="center">
          <Grid container item xs={11} justify="space-between">
            <Grid container item xs={12} md={4} justify="center">
              <Grid item xs={12}>
                <div className="icons-container">
                  <AttachMoney className="icons" />{' '}
                  <Payment className="icons" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="text-container">
                  <p className="sub-title">Todos Los Medios de Pago</p>
                  <p className="description">
                    Podes realizar tu compra con tarjeta, efectivo o cheques
                  </p>
                </div>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={4} justify="center">
              <Grid item xs={12}>
                <div className="icons-container">
                  <ThumbUp className="icons" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="text-container">
                  <p className="sub-title">Atención Personalizada</p>
                  <p className="description">
                    Escuchamos y atendemos tus consultas rapidamente
                  </p>
                </div>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={4} justify="center">
              <Grid item xs={12}>
                <div className="icons-container">
                  <LocalShipping className="icons" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="text-container">
                  <p className="sub-title">Envios a Todo el Pais</p>
                  <p className="description">
                    Realizamos envios a cualquier parte del pais para entregarte
                    tu producto
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
