import React from 'react'
import DocAppoinmentView from './DocAppoinmentView'
import PatientSearch from './PatientSearch'
import PatientProfile from './PatientProfile'
import PatientRecord from './PatientRecord'
import AllQueries from './AllQueries'
import ApiCall from './ApiCalls';


class Dash extends React.Component {

  constructor () {
  super()
  this.state = {
    patients: [],
    queries: [],
    currentPatient: {},
    }
  }

  componentWillMount() {
    ApiCall.getPatients((patients) => {
      this.setState({
        patients: patients,
        currentPatient: patients[0] // set first patient as current pt
      });
    });
    ApiCall.getQueries((queries) => {
      this.setState({
        queries: queries
      });
    });
  };

  postQueryReply = (qID, reply) => {
    ApiCall.postReply(qID, reply);
    ApiCall.getQueries((queries) => { // find better way
      this.setState({
        queries: queries
      });
    });
  }


  setCurrentPatient = (patient) => {
    this.setState({ currentPatient: patient });
  }

  render() {
    return (
      <div className="ui grid">
        <div className="four wide column">
          <PatientSearch patientData={this.state.patients}
            onPatientClick={this.setCurrentPatient}/>
        </div>
        <div className="twelve wide column">
          <div className="row">
          <div className="ui grid">
            <div className="five wide column">
              <PatientProfile profileData={this.state.currentPatient}/>
            </div>
            <div className="eleven wide column pdr">
            <PatientRecord />
            </div>
          </div>
        </div>
        <div className="row pdtop">
        <DocAppoinmentView />
        <br/>
        <AllQueries onQueryClick={this.postQueryReply} queryData={this.state.queries}/>
      </div>
      </div>

      </div>
    )
  }
}

export default Dash;
