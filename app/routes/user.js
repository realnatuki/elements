const express = require('express');

const router = express.Router();

module.exports = (data) => {
  router.get('/', (req, res) => {
    res.render('layout', {
      title: 'Users',
      template: 'user',
      text: 'hello from ',
    });
  });
  return router;
};
