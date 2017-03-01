import React from 'react'
import NewAppointment from './NewAppointment'
import PatientScheduleTable from './PatientScheduleTable'

export default React.createClass({
  render() {
    return (
      <div>
        <h3 className="ui top attached header">
          <i aria-hidden="true" className="calendar icon"></i>
          Appointment Schedule
        </h3>
        <div className="ui attached segment">
        <PatientScheduleTable />
        <NewAppointment />
        </div>
      </div>

    )
  }
})
