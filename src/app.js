// import React and IndecisionApp
import React from 'react'; // this is ES6, equivalent to ES5's: var React = require('react');
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; // make sure all browsers start from the same place
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));