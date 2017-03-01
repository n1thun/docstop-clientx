import React from 'react'
import ApiCalls from '../ApiCalls';

class PatientSearch extends React.Component {

  constructor () {
  super()
  this.state = {
    showRemoveIcon: false,
    searchString: '',
    }
  }

  handleChange(e) {
    this.setState({ searchString: e.target.value });
  }

  render() {

    var patientEntries = this.props.patientData;
    var searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0){
        patientEntries = patientEntries.filter(function(patient){
          return patient.name.toLowerCase().match( searchString );
        });
      }

    const patientRows = patientEntries.map((patient) => (
      <tr onClick={() => this.props.onPatientClick(patient)}>
        <td>{patient.name}</td>
      </tr>
    ));



    return (
      <div>
          <h3 className="ui top attached header">
          <i aria-hidden="true" className="find icon"></i>
              Search
          </h3>
          <div className="ui attached segment">
      <div id='patient-search'>
      <table className='ui selectable structured large table'>
        <thead>
          <tr>
            <th colSpan='5'>
              <div className='ui fluid search'>
                <div className='ui icon input'>
                  <input
                    onChange={this.handleChange.bind(this)}
                    className='prompt'
                    type='text'
                    placeholder='Search by Patient name...'
                  />
                  <i className='search icon' />
                </div>
                <i
                  className='remove icon'
                />
              </div>
            </th>
          </tr>
          { patientRows }
        </thead>
        <tbody>
        </tbody>
      </table>
      </div>
    </div>
</div>
    )
  }
}

export default PatientSearch;
