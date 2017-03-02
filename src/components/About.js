
import React from 'react';
import ApiCalls from './ApiCalls';

class About extends React.Component {

  state = {
    patients: [],
    showRemoveIcon: false,
    searchValue: '',
  };

  constructor(props) {
  super(props);
  }


  render() {

    return (
      <div>
        <h1> About page </h1>
        <form method="post" encType="multipart/form-data" action="/api/files/upload">
            <input type="text" name="patientId" />
            <input type="text" name="doctorId" />
            <input type="file" name="upl"/>
            <input type="submit" value="Upload"/>
        </form>

      </div>
    );
  }
}

export default About;
