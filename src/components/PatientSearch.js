import React from 'react'
import ApiCalls from './ApiCalls';

class PatientSearch extends React.Component {

  constructor () {
  super()
  this.state = {
    patients: [],
    showRemoveIcon: false,
    searchString: '',
    }
  }

  render() {

    const patientRows = this.props.patientData.map((patient) => (
      <tr onClick={() => this.props.onPatientClick(patient)}>
        <td>{patient.name}</td>
      </tr>
    ));

    return (
      <div id='patient-search'>
      <table className='ui selectable structured large table'>
        <thead>
          <tr>
            <th colSpan='5'>
              <div className='ui fluid search'>
                <div className='ui icon input'>
                  <input
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
          <tr>
            <th>Patient Name</th>
          </tr>
          { patientRows }
        </thead>
        <tbody>
        </tbody>
      </table>
      </div>
    )
  }
}

export default PatientSearch;
