import React, {Component} from 'react'
import {Button, Input, Form} from 'semantic-ui-react'
import {Link, browserHistory} from 'react-router'
import ApiCall from './ApiCalls';

class Login extends Component {
    state = {}

    handleSubmit(event) {
        event.preventDefault()
        const email = event.target.elements[0].value
        const passwd = event.target.elements[1].value
        const path = `/${email}/${passwd}`

        // var currentUser = ApiCall.getUserbyEmail(email)
        fetch(`api/users/getUserByEmail/${email}`, {accept: 'application/json'}).then(function(response) {
            return response.json();
        }).then(function(j) {
            sessionStorage.setItem('cUserId', j._id);
            if (j.isDoctor == true) {
                browserHistory.push('/doctor/'+"gg");
            } else {
              browserHistory.push('/patient');
            }
        });

        // browserHistory.push('/home');
    }

    render() {

        return (
            <div className="ui middle aligned center aligned grid">
                <div className="columnx">
                    <h2 className="ui teal image header">

                        <div className="content">
                            <i aria-hidden="true" className="doctor huge icon"></i>
                            Log-in to DocStop
                        </div>
                    </h2>
                    <form onSubmit={this.handleSubmit} className="ui large form ">
                        <div className="ui stacked  segment">
                            <Form>
                                <Form.Field icon='users' iconPosition='left'>
                                    <Input icon='users' iconPosition='left' placeholder='E-mail address'/> {' '}
                                </Form.Field>
                                <Form.Field >
                                    <Input icon='lock' iconPosition='left' placeholder='Password'/> {' '}
                                </Form.Field>
                                <Button fluid type='submit' color='teal' size='large'>Submit</Button>
                            </Form>
                        </div>
                        <div className="ui error message"></div>
                    </form>

                    <div className="ui message">
                        See Docstop.doc for instructions<br/>
                        <Link className="item" to="/home">Home</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;
