console.log("NodeJS Version: " + process.version)
const express = require('express');
const app = express()

app.get('/', function(req, res) {
  res.send('bot encendido')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()
///////////////////////BOT//////////////////////////////
