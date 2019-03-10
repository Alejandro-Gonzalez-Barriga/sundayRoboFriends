import React, { Component } from 'react';//react is being distructoring and we import the Component
import logo from './logo.svg';//import the logo
import './Hello.css';//import app.css

class Hello extends Component {//extends Component properties to App
  render() {//function that returns only one item
    return(//encapsulate the return value if you have more than one element
//className must be used for the class
//jsx creates the virtual   DOM
//react compares DOM to virtual DOM
    <div className = 'f1 tc'>
    <h1>Hello Mundo </h1>
    <p>Welcome to React </p>
    <p>{this.props.greeting}</p>
    </div>
  )//curly tells that we are using 
  }
}
export default Hello//
