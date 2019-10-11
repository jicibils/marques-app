import React, { Fragment } from 'react';
import { Parallax } from 'react-parallax';
import Imagen2 from '../../assets/images/img14.jpg';
import Imagen3 from '../../assets/images/autosBlackWhite.png';
import { ForDesktop, ForMobile } from '../Media/Media';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

const image1 =
  'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

export default function MiddleBlock(props) {
  // return <div className="middle-block"></div>;
  return (
    <Fragment>
      {/* <ForMobile>
        <div className="middle-block-mobile"></div>
      </ForMobile>
      <ForDesktop>
        <Parallax
          bgImage={Imagen3}
          // strength={250}
          strength={100}
          bgImageStyle={{ width: '100%' }}
          className="middle-block"
        >
          <div style={{ height: 600 }}></div>
        </Parallax>
      </ForDesktop> */}
      {/* <div className="middle-block-test"></div> */}
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
    </Fragment>
  );
}
