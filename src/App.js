import React, { Component } from 'react';
// import logo from './logo.svg';
import PizzaListContainer from './components/PizzaListContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PizzaListContainer />
        </header>
      </div>
    );
  }
}

export default App;
