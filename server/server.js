// dependencies
var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 8000;
var cookieParser = require('cookieparser');
var bodyParser = require('body-parser');
var cors = require('cors');

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
app.use(cors());

// Serve client files
app.use(express.static(__dirname + '/../client'));

// listen on port
http.listen(port, function() {
  console.log('Listening on port ' + port);
});
