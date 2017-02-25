import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <Route path="/home" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'))
