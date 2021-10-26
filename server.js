const express = require('express');

// require config
const config = require('./config');
const { views, static, port } = config;
// require services

// extract and pass to router
// const user = new User('./app/data/user.json');

// initialize express
const app = express();

// require routing defaults to index.js
const routes = require('./app/routes');

// set template engine
app.set('view engine', 'ejs');

// find and set views set views folder
app.set('views', views);

// serve static files we can pass '/static/url' param
app.use('/', express.static(static));

// on application start we can also set a global variable
app.locals.siteName = 'Modulr Css Framework';

// routing
app.use('/', routes());

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
