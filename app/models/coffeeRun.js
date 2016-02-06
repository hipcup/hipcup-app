var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var CoffeeOrder = require('./coffeeOrder.js').schema;

var CoffeeRunSchema = new Schema({
    runnerName:      { type: String, required: true},
    coffeeShop:      { type: String, required: true},
    timeStamp:       Date,
    maxOrders:       Number, 
    slackChannel:    String,
    timeUntilRun:    { type: Date, required: true},
    orders:          [CoffeeOrder],
    numOrdersPlaced: { type: Number, default: 0}
});

module.exports = mongoose.model('coffeeRun', CoffeeRunSchema);
