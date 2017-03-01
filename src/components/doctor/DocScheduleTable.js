import React from 'react'
import ApiCall from '../ApiCalls';

class DocScheduleTable extends React.Component {
    constructor() {
        super()
        this.state = {
            appoinments: []
        }
    }

    componentWillReceiveProps() {
        var self = this;
        var DocId = this.props.ptID;
        //Populate doc Schedule
        var doctorSchedule = fetch(`api/appointments/patientSchedule/${DocId}`).then(function(response) {
            return response.json();
        }).then(function(j) {
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
