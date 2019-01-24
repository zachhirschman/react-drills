import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image.js"

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Image image="https://github.com/DevMountain/react-drills/raw/assets/5.png"/>
      </div>
    );
  }
}

export default App;
