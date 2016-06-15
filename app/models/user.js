var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  email: {type: String, unique: true }
});

mongoose.model('User', UserSchema);
