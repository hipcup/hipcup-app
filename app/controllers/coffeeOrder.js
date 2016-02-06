var ObjectId = require('mongoose').Types.ObjectId; 
var CoffeeOrder = require('../models/coffeeOrder.js');
var CoffeeRun = require('../models/coffeeRun.js');

exports.placeOrder = function(req, res) {

  var coffeeOrder = new CoffeeOrder ({
    coffeeRunID:     req.body.coffeeRunID,
    caffeinatorName: req.body.drinkerName,
    drinkOrder:      req.body.drinkOrder,
    modifications:   req.body.modifications
  });

  console.log('coffeeOrder:', coffeeOrder);

  CoffeeRun.findOne({ "_id": new ObjectId(coffeeOrder.coffeeRunID)}, function (err, coffeeRun) {
    if (err) {
      console.log("inside coffee err");
      return console.error(err);
    }
      
    
    if(!coffeeRun) {
      console.log("no coffee run found");
      res.send({
        err: "Sorry, no coffee run exists at this URL. Try creating a coffee run or double check the url provided.",
        success: false
      });
    } 

    console.log("coffee run exists:", coffeeRun);
    
    // if maxNumOrders exceeded 
    // if(coffeeRun.numOrdersPlaced >= coffeeRun.maxOrders) {
    //   console.log("num of orders placed is at max orders");
    //   res.send({
    //     err: "Sorry, the number of orders for this coffee run has been exceed. Your order cannot be placed.",
    //     success: false
    //   });
    // }

    // if coffee run has expired  
    // if(coffeeRun.timeUntilRun === 0) {
        //   console.log("coffee run has expired");
        //   res.send({
        //     err: "Sorry, this coffee run has expired. Try creating a new run!",
        //     success: false
        //   });
        // }

    // validate coffeeOrder prior to adding to coffee run


    // add coffeeOrder to coffeeRun Orders
    console.log("coffeeRun.orders", coffeeRun.orders, coffeeOrder);
    coffeeRun.orders.push(coffeeOrder);
    coffeeRun.numOrdersPlaced = coffeeRun.numOrdersPlaced++;
    
    // save to database
    coffeeRun.save(function (err) {
      if (err) {
        console.log("error saving coffee order in coffee run");
      }
      res.json({
        success: true,
        message: 'Coffee Order has been placed',
      });
    });
  });
}

