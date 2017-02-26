import React from 'react'
import ApiCall from './ApiCalls'


class Queries extends React.Component{

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
        <div className="ui fluid action input">
          <input onChange={this.handleChange.bind(this)} placeholder="Enter your reply" type="text"/>
          <div onClick={() => this.props.onQueryClick(query._id, this.state.input)}
              className="ui teal button">Reply</div>
        </div>
      </div>

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
          </div>
      </div>

        )
    }
}

export default Queries;
