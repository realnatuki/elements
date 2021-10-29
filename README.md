# modulr

Router example

```JS
const express = require('express');

const router = express.Router();

// import routes
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

// this way we can pass arguments to our routing app
// this is exported as routes() dataService is an object
module.exports = (dataService) => {
  const { speakersService } = dataService;

  router.get('/', async (req, res) => {
    const gallery = await speakersService.getAllArtwork();
    const topSpeakers = await speakersService.getList();
    console.log(topSpeakers);

    res.render('layout', {
      pageTitle: 'Welcome Page',
      template: 'home',
      topSpeakers,
      gallery,
    });

    // cookie session counter test
    // if (!req.session.visitcount) {
    //   req.session.visitcount = 0;
    // }
    // req.session.visitcount += 1;

    // console.log(`Number of visits: ${req.session.visitcount}`);
  });

  // include other routes and pass dataParam is service
  // pass object with all routes
  router.use('/speakers', speakersRoute(dataService));
  router.use('/feedback', feedbackRoute(dataService));

  return router;
};

```


```BASH
lsof -i tcp:3000 
 kill -9 PID
```

