const express = require('express');

// -- REQUIRE CONFIG FILES
const config = require('./config');
const { views, static, port } = config;

// -- LIVE RELOAD + SERVER
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(static);

// notify browser about changes
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

// -- REQUIRE SERVICES

// extract and pass to router
// const user = new User('./app/data/user.json');

// -- INIT EXPRESS
const app = express();

// -- LIVE RELOAD MIDDLEWARE
app.use(connectLiveReload());

// -- REQUIRE ROUTING defaults to index.js
const routes = require('./app/routes');

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
