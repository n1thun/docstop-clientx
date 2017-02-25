import React, { Component } from 'react'
import { Input, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router'
import Login from './components/Login';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
      <h1>React Router Tutorial</h1>
      <ul role="nav">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      {this.props.children}
      <h1>React Router Tutorial</h1>
    </div>
  )
  }
}

export default App;
