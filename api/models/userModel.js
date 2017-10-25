'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {type: String},
  mail: {type: String},
  password: {type: String}
});

module.exports = mongoose.model('Users', UserSchema);
