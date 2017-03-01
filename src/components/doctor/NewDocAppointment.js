import React from 'react'

class NewDocAppointment extends React.Component{

  constructor () {
  super()
  this.state = {
    timeValue: '10:00 am to 11:00 am',
    dateValue: '20-12-2017',
    locationValue: 'Lincoln Park',
    }
  }


  handleTimeChange(e) {
    this.setState({ timeValue: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ dateValue: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ locationValue: e.target.value });
  }

  handleSubmit(event) {
      event.preventDefault()
  }


  render() {
    return (
        <div className="ui fluid accordion">
          <div className=" title">
            <i className="dropdown icon"></i>
            Create new Appointment
          </div>
          <div className="active content">
            <form onSubmit={this.handleSubmit} className="ui form">
              <div className="fields">
                <div className="five wide field">
                  <label>Time</label>
                  <div className="field">
                    <select onChange={this.handleTimeChange.bind(this)} className="ui fluid search dropdown" >
                      <option value="10:00 am to 11:00 am">10:00 am to 11:00 am</option>
                      <option value="11:00 am to 12:00 pm">11:00 am to 12:00 pm</option>
                      <option value="1:00 pm to 2:00 am">1:00 pm to 2:00 am</option>
                    </select>
                  </div>
                </div>
                <div className="five wide field">
                  <label>Date</label>
                  <div className="field">
                    <select onChange={this.handleDateChange.bind(this)} className="ui fluid search dropdown" >
                      <option value="20-12-2017">20-12-2017</option>
                      <option value="6-8-2017">6-8-2017</option>
                      <option value="1-3-2017">1-3-2017</option>
                    </select>
                  </div>
                </div>
                <div className="six wide field">
                  <label>Location</label>
                  <div className="field">
                    <select onChange={this.handleLocationChange.bind(this)} className="ui fluid search dropdown" >
                      <option value="Lincoln Park">Lincoln Park</option>
                      <option value="Loop">Loop</option>
                    </select>
                  </div>
                </div>
              </div>
              <button onClick={() => this.props.onNewAppClick(this.state)}
                 className="ui button" type='submit'>Submit</button>
            </form>
          </div>
        </div>
    )
  }
}

export default NewDocAppointment;
