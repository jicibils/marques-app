import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '../Drawer/Drawer';
import MarquesLogo from '../../assets/images//marqueslogo.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 9999
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiFab: {
      secondary: {
        backgroundColor: '#f64e00',
        '&:hover': {
          backgroundColor: '#000'
        }
      }
    }
  }
});

const RenderHeaderButton = props => {
  return (
    // <div
    // disableFocusRipple={true}
    // disableRipple={true}
    //   className="button-header"
    //   onClick={() => scrollToRef(props.window, props.refComp)}
    // >
    //   <span className="header-text"> {props.text}</span>
    // </div>
    <div className="button-header" onClick={e => handleClick(e, props.idName)}>
      <span className="header-text">{props.text}</span>
    </div>
  );
};

const scrollToRef = (window, refComp) => {
  console.log('TCL: refComp', refComp);
  return refComp.current.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
  // window.scrollTo(0, refComp.current.offsetTop);
};

const handleClick = (event, idName) => {
  console.log('TCL: handleClick -> idName', idName);
  console.log('TCL: handleClick -> event', event);
  console.log('TCL: handleClick -> event.target', event.target);
  console.log(
    'TCL: handleClick -> event.target.ownerDocument',
    event.target.ownerDocument
  );
  console.log('TCL: handleClick -> document', document);
  const anchor = (event.target.ownerDocument || document).querySelector(
    `#${idName}`
  );
  console.log('TCL: handleClick -> anchor', anchor);

  if (anchor) {
    console.log('TCL: handleClick -> anchor', anchor);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100
  });

  return (
    <Zoom in={trigger}>
      <div
        onClick={e => handleClick(e, 'back-to-top-anchor')}
        role="presentation"
        className={classes.root}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired
};

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: undefined });
  return (
    <Fragment>
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
      <Slide direction="down" in={!!trigger}>
        <div className="call-text">¡Llamanos! (358) 601-4822</div>
      </Slide>
    </Fragment>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};

const RenderHeaderLogo = () => {
  return (
    <Button>
      <span className="logo-text first ">Marques</span>
      <span className="logo-text second ">Repuestos</span>
    </Button>
  );
  /* <img src={MarquesLogo} alt="marqueslogo" height="50"></img> */
};

export default function HeaderComponent(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className="header">
          <Hidden only={['md', 'lg']}>
            <Grid container item xs={12} justify="center">
              <Grid container item xs={7} justify="center">
                <RenderHeaderLogo></RenderHeaderLogo>
              </Grid>
              <Grid container item xs={3} justify="flex-start"></Grid>
              <Grid container item xs={2} justify="center">
                <Drawer
                  {...props}
                  handleClick={handleClick}
                  scrollToRef={scrollToRef}
                ></Drawer>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden only={['xs', 'sm']}>
            <Toolbar>
              <Grid container item xs={12} justify="space-between">
                <Grid container item xs={5} justify="flex-start">
                  <RenderHeaderLogo></RenderHeaderLogo>
                </Grid>
                <Grid container item xs={7} justify="center">
                  <Grid container item xs={12} justify="space-between">
                    <Grid item xs={4}></Grid>
                    <Grid container item xs={2} justify="center">
                      <RenderHeaderButton
                        text={'Nosotros'}
                        refComp={props.about}
                        window={props.window}
                        idName={'about-us'}
                      ></RenderHeaderButton>
                    </Grid>
                    <Grid container item xs={2} justify="center">
                      <RenderHeaderButton
                        text={'Sucursales'}
                        refComp={props.sucursalesRef}
                        window={props.window}
                        idName={'sucursales'}
                      ></RenderHeaderButton>
                    </Grid>
                    <Grid container item xs={2} justify="center">
                      <RenderHeaderButton
                        text={'Rubros'}
                        refComp={props.rubrosRef}
                        window={props.window}
                        idName={'rubros'}
                      ></RenderHeaderButton>
                    </Grid>
                    <Grid container item xs={2} justify="center">
                      <RenderHeaderButton
                        text={'Contacto'}
                        refComp={props.footerRef}
                        window={props.window}
                        idName={'contacto'}
                      ></RenderHeaderButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </Hidden>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <MuiThemeProvider theme={theme}>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon className="arrow-up" />
          </Fab>
        </MuiThemeProvider>
      </ScrollTop>
    </React.Fragment>
  );
}
