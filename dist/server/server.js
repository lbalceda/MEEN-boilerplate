var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http');
console.log('hi');
var server = http.createServer(app);

app.use(express.static(__dirname + '/web'));

app.use(bodyParser());

global.config = require('./config');
global.constants = require('./constants');

//connect to mongodb
console.log('INFO: Connecting to MongoDB...');
console.log('\tURL: ' + (process.env.MONGO_URL || global.config.MONGO_URL));
console.log('\tCollections:' + JSON.stringify(global.constants.MONGO_COLLECTIONS));
global.db = require('mongojs').connect((process.env.MONGO_URL || global.config.MONGO_URL), global.constants.MONGO_COLLECTIONS);

//routes
require('./routes/api').bindRoutes(app);
// require('./routes/web').bindRoutes(app);

process.on('exit', function() {
  console.log('App is exiting.');
});

//listen for requests
server.listen(process.env.PORT || global.config.APP_PORT);
console.log('Todo app - Version ' + global.constants.APP_VERSION);
console.log('App started on port ' + process.env.PORT || global.config.APP_PORT);