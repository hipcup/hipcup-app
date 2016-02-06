var ObjectId = require('mongoose').Types.ObjectId; 
var CoffeeOrder = require('../models/coffeeOrder.js');
var CoffeeRun = require('../models/coffeeRun.js');
var helper = require('../helperfunctions.js').serverHelperFunctions;
console.log("helper:", helper);

exports.placeOrder = function(req, res) {

  var coffeeOrder = new CoffeeOrder ({
    coffeeRunID:     req.body.coffeeRunID,
    caffeinatorName: req.body.drinkerName,
    drinkOrder:      req.body.drinkOrder,
    modifications:   req.body.modifications
  });

  console.log('coffeeOrder:', coffeeOrder);

  CoffeeRun.findOne({ "_id": new ObjectId(coffeeOrder.coffeeRunID)}, function (err, coffeeRun) {
    console.log("coffee run:", coffeeRun);
    if (err) {
      return console.error(err);
    }
      
    if(!coffeeRun) {
      helper.sendErrorResponse(res,"Sorry, no coffee run exists at this URL. Try creating a coffee run or double check the url provided.");
      return;
    } 

  // if coffee run has expired  
  // if(coffeeRun.timeUntilRun === 0) {
      // helper.sendErrorResponse(res,"Sorry, this coffee run has expired. Try creating a new run!");
      // return;
  // }
    
    // if maxNumOrders exceeded 
    if(coffeeRun.numOrdersPlaced >= coffeeRun.maxOrders) {
      helper.sendErrorResponse(res,"Sorry, the number of orders for this coffee run has been exceed. Your order cannot be placed.");
      return;
    } else {
    // validate coffeeOrder prior to adding to coffee run
      coffeeRun.orders.push(coffeeOrder);
      coffeeRun.numOrdersPlaced = increaseCoffeeOrderCountByOne(coffeeRun.numOrdersPlaced);
    }
  
    // save to database
    coffeeRun.save(function (err) {
      if (err) {
        console.log("error saving coffee order in coffee run");
      }
      helper.sendSuccessResponse(res,"Coffee Order has been placed.");
    });
  });
}

function increaseCoffeeOrderCountByOne(ordersPlaced) {
  return ordersPlaced + 1;
}
