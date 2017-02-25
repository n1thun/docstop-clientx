import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Dash from './components/Dash';
import Appoinments from './components/Appoinments';
import Files from './components/Files';
import Messages from './components/Messages';
import NotFound from './components/NotFound';
import { Router, Route, browserHistory,IndexRoute  } from 'react-router'

// TODO: Change Home to App and Dash to home
ReactDOM.render((
  <Router history={browserHistory}>
  <Route path="/" component={Login}/>
    <Route path="/home" component={Home}>
      <IndexRoute component={Dash}/>
    <Route path="/appoinments" component={Appoinments}/>
    <Route path="/files" component={Files}/>
    <Route path="/messages" component={Messages}/>
    <Route path="/about" component={About}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('root'))
