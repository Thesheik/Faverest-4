// What it does is it take a mongoose model and converts it into a restful api. CRUD.
var restful = require('node-restful');
module.exports = function(app, route){
  //setup the controller for REST.
  //define a variable and pass in the model that we trying to connect to. We are passing all the methods available to this model.
  var rest = restful.model(
    'favorite',
    app.models.favorite
  ).methods(['get', 'put', 'post', 'delete']);

  // Register this endpoint with the application.
  rest.register(app, route);

  // Return Middleware.
  return function(req, res, next){
    next();
  };
};
