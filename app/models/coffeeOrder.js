var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var maxlength = [24, 'The coffee run ID cannot exceed 24 characters'];
var minlength = [24, 'coffee run ID must be at least 24 characters'];

var CoffeeOrderSchema = new Schema({
  coffeeRunID: { type: String, required: true, minlength: minlength, maxlength: maxlength}, 
  caffeinatorName: { type: String, required: true },
  drinkOrder:  { type: String, required: true },
  modifications: { type: String, default: 'none' },
  timeStamp:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('coffeeOrder', CoffeeOrderSchema);
