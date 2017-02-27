import React from 'react'
import Schedule from './Schedule'
import PatientProfile from './PatientProfile'
import PatientRecord from './PatientRecord'
import PatientQueries from './PatientQueries'
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
    var self = this;
    var PatientId = sessionStorage.getItem('cUserId');

    var currentPatient = fetch(`api/users/${PatientId}`).then(function(response) {
    	return response.json();
    }).then(function(j) {
      self.setState({
        currentPatient: j // set patient as current pt
      });
    });

    var patientQueries = fetch(`api/queries/queriesByUser/${PatientId}`).then(function(response) {
      return response.json();
    }).then(function(j) {
      self.setState({
        queries: j // set patient as current pt
      });
    });

    ApiCall.getQueries((queries) => {
      this.setState({
        queries: queries
      });
    });
  };

  postQuery = (qID, reply) => {
    ApiCall.postReply(qID, reply);
    ApiCall.getQueries((queries) => { // find better way
      this.setState({
        queries: queries
      });
    });
  }

  render() {
    return (
      <div>
          <div className="ui grid">
            <div className="five wide column">
              <PatientProfile profileData={this.state.currentPatient}/>
            </div>
            <div className="eleven wide column pdr">
            <PatientRecord />
            </div>
            {/* <Schedule /> */}
          </div>
          <div className="row pdtop">
          <PatientQueries onQueryClick={this.postQuery} queryData={this.state.queries}/>
          </div>
        </div>

    )
  }
}

export default Dash;
