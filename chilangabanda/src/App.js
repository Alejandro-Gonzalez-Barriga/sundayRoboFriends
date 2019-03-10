import React, { Component } from 'react';//react is being distructoring and we import the Component
import logo from './logo.svg';//import the logo
import './App.css';//import app.css

class App extends Component {//extends Component properties to App
  render() {//function that returns 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
