import React from "react";
import Button from "../Button";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item-1">
            <Button name="Relay 1" />
            <Button name="Relay 2" />
            <Button name="LED lights" />
          </div>
          <div className="flexbox-item flexbox-item-2"></div>
          <div className="flexbox-item flexbox-item-3"></div>
        </div>
      </div>
    );
  }
}

export default Home;
