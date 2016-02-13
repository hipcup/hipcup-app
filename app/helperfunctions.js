
exports.serverHelperFunctions = {
  sendErrorResponse: function(res, errorMessage) {
    res.send({
      err: errorMessage,
      success: false
    });
  },
  sendSuccessResponse: function(res, successMessage) {
    res.send({
      message: successMessage,
      success: true
    });
  },
  formatStoreNames: function(storeName) {
    var upperCaseName = storeName.split(' ').map(function(word) {
      return word.slice(0,1).toUpperCase() + word.slice(1);
    });
    return upperCaseName.join(' ');
  } 
}

