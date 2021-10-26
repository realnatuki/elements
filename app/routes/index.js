const express = require('express');

const router = express.Router();

// import routes
const userRoute = require('./user');

module.exports = (data) => {
  router.get('/', (req, res) => {
    res.render('layout', {
      title: 'Modulr Test',
      template: 'home',
    });
  });

  // include other routes
  router.use('/users', userRoute(data));
  return router;
};
