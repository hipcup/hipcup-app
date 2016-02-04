var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CoffeeRunSchema = new Schema({
    runnerName:    { type: String, required: true},
    coffeeShop:    { type: String, required: true},
    timeStamp:     Date,
    maxOrders:     Number, 
    slackChannel:  String,
    timeUntilRun:  { type: Date, required: true}
});

module.exports = mongoose.model('coffeeRun', CoffeeRunSchema);
