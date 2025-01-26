const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   fullname: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   cart: {
      type: Array,
      default: []
   },
   isAdmin: Boolean,
   orders: {
      type: Array,
      default: []
   },
   address: {
      type: String,
      default: ''
   },
   picture: String
});

module.exports = mongoose.model('User', UserSchema);