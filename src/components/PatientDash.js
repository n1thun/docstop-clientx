import React from 'react'
import PatientAppoinmentView from './PatientAppoinmentView'
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
    currentUser: {},
    }
  }

  componentWillMount() {
    console.log("b4 update");
    var self = this;
    var PatientId = sessionStorage.getItem('cUserId');

    // Populates patient profile
    var currentUser = fetch(`api/users/${PatientId}`).then(function(response) {
    	return response.json();
    }).then(function(j) {
      self.setState({
        currentUser: j // set patient as current pt
      });
    });

    //Populates patient queries
    var patientQueries = fetch(`api/queries/queriesByUser/${PatientId}`).then(function(response) {
      return response.json();
    }).then(function(j) {
        self.setState({
          queries: j // set patient as current pt
        });
    });
  };

  postPatientQuery = (patientQuery) => {
    var patId = sessionStorage.getItem('cUserId');
    ApiCall.postQuery(patId, patientQuery);

    //reload queries from API
    var patientQueries = fetch(`api/queries/queriesByUser/${patId}`).then(function(response) {
      return response.json();
    }).then(function(j) {
        self.setState({
          queries: j // set patient as current pt
        });
    });
  }

  render() {
    return (
      <div>
          <div className="ui stackable grid">
            <div className="stretched row">
            <div className="four wide column">
              <PatientProfile profileData={this.state.currentUser}/>
            </div>
            <div className="twelve wide column pdr">
            <PatientAppoinmentView />
            </div>
          </div>
          </div>
          <div className="row pdtop">
          <PatientQueries onQueryClick={this.postPatientQuery} queryData={this.state.queries}/>
          </div>
        </div>

    )
  }
}

export default Dash;
