var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CoffeeRunSchema = new Schema({
    runnerName:    { type: String, required: true},
    coffeeShop:    String,
    timeStamp:     Date,
    maxOrders:     Number, 
    slackChannel:  String,
    timeUntilRun:  Date
});

module.exports = mongoose.model('coffeeRun', CoffeeRunSchema);
