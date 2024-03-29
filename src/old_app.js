import React, {Component} from 'react';
import logo from './logo.svg';
import './App1.css';
import {Button} from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Docstop</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <div>
                    <Button primary>Primary</Button>
                    <Button secondary>Secondary</Button>
                </div>
            </div>
        );
    }
}

export default App;
