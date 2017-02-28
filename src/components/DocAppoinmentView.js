import React from 'react'
import NewAppointment from './NewAppointment'
import DocScheduleTable from './DocScheduleTable'
import ApiCall from './ApiCalls'


class DocAppoinmentView extends React.Component {

  // componentDidMount(){
  //   console.log("componentDidMount");
  //   console.log(this.props);
  // }

  // componentDidUpdate(){
  //
  //   var self = this;
  //   var DocId = this.props.selectedPatientData._id;
  //   console.log("Pt id below");
  //   console.log(DocId);
  //   //Populate doc Schedule
  //   var doctorSchedule = fetch(`api/appointments/patientSchedule/${DocId}`).then(function(response) {
  //       return response.json();
  //   }).then(function(j) {
  //       console.log(j);
  //       self.setState({
  //           appoinments: j // set patient as current pt
  //       });
  //   });
  //
  // }


  createNewAppointment = (appointmentDetails ) => {
            console.log("New app");
            console.log(this.props.selectedPatientData);

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
        <NewAppointment onNewAppClick={this.createNewAppointment}/>
        </div>
      </div>

    )
  }
}
export default DocAppoinmentView;
