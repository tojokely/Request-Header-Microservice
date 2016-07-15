var express = require('express');
var app = express();
var routes = require('./routes/index.js');
var port = process.env.PORT || 8080;

routes(app);

app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});