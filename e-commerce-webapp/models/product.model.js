const { text } = require('body-parser');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
   image: {
      type: String,
      required: true
   },
   name: {
      type: String,
      required: true
   },
   prise: {
      type: Number,
      required: true
   },
   discount: {
      type: Number,
      default: 0
   },
   bgColor: String,
   panleColor: String,
   textColor: String,

});

module.exports = mongoose.model('Products', ProductSchema);