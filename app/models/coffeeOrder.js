var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CoffeeOrderSchema = new Schema({
  coffeeRunID: { type: String, required: true }, 
  caffeinatorName: { type: String, required: true },
  drinkOrder:  { type: String, required: true },
  modifications: { type: String, default: 'none' },
  timeStamp:  { type: Date, default: Date.now() }
});

module.exports = mongoose.model('coffeeOrder', CoffeeOrderSchema);
