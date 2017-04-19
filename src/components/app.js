import React, { Component } from 'react';

import Login from './login';
import Navbar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
       {this.props.children}
      </div>
    );
  }
}
