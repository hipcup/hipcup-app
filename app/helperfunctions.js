
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
  }
}
