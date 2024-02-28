const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public`)) // middle ware. this servers up the front end. it is serveing up a static file

app.listen(4000, () => console.log("take us to warp 4000!"))