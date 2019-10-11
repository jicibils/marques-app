import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { orange } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

import './AllRubros.scss';

const rubros = [
  'RODAMIENTOS',
  'TENSORES DE CORREA',
  'BATERIAS',
  'RETEN GUIA DE DIRECTA',
  'LUBRICANTES Y QUIMICOS',
  'CAJAS DE DIRECCION',
  'HORQUILLAS DE EMBRAGUE',
  'KIT DE CAJA DE DIRECCION',
  'PALIERES',
  'PALIERES FLOTANTE',
  'CUBRE VOLANTES',
  'PALANCAS DE CAMBIO',
  'MANCHONES DE CARDAN',
  'MAZAS DE RUEDA',
  'EJES DE CAJA VELOCIDAD',
  'ELECTRO VENTILADORES',
  'EXTENSIONES DE CAJA',
  'SATELITES Y PLANETARIOS',
  'ARANDELAS DE DIFERENCIAL',
  'VARIOS DE DIFERENCIAL',
  'TANQUES DE COMBUSTIBLE',
  'LINEA EATON',
  'CAMPANAS DE FRENO',
  'SINFINES DE DIRECCION',
  'SECTORES DE DIRECCION',
  'TAPAS DE SECTOR',
  'PORTACORONAS',
  'LINEA FIAT',
  'FUELLES DE SEMIEJES (KITS)',
  'CRUCETAS',
  'MOVIMIENTOS DE DIRECCION',
  'MANCHONES DE DIRECCION',
  'PORTA CRAPODINAS',
  'CORONAS Y PINONES',
  'ANILLOS DE SINCRONIZADO',
  'FUELLES DE CREMALLERAS',
  'PASTILLAS DE FRENO',
  'ESPIRALES',
  'CAJAS DE VELOCIDAD',
  'DISCOS DE FRENO',
  'CRAPODINAS DE EMBRAGUE',
  'CARDANES (DESPIECE)',
  'EJES DE SATELITES',
  'AMORTIGUADORES',
  'PLACAS DE EMBRAGUE',
  'DISCOS DE EMBRAGUE',
  'VARIOS DE TREN DELANTERO',
  'LLANTAS',
  'CINTURONES DE SEGURIDAD',
  'ACCESORIOS REGLAMENTARIOS',
  'MANIJAS DE PUERTA',
  'SOPORTES DE PEDALERA',
  'VARIOS DE MOTOR',
  'JUNTAS DE CAJA',
  'JUNTAS DE DIFERENCIAL',
  'RADIADORES',
  'GUARDABARROS',
  'VIDRIOS LATERALES',
  'KIT DE EMBRAGUE',
  'BULONES DE BOMBA DE AGUA',
  'ADAPTADORES DE CAJA',
  'VARIOS DE CAJAS FIAT',
  'PALETAS DE VENTILADOR',
  'RETENES C.VELOCIDAD',
  'RETENES C.DIRECCION',
  'RETENES DIFERENCIAL',
  'HORQUILLAS DE CAJA',
  'ENGRANAJES DE CAJA',
  'BULONES DE TAPA Y MOTOR (KITS)',
  'SEMIEJES',
  'HOMOSINETICAS',
  'CREMALLERA L / CRISTAL',
  'CERRADURAS DE PUERTA',
  'CARCAZAS DE CAJA',
  'BOMBAS DE COMBUSTIBLE',
  'BOMBAS DE ACEITE',
  'BOMBAS DE AGUA',
  'CORONAS DE ARRANQUES',
  'CADENAS DE DISTRIBUCION',
  'ENGRANAJES DE DISTRIBUCION',
  'TIRACADENAS Y GUIAS',
  'POLEAS DE CIGUENAL',
  'POLEAS DE B.DIREC ',
  'POLEAS DE B.AGUA',
  'BOMBAS DE DIRECCION',
  'OPTICAS',
  'AXIALES (PRECAPS)',
  'BUJES DE SUSPENSION',
  'CABLES DE EMBRAGUE',
  'POLEAS VISCOSAS',
  'RADIADORES DE CALEFACCION',
  'SOPORTES DE CAJA',
  'REPARACIONES DE CAJA',
  'ALTERNADORES',
  'CORREAS DE DISTRIBUCION',
  'PATINES DE FRENO',
  'BOMBAS DE FRENO',
  'BUJIAS DE PRECALENTAMIENTO',
  'TRICETAS',
  'ESPEJOS',
  'FAROS DELANTEROS',
  'FAROS TRASEROS',
  'AROS DE FARO',
  'MARCO DE PARRILLA',
  'PARRILLAS DE FRENTE',
  'PARAGOLPES',
  'PUNTERAS DE PARAGOLPE',
  'LLAVES DE LUZ Y GIRO',
  'ENCAUSADORES',
  'SPOILER DE PARAGOLPE',
  'PUERTAS',
  'FRENTES DE CARROCERIA',
  'CUBRE PIEDRAS',
  'CAPOT',
  'PASARRUEDAS',
  'PORTON TRASERO AUTOS',
  'PORTON TRASERO PICK-UP',
  'TAPAS DE BAUL',
  'TECHOS',
  'CAJAS DE DIRECCION',
  'TAPAS DE CILINDROS',
  'ARBOL DE LEVAS',
  'CIGUENALES',
  'BIELAS',
  'ARBOL SECUNDARIO',
  'MULTIPLES DE ESCAPE',
  'MULTIPLES DE ADMISION',
  'DISTRIBUIDORES',
  'MOTORES DE ARRANQUE',
  'CARBURADORES',
  'FILTROS DE AIRE',
  'DEPRESORES',
  'TURBOS',
  'CARTER',
  'PARRILLAS DE SUSPENSION',
  'PUNTAS DE EJE',
  'PORTAMAZAS',
  'BARRAS DE TORSION',
  'ELASTICOS',
  'CHAPAS PALIER',
  'TAPAS DE DIFERENCIAL',
  'EJES DE PARRILLA',
  'BARRAS ESTABILIZADORAS',
  'CUNA DE MOTOR',
  'ADAPTADORES DE CARBURADOR',
  'BASES DE CARBURADOR',
  'BOBINAS DE ENCENDIDO',
  'ENGRANAJES DE MANDO',
  'CORREAS POLI-V',
  'EJES DELANTEROS',
  'CAZOLETAS',
  'PARABRISAS',
  'LUNETAS',
  'CARDANES COMPLETOS',
  'PORTA TERMOSTATOS',
  'BOTADORES',
  'VARILLAS DE VALVULAS',
  'BASES DE BOMBA DE AGUA',
  'TAPAS DE DISTRIBUCION',
  'BALANCINES',
  'BANCADAS DE ARBOL DE LEVAS',
  'VOLANTES BIMASA',
  'VOLANTE MOTOR',
  'VARIOS DE DIRECCION',
  'BARRAS DE DIRECCION',
  'BRAZOS PITMAN',
  'BRAZOS AUXILIARES',
  'REPARACIONES DE PALANCA',
  'CONJUNTOS DE MOTOR',
  'REPARACIONES DE EJE TRASERO',
  'INTERCOOLER',
  'ROTULAS Y EXTREMOS',
  'CILINDROS DE EMBRAGUE',
  'FUELLES DE CARDAN (KITS)',
  'SOPORTES DE MOTOR Y CAJA',
  'RETENES DE RUEDA',
  'POLEAS DE ALTERNADOR',
  'RADIADORES DE A.ACONDICIONADO',
  'VARIOS DE CHAPA',
  'BIELETAS BARRA ESTABILIZADORA',
  'CAJAS DE TRANSFERENCIA',
  'PASTILLAS DE BOTADOR',
  'BUJES DE SUSPENSION',
  'RODAMIENTOS DE RUEDA  KIT',
  'TERMOSTATOS',
  'DEPOSITOS',
  'KIT DE DISTRIBUCION',
  'CAMISAS DE PISTON (JGO)',
  'PRECAMARAS',
  'AROS DE MOTOR',
  'PISTONES',
  'PERNOS DE PISTON',
  'JUNTAS DE MOTOR (JGO)',
  'JUNTAS DE TAPA CILINDROS',
  'RETENES DE MOTOR',
  'COJINETES DE BIELA',
  'COJINETES DE BANCADA',
  'VARIOS DE CAJAS CHEVROLET',
  'VARIOS DE CAJAS FORD',
  'VARIOS DE CAJAS RENAULT',
  'VARIOS DE CAJAS IMPORTADOS',
  'VARIOS DE CAJAS PEUGEOT',
  'VARIOS DE CAJAS V.WAGEN',
  'COJINETES AXIALES',
  'COJINETES DE ARBOL DE LEVA',
  'BUJES DE BIELA',
  'VALVULAS DE MOTOR',
  'GUIAS DE VALVULAS',
  'RETENES DE VALVULAS',
  'MOTORES DE ARRANQUE',
  'JUNTAS DE CARTER',
  'JUNTAS DE ADMISION',
  'ESCAPES',
  'JUNTAS DE TAPA DISTRIBUCION',
  'COMPRESORES DE AIRE',
  'MANGUERAS DE CRAPODINAS',
  'CONECTORES DE CRAPODINAS',
  'DIFERENCIALES',
  'MORDAZAS DE FRENO',
  'BUTACAS',
  'EJES TRASEROS',
  'ENFRIADORES DE ACEITE',
  'VARILLA SELEC DE CAMBIOS',
  'CUERPOS MARIPOSA',
  'INYECTORES DE COMBUSTIBLE',
  'SENSORES',
  'BASES DE FILTRO ACEITE',
  'CAÑOS DE MOTOR',
  'GARGANTAS DE MOTOR',
  'TAPAS DE VALVULAS',
  'PARLANTES',
  'MANGUERAS DE TURBOS',
  'USADO',
  'TECLAS Y COMANDOS',
  'CABLES COMANDO SELECTORA',
  'PORTARETENES DE MOTOR',
  'ACCESORIOS DE MOTOR',
  'BOMBAS INYECTORAS',
  'COMMON RAIL',
  'INGRESOS',
  'EGRESOS',
  'MOTORES PASO A PASO',
  'BASES DE FILTRO COMBUSTIBLE',
  'MOTORES',
  'COMPUTADORA-ECU',
  'BANCADAS DE CIGUEÑAL'
];
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

const themeinput = createMuiTheme({
  palette: {
    primary: orange
  }
});

class AllRubros extends Component {
  state = {
    rubrosArray: rubros,
    rubroValue: ''
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getFakeArray = () => {
    const fakeArray = [];
    for (let index = 0; index < 100; index++) {
      fakeArray.push(1);
    }
    return fakeArray;
  };

  onChange = e => {
    e.stopPropagation();
    if (!e.target) return;
    const value = e.target.value;
    const filteredRubros = rubros.filter(rubro =>
      rubro.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ rubroValue: value, rubrosArray: filteredRubros });
  };

  goToHome = () => this.props.history.push('/', { fromRubros: true });

  render() {
    return (
      <Grid
        container
        item
        xs={12}
        justify="center"
        className="all-rubros-container"
      >
        <Grid container item xs={12} justify="center">
          <ThemeProvider theme={themeinput}>
            <div className="search-container">
              <TextField
                id="filled-search"
                label="Buscador"
                type="search"
                className={'search-textField'}
                margin="normal"
                variant="filled"
                value={this.state.rubroValue}
                onChange={this.onChange}
                fullWidth
              />
            </div>
          </ThemeProvider>
          <p className="title-rubros">TODOS LOS RUBROS</p>
        </Grid>
        <Grid container item xs={12} justify="center">
          {this.state.rubrosArray.map((rubro, index) => {
            return (
              <Fade key={index} in={true} {...{ timeout: 900 + index }}>
                <Grid container item xs={12} md={6} lg={4} justify="center">
                  <div className="highlight">
                    <span className="text">{rubro}</span>
                    <div className="under"> </div>
                  </div>
                </Grid>
              </Fade>
            );
          })}
        </Grid>
        <MuiThemeProvider theme={theme}>
          <Fab
            color="secondary"
            size="medium"
            className="BackToTheFuture"
            onClick={() => this.goToHome()}
          >
            <KeyboardArrowLeftIcon className="arrow-up" />
          </Fab>
        </MuiThemeProvider>
      </Grid>
    );
  }
}
export default withRouter(AllRubros);
