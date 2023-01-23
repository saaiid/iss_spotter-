const { fetchMyIP } = require('./iss');

const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('162.245.144.188', (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  request(`https://ipwho.is/${ip}`, (error, response, body) => {
    // handle error and parse response
});
  console.log('It worked! Returned coordinates:', data);
});

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});


