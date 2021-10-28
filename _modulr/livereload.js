const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const liveReload = (static, app) => {
  // -- LIVE RELOAD + SERVER
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(static);

  // notify browser about changes
  liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
      liveReloadServer.refresh('/');
    }, 100);
  });

  // -- LIVE RELOAD MIDDLEWARE
  app.use(connectLiveReload());
};

module.exports = liveReload;
