import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ShowAlert extends Component {
  showAlert() {
    alert("I'm an alert!");
  }

  render() {
    return <button onClick={this.showAlert}>Show alert</button>;
  }
}

export default ShowAlert;