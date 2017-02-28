import React from 'react'
import NewAppointment from './NewAppointment'
import DocScheduleTable from './DocScheduleTable'
import ApiCall from './ApiCalls'


class DocAppoinmentView extends React.Component {

  componentWillMount() {
    console.log(this.props.selectedPatientData._id);
  };


  createNewAppointment = (appointmentDetails  ) => {
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
        <DocScheduleTable selectedPatientId={this.props.selectedPatientData}/>
        <NewAppointment onNewAppClick={this.createNewAppointment}/>
        </div>
      </div>

    )
  }
}
export default DocAppoinmentView;
