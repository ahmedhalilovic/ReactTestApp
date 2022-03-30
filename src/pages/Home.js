import React from 'react';
import Button from '../Button';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div>
          <Button name="Relay 1" />
          <Button name="Relay 2" />
          <Button name="LED lights" />
        </div>
      </div>
    );
  }
}

export default Home;
