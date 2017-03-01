import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h3 className="ui top attached header">
          <i className="first aid icon"></i>
          Medical Records
        </h3>
        <div className="ui attached segment">
          <div className="ui relaxed divided list">
        <div className="item">
          <i className="large file middle aligned icon"></i>
          <div className="content">
            <a className="header">Semantic-Org/Semantic-UI</a>
            <div className="description">Updated 10 mins ago</div>
          </div>
        </div>
        <div className="item">
          <i className="large file middle aligned icon"></i>
          <div className="content">
            <a className="header">Semantic-Org/Semantic-UI-Docs</a>
            <div className="description">Updated 22 mins ago</div>
          </div>
        </div>
        <div className="item">
          <i className="large file middle aligned icon"></i>
          <div className="content">
            <a className="header">Semantic-Org/Semantic-UI-Meteor</a>
            <div className="description">Updated 34 mins ago</div>
          </div>
        </div>
      </div>
      <div className="ui vertical animated button" tabindex="0">
        <div className="visible content">Upload file</div>
        <div className="hidden content">
          <i className="upload icon"></i>
        </div>
      </div>
        </div>
      </div>
    )
  }
})
