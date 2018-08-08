import React, { Component } from 'react';
import { connect } from 'react-redux';
import Example1 from './containers/Ex1';
import Example2 from './containers/Ex2';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <Example1 />
        <Example2 />
      </div>
    );
  }
}

export default App;
