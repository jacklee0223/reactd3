var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  location: String
})

module.exports = mongoose.model('Users', UserSchema);
