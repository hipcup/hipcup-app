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
  formatNames: function(name) {
    var upperCaseName = name.split(' ').map(function(word) {
      return word.slice(0,1).toUpperCase() + word.slice(1);
    });
    return upperCaseName.join(' ');
  }
}
