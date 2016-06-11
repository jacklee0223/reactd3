// dependencies
var express      = require('express'),
    app          = express(),
    http         = require('http').Server(app),
    port         = process.env.PORT || 8000,
    cookieParser = require('cookieparser'),
    bodyParser   = require('body-parser'),
    cors         = require('cors'),
    mongoose     = require('mongoose'),
    dotenv       = require('dotenv'),
    passport     = require('passport'),
    passLocal    = require('passport-local');

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
app.use(cors());

// Serve client files
app.use(express.static(__dirname + '/../client'));

// require MongoDB and connect to DB
require('dotenv').load();
var dbUrl = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.MYDB;
mongoose.connect(dbUrl);

// listen on port
http.listen(port, function() {
  console.log('Listening on port ' + port);
});
