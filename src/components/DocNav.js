import React from 'react'
import { Link, IndexLink } from 'react-router'


export default React.createClass({
    render() {
        return (
            <div>
                <div className="ui fixed inverted menu ">
                    <div className="ui container">
                      <Link className="item" to="/doctor">
                      <h3 class="ui header">
                        <i aria-hidden="true" className="doctor huge icon"></i>
                        Docstop</h3></Link>
                        <IndexLink className="item" activeStyle={{ color: '#00B5AD' }} to="/doctor">
                        Dashboard</IndexLink>
                        <Link className="item" activeStyle={{ color: '#00B5AD' }} to="/about">About</Link>
                        <Link className="ui right floated item" to="/">Logout</Link>
                    </div>
                </div>
                <div id="displayArea">
                {this.props.children}
              </div>
            </div>
        )
    }
})
