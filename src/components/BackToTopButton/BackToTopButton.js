import React from 'react';
import Button from '@material-ui/core/Button';

export default class ScrollButton extends React.Component {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Button className="button-scroll" onClick={() => this.scrollToTop()}>
        <span className="arrow-up fa fa-chevron-up"></span>
      </Button>
    );
  }
}
