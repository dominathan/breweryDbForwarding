var express = require('express');
var port = process.env.PORT || 3000;
var http = require('http');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/any-request/:url', function(req,res,next) {
  var url = req.params.url
  request.get({url: url}, function(err, response) {
    if(err) next(err);
    res.send(response.body);
  });
});

app.listen(port, function() {
  console.log(" LISTENING ON PORT " + port);
});
