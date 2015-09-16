// We requiring mongoose packages
// It allows us to provide models to mongodb that map directly to the database.
var mongoose = require('mongoose');

// create the favorites schema.
// This is where we defined all our property for this object
var FavoriteSchema = new mongoose.Schema({
  // We are declaring the title property and it's requirements.
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = FavoriteSchema;
