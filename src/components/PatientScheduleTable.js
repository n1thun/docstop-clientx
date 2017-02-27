import React from 'react'
import ApiCall from './ApiCalls';

export default React.createClass({
  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Patient name</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>No Action</td>
            <td className="selectable">
              <a href="#">Edit</a>
            </td>
            <td>11:00 am to 12:00 pm</td>
            <td>2-12-2017</td>
          </tr>
          <tr>
            <td>Jamie</td>
            <td>Approved</td>
            <td className="selectable">
              <a href="#">Edit</a>
            </td>
            <td>11:00 am to 12:00 pm</td>
            <td>2-12-2017</td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Denied</td>
            <td className="selectable">
              <a href="#">Edit</a>
            </td>
            <td>11:00 am to 12:00 pm</td>
            <td>2-12-2017</td>
          </tr>
          <tr className="warning">
            <td>John</td>
            <td>No Action</td>
            <td className="selectable warning">
              <a href="#">Requires change</a>
            </td>
           <td>11:00 am to 12:00 pm</td>
           <td>2-12-2017</td>
          </tr>
          <tr>
            <td>Jamie</td>
            <td className="positive">Approved</td>
            <td className="selectable positive">
              <a href="#">Approve</a>
            </td>
            <td>11:00 am to 12:00 pm</td>
            <td>2-12-2017</td>
          </tr>
          <tr>
            <td>Jill</td>
            <td className="negative">Denied</td>
            <td className="selectable negative">
              <a href="#">Remove</a>
            </td>
            <td>11:00 am to 12:00 pm</td>
            <td>2-12-2017</td>
          </tr>
        </tbody>
      </table>
    )
  }
})
