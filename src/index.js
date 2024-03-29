import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import DocNav from './components/doctor/DocNav';
import PatientNav from './components/patient/PatientNav';
import About from './components/About';
import DoctorDash from './components/doctor/DoctorDash';
import PatientDash from './components/patient/PatientDash';
import NotFound from './components/NotFound';
import { Router, Route, browserHistory,IndexRoute  } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
  <Route path="/" component={Login}/>
    <Route path="/doctor" component={DocNav}>
      <IndexRoute component={DoctorDash}/>
    <Route path="/about" component={About}/>
    </Route>
    <Route path="/patient" component={PatientNav}>
      <IndexRoute component={PatientDash}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('root'))
