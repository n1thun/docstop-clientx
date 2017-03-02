import React    from 'react'
import ApiCalls from '../ApiCalls';
import Request  from 'superagent'
import _        from 'lodash'

class PatientRecord extends React.Component {

  constructor () {
  super()
  this.state = {}
  }


  componentWillMount(){

    var url = "api/files/byUser/58b3c1ce90cf20232cec415c/";
    Request.get(url).then((response) =>{
      console.log(response.body);
      this.setState({
        files: response.body
      });
    });

  }


  render() {

    var fileRows = _.map(this.state.files, (file) => {
      return <div className="item">
          <i className="large file middle aligned icon"></i>
          <div className="content">
            <a className="header">{file.filename}</a>
            <div className="description">{file.creationDate}</div>
          </div>
        </div>;
    });


    return (
      <div>
        <h3 className="ui top attached header">
          <i className="first aid icon"></i>
          Medical Records
        </h3>
        <div className="ui attached segment">
          <div className="ui relaxed divided list">

            { fileRows }
      </div>
      <div className="ui vertical animated button" tabindex="0">
        <div className="visible content">Upload file</div>
        <div className="hidden content">
          <i className="upload icon"></i>
        </div>
      </div>
        </div>
      </div>
    )
  }
}


export default PatientRecord;
