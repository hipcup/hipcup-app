var CoffeeRun = require('../models/coffeeRun.js');

exports.createRun = function(req, res) {
  var coffeeRun = new CoffeeRun({
    runnerName:  req.body.runnerName,
    timeStamp:   req.body.timeStamp, 
    coffeeShop:  req.body.coffeeShop,
    maxOrders:   req.body.maxOrders,
    slackChannel:req.body.slackChannel,
    timeUntilRun:req.body.timeUntilRun
  });
  console.log('coffeeRun:', coffeeRun);
  coffeeRun.save(function(err, coffeeRun) {
    console.log('coffeeRun was saved:', coffeeRun);
    if (err) {
      res.send({
        err: err,
        success: false
      });
    } else {
        res.json({
        success: true,
        message: 'Coffee Run has been created',
      });
    }
  });
}
