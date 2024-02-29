const express = require('express')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fc44c6c5e7b044aca8fac08aa3336d2e',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.use(express.static(`${__dirname}/Public`)) // middle ware. this servers up the front end. it is serveing up a static file

app.listen(4000, () => console.log("take us to warp 4000!"))