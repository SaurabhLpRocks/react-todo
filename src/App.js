import './App.css';

import React, { Component } from 'react';

import AddTodoScreen from './containers/AddTodoScreen';
import FilterScreen from './containers/FilterScreen';
import TodoScreen from './containers/TodoScreen';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
          <div className="col-lg-12">
            <AddTodoScreen />
          </div>
          <div className="col-lg-12">
            <TodoScreen />
          </div>
          <div className="col-lg-12">
            <FilterScreen />
          </div>
        </div>
      </div>
    );
  }
}


export default App;

