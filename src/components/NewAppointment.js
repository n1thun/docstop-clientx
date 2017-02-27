import React from 'react'

export default React.createClass({
  render() {
    return (
        <div className="ui fluid accordion">
          <div className=" title">
            <i className="dropdown icon"></i>
            Create new Appointment
          </div>
          <div className="active content">
            <form className="ui form">
              <div className="fields">
                <div className="four wide field">
                  <label>Patient name</label>
                  <div className="field">
                    <select className="ui fluid search dropdown" name="card[expire-month]">
                      <option value="">Tom</option>
                      <option value="1">Dick</option>
                      <option value="2">Harry</option>
                    </select>
                  </div>
                </div>
                <div className="four wide field">
                  <label>Time</label>
                  <div className="field">
                    <select className="ui fluid search dropdown" name="card[expire-month]">
                      <option value="">10:00 am to 11:00 am</option>
                      <option value="1">11:00 am to 12:00 pm</option>
                      <option value="2">1:00 pm to 2:00 am</option>
                    </select>
                  </div>
                </div>
                <div className="four wide field">
                  <label>Date</label>
                  <div className="field">
                    <select className="ui fluid search dropdown" name="card[expire-month]">
                      <option value="">20-12-2017</option>
                      <option value="1">6-8-2017</option>
                      <option value="2">1-3-2017</option>
                    </select>
                  </div>
                </div>
                <div className="four wide field">
                  <label>Location</label>
                  <div className="field">
                    <select className="ui fluid search dropdown" name="card[expire-month]">
                      <option value="">Lincoln Park</option>
                      <option value="1">Loop</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="ui button" type="submit">Submit</button>
            </form>
          </div>
        </div>
    )
  }
})
