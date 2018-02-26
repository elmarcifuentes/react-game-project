import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
      </div>
    );
  }
}

export default App;
