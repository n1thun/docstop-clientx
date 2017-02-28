import React from 'react'
import ApiCall from './ApiCalls';

class DocScheduleTable extends React.Component {
    constructor() {
        super()
        this.state = {
            appoinments: []
        }
    }

    // componentWillReceiveProps(){
    //
    //   var self = this;
    //   var DocId = this.props.ptID;
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

    componentWillMount() {

      setTimeout(function(){
          console.log("THIS IS");
      }, 2000);
      console.log("DOG");

        var self = this;
        var DocId = this.props.ptID;
        console.log("Pt id below");
        console.log(DocId);

        console.log("HELLO");

        //Populate doc Schedule
        var doctorSchedule = fetch(`api/appointments/patientSchedule/${DocId}`).then(function(response) {
        // var doctorSchedule = fetch(`api/appointments/patientSchedule/58b4dbcd01bc732810ab8285`).then(function(response) {
            return response.json();
        }).then(function(j) {
            console.log(j);
            self.setState({
                appoinments: j // set patient as current pt
            });
        });

    };

    render() {

        const scheduleRows = this.state.appoinments.map((entry) => (
            <tr>
                <td>{entry.appointmentTime}</td>
                <td>{entry.appointmentDate}</td>
                <td>{entry.location}</td>
                <td className="selectable negative">
                  <a href="#">{entry.status}</a></td>
            </tr>
        ));

        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                        {scheduleRows}
                </tbody>
            </table>
        )
    }
}

export default DocScheduleTable;
