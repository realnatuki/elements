const express = require('express');
const liveReload = require('../_modulr/livereload');
// -- REQUIRE CONFIG FILES
const config = require('../config');
const { views, static, port } = config;

// -- INIT EXPRESS
const app = express();

// -- LIVE RELOAD
liveReload(static, app);

// -- REQUIRE SERVICES

// extract and pass to router
// const user = new User('./app/data/user.json');

// -- REQUIRE ROUTING defaults to index.js
const routes = require('./routes');

// -- SET TEMPLATE ENGINE
app.set('view engine', 'ejs');

// -- SET VIEWS FOLDER / PATH
app.set('views', views);

// -- SERVE STATIC FILES
// -- we can pass '/static/url' as path
app.use('/', express.static(static));

// -- on application start we can also set a global variable
app.locals.siteName = 'Modulr Css Framework';

// -- ROUTING
app.use('/', routes());

// -- START SERVER
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
