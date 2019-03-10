import React from 'react';//this is the painter that renders
import ReactDOM from 'react-dom';//used for the website, its like the glue to the dom
import './index.css';//imports styling to the components through App.js
import App from './App';//
import Hello from './Hello'
import 'tachyons'
import * as serviceWorker from './serviceWorker';
//sets the canvas for the js to the place where the id is
ReactDOM.render(<Hello greeting={'Hello' + 'React ninja'}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
