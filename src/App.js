import React, { Component } from 'react'
import { Input, Form, Button } from 'semantic-ui-react'
import Nav from './components/Nav';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Form>
        <Form.Field icon='users' iconPosition='left'>
          <Input icon='users' iconPosition='left' placeholder='E-mail address' />
        </Form.Field>
        <Form.Field >
          <Input icon='lock' iconPosition='left' placeholder='Password' />
        </Form.Field>
        <Button fluid
         type='submit'
         color = 'teal'
         size = 'large'>Submit</Button>
      </Form>
    )
  }
}

export default App;
