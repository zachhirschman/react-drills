import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import List from './List';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tasklist: []
    };

    this.handleAddTask = this.handleAddTask.bind( this );
  }

  handleAddTask( task ) {
    this.setState({ tasklist: [ ...this.state.tasklist, task ] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={ this.handleAddTask } />
        <List tasks={ this.state.tasklist } />
      </div>
    );
  }
}

