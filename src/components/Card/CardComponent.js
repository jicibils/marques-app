import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Room from '@material-ui/icons/Room';
import Phone from '@material-ui/icons/Phone';
import GoogleMaps from '../../assets/images/googlemaps.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: '345px !important'
  },
  media: {
    height: 260
  }
});

export default function CardComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.titleImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titleCard}
          </Typography>
          <br></br>
          <Grid container item xs={12} justify="flex-start">
            <Grid container item xs={2} justify="center">
              <Phone></Phone>
            </Grid>
            <Grid container item xs={10} justify="flex-start">
              <Typography variant="body2" color="textSecondary" component="p">
                {props.phone}
              </Typography>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Grid container item xs={12} justify="flex-start">
            <Grid container item xs={2} justify="center">
              <Room></Room>
            </Grid>
            <Grid container item xs={10} justify="flex-start">
              <Typography variant="body2" color="textSecondary" component="p">
                {props.address}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
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
      </CardActions>
    </Card>
  );
}
