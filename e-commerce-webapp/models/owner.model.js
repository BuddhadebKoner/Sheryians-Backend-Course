const mongoose = require('mongoose');

const OwnerSchema = mongoose.Schema({
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
   products: {
      type: Array,
      default: []
   },
   picture: String,
   gstin: String,
});

module.exports = mongoose.model('Owner', OwnerSchema);