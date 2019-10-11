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
import { ForDesktop } from '../Media/Media';

class HomeComponent extends React.Component {
  render() {
    // return (
    //   <div class="MainContainer">
    //     <div class="ParallaxContainer">
    //       <h1>Aloha!</h1>
    //     </div>

    //     <div class="ContentContainer">
    //       <div class="Content">
    //         <p>
    //           ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o
    //           nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o
    //           ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i
    //           keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī.
    //           ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana
    //           hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia
    //           i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o
    //           nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu
    //           hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    //         </p>
    //         <p>
    //           ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o
    //           nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o
    //           ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i
    //           keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī.
    //           ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana
    //           hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia
    //           i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o
    //           nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu
    //           hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    //         </p>
    //         <p>
    //           ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o
    //           nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o
    //           ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i
    //           keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī.
    //           ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana
    //           hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia
    //           i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o
    //           nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu
    //           hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // );
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

        {/* <div className="html-wrapper">
          <div className="body-wrapper">
            <div className="parallax-wrapper">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className="regular-wrapper">
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </Fragment>
    );
  }
}

export default HomeComponent;
