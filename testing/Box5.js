import React, { Component } from 'react';
import axios from 'axios';

class UsingAxios extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
    this.getTodos = this.getTodos.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  async getTodos() {
    // With all properties
    let body = {
      userId: 1234,
      title: 'This is POST request with body',
      completed: true,
    };
    axios
      .post('./data', body)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h3>Using Axios in React for API call</h3>
        <hr />
      </div>
    );
  }
}

export default UsingAxios;
