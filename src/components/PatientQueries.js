import React from 'react'
import ApiCall from './ApiCalls'


class PatientQueries extends React.Component{

  constructor () {
  super()
  this.state = {
    queries: [],
    input: '',
    }
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  componentWillMount() {
    ApiCall.getQueries((queries) => {
      this.setState({
        queries: queries
      });
    });
  }

  render() {
    const queryRows = this.props.queryData.map((query) => (

      <div>
      <div className="title">
          <i className="dropdown icon"></i>
          {query.patientQuery}
      </div>
      <div className="content">
        {
          query.answer.map(answer =>
            <p className="transition visible">
              {answer}
            </p>)
        }
      </div>
    </div>
    ));

  return (
      <div>
          <h3 className="ui top attached header">
              Queries
          </h3>
          <div className="ui attached segment">
              <div className="ui styled fluid accordion">
                {queryRows}
              </div>
              <br/>
              <div className="ui fluid action input">
                <input onChange={this.handleChange.bind(this)} placeholder="Enter your question" type="text"/>
                <div className="ui teal button">Ask a question</div>
              </div>
          </div>
      </div>
        )
    }
}

export default PatientQueries;
