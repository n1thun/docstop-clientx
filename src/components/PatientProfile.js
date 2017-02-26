import React from 'react'

export default React.createClass({
  render() {


    return (
      <div className="ui card">
        <div className="image">
          <img src="http://semantic-ui.com/images/avatar2/large/matthew.png"/>
        </div>
        <div className="content">
          <a className="header">{this.props.profileData.name}</a>
          <div className="meta">
            <span className="date">Age:{this.props.profileData.age}</span>
          </div>
          <div className="description">
            Patient records: Lorem Ipusim Dolor
          </div>
        </div>
        <div className="extra content">
          <i className="home icon"></i>
          {this.props.profileData.mailingAddress}
        </div>
        <div className="extra content">
          <i className="mail icon"></i>
          {this.props.profileData.email}
        </div>
        <div className="extra content">
          <i className="phone icon"></i>
          {this.props.profileData.phoneNumber}
        </div>
      </div>
    )
  }
})
