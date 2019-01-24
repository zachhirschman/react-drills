import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      arrayList: ["ketchup ","spagetti "," candy crush "," my son, greggor "]
    }
  }
  displayInfo(){
    return this.state.arrayList.map((e) =><h2>{e}</h2>)
  }
  render() {
    return (
      <div className = "App">
        <h2>{this.displayInfo()}</h2>
      </div>
    );
  }
}

export default App;
