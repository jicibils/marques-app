import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import MarquesLogo from '../../assets/images//marqueslogo.png';

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => {
    const itemList = [
      { name: 'Nosotros', reference: props.aboutUsRef },
      { name: 'Sucursales', reference: props.sucursalesRef },
      { name: 'Rubros', reference: props.rubrosRef },
      { name: 'Contacto', reference: props.footerRef }
    ];
    return (
      <div
        className="drawer-list-container"
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <br></br>
        <Grid container item xs={12} justify="center">
          <img src={MarquesLogo} alt="marqueslogo" height="50"></img>
        </Grid>
        <List className="drawer-list">
          {itemList.map((item, index) => (
            <Fragment>
              <ListItem
                button
                key={item.name}
                onClick={() => props.scrollToRef(props.window, item.reference)}
              >
                <ListItemText
                  className="drawer-list-text"
                  primary={item.name}
                />
              </ListItem>
              <Divider className="drawer-list-divider" />
            </Fragment>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
