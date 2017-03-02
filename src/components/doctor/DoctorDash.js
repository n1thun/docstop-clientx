import React from 'react'
import DocAppoinmentView from './DocAppoinmentView'
import PatientSearch from './PatientSearch'
import PatientProfile from '../common/PatientProfile'
import PatientRecord from '../common//PatientRecord'
import AllQueries from './AllQueries'
import ApiCall from '../ApiCalls';
import Request from 'superagent'

class Dash extends React.Component {

  constructor () {
  super()
  this.state = {
    patients: [],
    queries: [],
    files: [],
    currentPatient: {},
    }
  }



  componentWillMount() {
    var self = this;
    console.log(this.state.currentPatient._id);


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
    sessionStorage.setItem('patientUserId', patient._id);
  }

  render() {
    return (
      <div className="ui stackable padded grid">
        <div className="four wide column">
          <PatientSearch patientData={this.state.patients}
            onPatientClick={this.setCurrentPatient}/>
        </div>
        <div className="twelve wide column">
        <div className="ui stackable  grid">
          <div className="row stretched">
            <div className="five wide column">
              <PatientProfile profileData={this.state.currentPatient}/>
            </div>
            <div className="eleven wide column">
            <DocAppoinmentView selectedPatientData={this.state.currentPatient}/>
            </div>
          </div>
        </div>
        <div className="row pdtop">
        <AllQueries onQueryClick={this.postQueryReply} queryData={this.state.queries}/>
        <br/>
        <PatientRecord currentPt={this.state.files}/>
      </div>
      </div>
      </div>
    )
  }
}

export default Dash;
