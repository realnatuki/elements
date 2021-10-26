const path = require('path');

const config = {
  views: path.join(__dirname, './app/views'),
  static: path.join(__dirname, './app/static'),
  port: process.env.PORT || 3000,
};

module.exports = config;
