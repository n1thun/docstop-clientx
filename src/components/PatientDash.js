import React from 'react'
import Schedule from './Schedule'
import PatientProfile from './PatientProfile'
import PatientRecord from './PatientRecord'
import Queries from './Queries'
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
          <Queries onQueryClick={this.postQueryReply} queryData={this.state.queries}/>
          </div>
        </div>

    )
  }
}

export default Dash;
