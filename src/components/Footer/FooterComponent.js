import React from 'react';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer" ref={this.props.footerRef}>
        <Grid container item xs={12} justify="center">
          <Grid item xs={12}>
            <Zoom cascade>
              <h1 className="title" id="contacto">
                ¡Ven a Visitarnos!
              </h1>
              <br></br>
            </Zoom>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Grid item xs={12} md={4}>
              <Zoom cascade>
                <Email className="icons" />
                <p className="text-info">marquesrepuestos@yahoo.com.ar</p>
              </Zoom>
            </Grid>
            <Grid item xs={12} md={4}>
              <Zoom cascade>
                <Room className="icons" />
                <p className="text-info">Arturo M. Bas 2409</p>
              </Zoom>
            </Grid>
            <Grid item xs={12} md={4}>
              <Zoom cascade>
                <Phone className="icons" />
                <p className="text-info">(0358) 470 0579</p>
                <p className="text-info">(0358) 15 6014-822</p>
              </Zoom>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Fade bottom cascade>
              <div className="mdl-mega-footer__middle-section ">
                <iframe
                  title="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.494027100087!2d-64.38404478469407!3d-33.122383488136165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2004b7a28ce59%3A0x36b3091b56d5c241!2sArturo+M.+Bas+2409%2C+R%C3%ADo+Cuarto%2C+C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1528124303749"
                  width="70%"
                  height="300"
                ></iframe>
              </div>
            </Fade>
          </Grid>
          <Fade bottom cascade>
            <Grid item xs={12}>
              <i className="fa fa-instagram"></i>{' '}
              <a
                href="https://api.whatsapp.com/send?phone=543586014822"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp"></i>{' '}
              </a>
              <i className="fa fa-facebook-f"></i>{' '}
              <i className="fa fa-twitter"></i>
            </Grid>
          </Fade>
        </Grid>
      </div>
    );
  }
}

export default FooterComponent;
