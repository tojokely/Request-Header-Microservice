'use strict';
var http = require('http');

module.exports = function(app) {
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
    resp.on('data', function(ip) {
    app.get('/', function(req,res){
    var language = req.headers['accept-language'].split(',')[0]; 
    var software = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    res.send({"ipadress": ""+ip,"language":language, "software":software});
    });
  });
});
};