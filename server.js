var express = require('express');
var app = express();
var routes = require('./routes/index.js');

routes(app);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});