// bootstrap.js
const concurrently = require('concurrently');

concurrently(['nodemon ./server.js --ext js,ejs', 'webpack --watch'], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
}).then(
  function success() {
    // This code is necessary to make sure the parent terminates
    // when the application is closed successfully.
    console.log('exit clean...');
    process.exit(0);
  },
  function failure() {
    // This code is necessary to make sure the parent terminates
    // when the application is closed because of a failure.
    process.exit();
  }
);
