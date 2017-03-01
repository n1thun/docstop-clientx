import React from 'react'
import ApiCall from '../ApiCalls';

class PatientScheduleTable extends React.Component {
    constructor() {
        super()
        this.state = {
            appoinments: []
        }
    }

    componentWillReceiveProps() {
        var self = this;
        var userId = sessionStorage.getItem('cUserId');
        //Populate doc Schedule
        var Schedule = fetch(`api/appointments/patientSchedule/${userId}`).then(function(response) {
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
                <td>{entry.doctorId}</td>
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
                        <th>Doctor</th>
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

export default PatientScheduleTable;
