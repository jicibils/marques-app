import React from 'react';
import { Tooltip } from '@material-ui/core';
import Whatsapp from '../../assets/images/wp.png';
import Instagram from '../../assets/images/instagram.png';
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import { ForDesktop, ForMobile } from '../Media/Media';
function RedesComponent(props) {
  return (
    <div className="redes-container">
      <a
        href="https://api.whatsapp.com/send?phone=543586014822"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tooltip title={'(358) 601-4822'} placement="right">
          <img src={Whatsapp} alt="Whatsapp" width="42"></img>
        </Tooltip>
      </a>
      <Tooltip title={'Instagram'} placement="right">
        <img src={Instagram} alt="Instagram" width="42"></img>
      </Tooltip>
      <ForDesktop>
        <Tooltip title={'Facebook'} placement="right">
          <img src={Facebook} alt="Facebook" width="50" />
        </Tooltip>
      </ForDesktop>
      <ForMobile>
        <Tooltip title={'Facebook'} placement="right">
          <img
            style={{ marginLeft: -5 }}
            src={Facebook}
            alt="Facebook"
            width="50"
          />
        </Tooltip>
      </ForMobile>
      <Tooltip title={'Twitter'} placement="right">
        <img src={Twitter} alt="Twitter" width="42"></img>
      </Tooltip>
    </div>
  );
}

export default RedesComponent;
