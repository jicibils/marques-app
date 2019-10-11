import React from 'react';

class BlockTwoComponent extends React.Component {
  render() {
    return (
      <div className="block-two-container" ref={this.props.aboutUsRef}>
        {/* <h1>Block Two</h1> */}
      </div>
    );
  }
}

export default BlockTwoComponent;
