/* eslint-disable no-undef */
function getPatients(cb) {
    return fetch(`api/users/patients`,
      {accept: 'application/json'})
      .then(checkStatus)
      .then(parseJSON)
      .then(cb);
}

function getQueries(cb) {
    return fetch(`api/queries/`, {
      accept: 'application/json'})
      .then(checkStatus)
      .then(parseJSON)
      .then(cb);
}


function getFiles(value, cb) {
  console.log("files api called");
    return fetch(`api/files/byUser/${value}`,
       {accept: 'application/json'})
       .then(checkStatus)
       .then(parseJSON).then(cb);
}

function postReply(queryID, queryReply) {
    fetch(`api/queries/answer/${queryID}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({answer: `${queryReply}`})
    })
}

function postQuery(patientId, patientQuery) {
    fetch(`api/queries/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({patientId: `${patientId}`, patientQuery: `${patientQuery}`})
    })
}

function testApi(patientId) {
      console.log("test api call");
    console.log(patientId);
}

function postAppointment(patientId, doctorId, appointmentDate, appointmentTime, appointmentLocation) {
    fetch(`api/appointments`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({patientId: `${patientId}`, doctorId: `${doctorId}`,
          appointmentDate: `${appointmentDate}`, appointmentTime: `${appointmentTime}`, location: `${appointmentLocation}`})
    })
}

function getPatientDetails(value, cb) {
    return fetch(`api/users/${value}`,
       {accept: 'application/json'})
       .then(checkStatus)
       .then(parseJSON).then(cb);
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

const ApiCalls = {
    getPatients,
    getFiles,
    getQueries,
    postReply,
    postQuery,
    postAppointment,
    testApi
};
export default ApiCalls;
