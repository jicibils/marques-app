import React from 'react';
import { withRouter } from 'react-router-dom';
import HomeComponent from '../../components/Home/HomeComponent';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    // Create the ref
    this.introRef = React.createRef();
    this.aboutUsRef = React.createRef();
    this.sucursalesRef = React.createRef();
    this.rubrosRef = React.createRef();
    this.footerRef = React.createRef();
  }

  componentDidMount() {
    if (
      !!this.props.location &&
      !!this.props.location.state &&
      !!this.props.location.state.fromRubros
    )
      window.scrollTo(0, this.rubrosRef.current.offsetTop);
  }

  goToAllRubros = () => this.props.history.push('/rubros');

  render() {
    return (
      <HomeComponent
        introRef={this.introRef}
        aboutUsRef={this.aboutUsRef}
        sucursalesRef={this.sucursalesRef}
        rubrosRef={this.rubrosRef}
        footerRef={this.footerRef}
        window={window}
        goToAllRubros={this.goToAllRubros}
      />
    );
  }
}

export default withRouter(HomeContainer);
