import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      list:["Ice Cream","Potato Chips","Candy","Puppies"],
      userInput:""
    }
  }
  handleChange(value){
    this.setState({
      userInput:value
    });

  }
  displayInfo(arr){
    return arr.map((e) => <h2>{e + "\n"}</h2>)
  }
  searchList(value){
    return this.state.list.filter((e) => e.includes(value));
  }

  render(){
    return(
      <div className = "App">
        <input onChange = {(e) => this.handleChange(e.target.value)}></input>
        {this.displayInfo(this.searchList(this.state.userInput))}
      </div>
    )
  }
}
export default App;
