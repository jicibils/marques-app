import React from 'react';
import {
  makeStyles
  //  useTheme
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import Phone from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import GoogleMaps from '../../assets/images/googlemaps.png';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '100%',
    height: 400
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '50%'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function HorizontalCard(props) {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Card className={classes.card}>
      {props.left && (
        <CardMedia
          className={classes.cover}
          image={props.image}
          title={props.titleImage}
        />
      )}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h4" component="h2">
            {props.titleCard}
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <Grid container item xs={12} justify="center">
            <Grid container item xs={2} justify="center">
              <Phone></Phone>
            </Grid>
            <Grid container item xs={10} justify="flex-start">
              <Typography color="textSecondary" variant="h6" component="p">
                {props.phone}
              </Typography>
            </Grid>
          </Grid>
          <br></br>
          <br></br>

          <Grid container item xs={12} justify="center">
            <Grid container item xs={2} justify="center">
              <Room></Room>
            </Grid>
            <Grid container item xs={10} justify="flex-start">
              <Typography color="textSecondary" variant="h6" component="p">
                {props.address}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <div className={classes.controls}>
          <Grid container item xs={12} justify="center">
            <Button size="small" color="primary">
              <img src={GoogleMaps} alt="GoogleMaps" width="32"></img>
              <a
                href={props.addressRef}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitanos
              </a>
            </Button>
          </Grid>
        </div>
      </div>
      {props.right && (
        <CardMedia
          className={classes.cover}
          image={props.image}
          title={props.titleImage}
        />
      )}
    </Card>
  );
}
