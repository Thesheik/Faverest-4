// requiring all modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// create the app.
var app = express();

// adding Middleware necessary for REST API's.
// Middleware provide something unique It will intercept the json.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// give us the ability to use PUT
app.use(methodOverride('X-HTTP-Method-Override'));


// CORS SUPPORT
// It allows us to expose our api to all url that are accessing our server. For example Public Api. Any Server can access our server at this point.
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//
// app.use('/hello', function(req, res, next){
//   res.send('Hello Cheikh');
//   next();
// });

// Connect to MongoDB
// Here is the host it is going to run.
mongoose.connect('mongodb://localhost/faverest');
mongoose.connection.once('open', function(){
  // load the models.
  app.models = require('./models/index');
  // load the routes
  var routes = require('./routes');
  _.each(routes, function(controller, route){
    app.use(route, controller(app, route));
  });
  console.log('Listening on port 3000...');
  app.listen(3000);

});
