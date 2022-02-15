import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.style = {
      color: 'red',
      padding: '10px',
    };
  }

  render() {
    return <button style={this.style}>Press me</button>;
  }
}

export default Button;
