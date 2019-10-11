import React, { Fragment } from 'react';
import HeaderContainer from '../Header/HeaderComponent';
import FooterComponent from '../Footer/FooterComponent';
import RedesComponent from '../Redes/RedesComponent';
import Sucursales from '../Sucursales/SucursalesComponent';
import SucursalesAux from '../Sucursales/SucursalesComponentAux';
import Brands from '../Brands/Brands';
import Rubros from '../Rubros/Rubros';
import WhyUs from '../WhyUs/WhyUs';
import MiddleBlock from '../MiddleBlock/MiddleBlock';
import Intro from '../Intro/Intro';
import AboutUs from '../AboutUs/AboutUs';
import { ForDesktop, ForMobile } from '../Media/Media';
import { Parallax } from 'react-parallax';
import i1 from '../../assets/images/img1.jpg';
import i14 from '../../assets/images/img14.jpg';
import i16 from '../../assets/images/img16.jpg';
import r3 from '../../assets/images/route3.jpg';
import r6 from '../../assets/images/route6.jpg';
import a1 from '../../assets/images/autosBlackWhite.png';
import backgroundStatic from '../../assets/images/backgroundstatic3.jpg';

class HomeComponent extends React.Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer {...this.props} />
        <ForDesktop>
          <RedesComponent />
        </ForDesktop>
        <Parallax bgImage={backgroundStatic} strength={500}>
          <div style={{ height: 700 }}>
            <Intro blockRef={this.props.introRef} />
          </div>
        </Parallax>

        <Parallax bgImage={i16} strength={500}>
          <div style={{ height: 1200 }}>
            <AboutUs blockRef={this.props.aboutUsRef} />
          </div>
        </Parallax>

        <ForDesktop>
          <Parallax bgImage={r6} strength={500}>
            <div style={{ height: 1000 }}>
              <Sucursales blockRef={this.props.sucursalesRef} />
            </div>
          </Parallax>
        </ForDesktop>
        <ForMobile>
          <Parallax bgImage={r3} strength={500}>
            <div style={{ height: 2000 }}>
              <Sucursales blockRef={this.props.sucursalesRef} />
            </div>
          </Parallax>
        </ForMobile>
        <Parallax strength={500}>
          <div style={{ height: 400 }}>
            <Brands />
          </div>
        </Parallax>
        <Parallax bgImage={a1} strength={300}>
          <div style={{ height: 500 }}></div>
        </Parallax>
        <Parallax strength={500}>
          <div style={{ height: 400 }}>
            <Rubros
              blockRef={this.props.rubrosRef}
              goToAllRubros={this.props.goToAllRubros}
            />
          </div>
        </Parallax>
        <ForDesktop>
          <Parallax strength={500}>
            <div style={{ height: 400 }}>
              <WhyUs />
            </div>
          </Parallax>
        </ForDesktop>
        <ForMobile>
          <Parallax strength={500}>
            <div style={{ height: 800 }}>
              <WhyUs />
            </div>
          </Parallax>
        </ForMobile>
        <Parallax bgImage={i14} strength={500}>
          <div style={{ height: 700 }}></div>
        </Parallax>
        <ForDesktop>
          <Parallax bgImage={i1} strength={500}>
            <div style={{ height: 750 }}>
              <FooterComponent footerRef={this.props.footerRef} />
            </div>
          </Parallax>
        </ForDesktop>
        <ForMobile>
          <Parallax bgImage={i1} strength={500}>
            <div style={{ height: 850 }}>
              <FooterComponent footerRef={this.props.footerRef} />
            </div>
          </Parallax>
        </ForMobile>
      </Fragment>
    );

    return (
      <Fragment>
        <header>
          <HeaderContainer {...this.props} />
          <ForDesktop>
            <RedesComponent />
          </ForDesktop>
        </header>

        <Intro blockRef={this.props.introRef} />
        <AboutUs blockRef={this.props.aboutUsRef} />
        <Sucursales blockRef={this.props.sucursalesRef} />
        {/* <SucursalesAux blockRef={this.props.sucursalesRef}/> */}
        <Brands />
        <Rubros
          blockRef={this.props.rubrosRef}
          goToAllRubros={this.props.goToAllRubros}
        />
        <WhyUs />
        <MiddleBlock />
        <footer>
          <FooterComponent footerRef={this.props.footerRef} />
        </footer>
      </Fragment>
    );
  }
}

export default HomeComponent;
