'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarSchema = new Schema({
  Created_date: {
    type: Date,
    default: Date.now
  },
  brand: {
    type: String,
    required: 'indica la marca'
  },
  model: {
    type: String,
    required: 'indica el modelo'
  }
});

module.exports = mongoose.model('Car', CarSchema);