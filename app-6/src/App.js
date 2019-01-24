import React, { Component } from 'react';
import './App.css';
import ToDo from "./ToDo.js"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      userInput: "",
      userTasks: []
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.updateTask = this.updateTask.bind(this)
    this.format = this.format.bind(this)
  }
  handleUserInput(value){
    this.setState({
      userInput:value
    });
  }
  updateTask(){
    this.setState({
      userTasks:[...this.state.userTasks,this.state.userInput],
      userInput:""

    })
  }
  format(arr){
    return arr.map((e) => <h1>{e +"\n"}</h1>)
  }
  render() {
    return (
      <div className="App">
        <input onChange = {(e) => this.handleUserInput(e.target.value)}></input>
        <button onClick = {() => this.updateTask()}>Add Task</button>
        <ToDo label ={this.format(this.state.userTasks)}/>
      </div>
    );
  }
}



