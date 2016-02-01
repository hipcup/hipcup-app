var CoffeeRun = require('../models/coffeeRun.js');

exports.createRun = function(req, res) {
  console.log("inside createRun controller");
  var coffeeRun = new CoffeeRun({
    coffeeRunID: '585848484',
    runnerName:  req.body.runnerName, 
    coffeeShop:  req.body.coffeeShop,
    maxOrders:   req.body.maxOrders,
    slackChannel:req.body.slackChannel,
    timeUntilRun: req.body.timeUntilRun
  });

  coffeeRun.save(function(err, coffeeRun) {
    console.log('coffeeRun was saved:', coffeeRun);
    if (err) {
      console.log("error: ", err);
      res.send(err);
    } else {
        res.json({
        success: true,
        message: 'User successfully saved in DB',
      });
    }
  });
}
