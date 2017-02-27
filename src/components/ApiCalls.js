/* eslint-disable no-undef */
function getPatients(cb) {
  return fetch(`api/users/patients`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}


function getQueries(cb) {
  return fetch(`api/queries/`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function postReply(queryID, queryReply) {
  fetch(`api/queries/answer/${queryID}`, {
  method: 'PATCH',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    answer: `${queryReply}`,
  })
})
}

function postQuery(patientId, patientQuery) {
  fetch(`api/queries/`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    patientId: `${patientId}`,
    patientQuery: `${patientQuery}`,
  })
})
}

function getPatientDetails(value, cb) {
  return fetch(`api/users/${value}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const ApiCalls = { getPatients, getQueries, postReply, postQuery };
export default ApiCalls;
