/* eslint-disable no-undef */
function getPatients(cb) {
  return fetch(`api/users/`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

// function getUserbyEmail(email, cb) {
//   return fetch(`api/users/getUserByEmail/${email}`, {
//     accept: 'application/json',
//   }).then(checkStatus)
//     .then(parseJSON)
//     .then(cb).then(console.log(cb));
// }

// function getUserbyEmail(email) {
//   fetch(`api/users/getUserByEmail/${email}`, {
//       accept: 'application/json',
//     }).then(function(response) {
//   	return response.json();
//   }).then(function(j) {
//   	// Yay, `j` is a JavaScript object
//   	console.log(j);
//   });
//
// }


function getQueries(cb) {
  return fetch(`api/queries/`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb).then(console.log(cb));
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

function getReplies(value, cb) {
  return fetch(`api/queries/${value}`, {
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

function parseJSON() {
  return response.json()
}

const ApiCalls = { getPatients, getQueries, getReplies, postReply };
export default ApiCalls;
