import React from 'react';

class BlockThreeComponent extends React.Component {
  render() {
    return (
      <div className="sucursales-container" ref={this.props.sucursalesRef}>
        <h1>Block Three</h1>
      </div>
    );
  }
}

export default BlockThreeComponent;
