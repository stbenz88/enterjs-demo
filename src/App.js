import React, { Component } from 'react';
import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Willkommen auf der enterJS 2018</h1>
        </header>
        <MyComponent />

      </div>
    );
  }
}

export default App;
