// statefull functional components

import React, { Component } from "react";
class Statefullclass extends Component {
  render() {
    return (
      <h1>
        Hello {this.props.name}, Welcome to {this.props.state}
      </h1>
    );
  }
}

export default Statefullclass;
