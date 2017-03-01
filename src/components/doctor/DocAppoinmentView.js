import React from 'react'
import NewDocAppointment from './NewDocAppointment'
import DocScheduleTable from './DocScheduleTable'
import ApiCall from '../ApiCalls'


class DocAppoinmentView extends React.Component {

  createNewAppointment = (appointmentDetails ) => {
            var doctorId = sessionStorage.getItem('cUserId');

            ApiCall.postAppointment(this.props.selectedPatientData._id,
            doctorId,
            appointmentDetails.dateValue,
            appointmentDetails.timeValue,
            appointmentDetails.locationValue,
            )
            console.log(this.props.selectedPatientData);
            console.log(appointmentDetails);

  }

  render() {
    return (
      <div>
        <h3 className="ui top attached header">
          <i aria-hidden="true" className="calendar icon"></i>
          Appointment Schedule
        </h3>
        <div className="ui attached segment">
        <DocScheduleTable ptID={this.props.selectedPatientData._id}/>
        <NewDocAppointment onNewAppClick={this.createNewAppointment}/>
        </div>
      </div>

    )
  }
}
export default DocAppoinmentView;
