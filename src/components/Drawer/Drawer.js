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
import Fade from 'react-reveal/Fade';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

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
      { name: 'Nosotros', reference: 'about-us', position: 800 },
      { name: 'Sucursales', reference: props.sucursalesRef, position: 2000 },
      { name: 'Rubros', reference: props.rubrosRef, position: 5000 },
      { name: 'Contacto', reference: props.footerRef, position: 700 }
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
          <Fade left cascade>
            <img src={MarquesLogo} alt="marqueslogo" height="50"></img>
          </Fade>
        </Grid>
        <List className="drawer-list">
          {itemList.map((item, index) => (
            <Fragment key={index}>
              <Fade left cascade>
                <ListItem
                  button
                  key={index}
                  onClick={() =>
                    item.name === 'Contacto'
                      ? scroll.scrollToBottom()
                      : scroll.scrollTo(item.position)
                  }
                >
                  <ListItemText
                    className="drawer-list-text"
                    primary={item.name}
                    // primary={
                    //   <Link
                    //     activeClass="active"
                    //     className="test6"
                    //     to="about-us"
                    //     spy={true}
                    //     smooth={true}
                    //     duration={500}
                    //   >
                    //     Test 6 (anchor)
                    //   </Link>
                    // }
                  />
                </ListItem>
                <Divider className="drawer-list-divider" />
              </Fade>
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
