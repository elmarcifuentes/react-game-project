import React, { Component } from "react";
import Navbar from '../Navbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import data from "../../data.json";

class Game extends Component {
    state = {
      data,
      score: 0,
    };

  render() {
    return (
      <div>
        <Navbar/>
        <Jumbotron/>
        {/* {this.state.data.map() => } */}
      </div>
    );
  }
}

export default Game;
