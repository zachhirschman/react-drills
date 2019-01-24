import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      userInput: ""
    }
  }
  handleChange(value){
    this.setState({
      userInput: value
    })

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={(e) => this.handleChange(e.target.value)} type= "text"></input>
        <button>Click Here</button>
        <h4 className = "userInput">{this.state.userInput}</h4>
      </div>
    );
  }
}

export default App;
