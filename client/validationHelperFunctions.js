
var validationHelperFunctions = {
  isAlpha: function(input) {
    if( /[^a-zA-Z\s]/.test(input)) {
       return false;
    }
    return true;     
  },
  isNumeric: function(input) {
    if( /[^0-9]/.test(input)) {
       return false;
    }
    return true;     
  },
  isAlphaNumeric: function(input) {
    if( /[^a-zA-Z0-9\s]/.test(input)) {
       return false;
    }
    return true;     
  },
  isInRange: function(input) {
    if(input < 0 || input >= 1440) {
       return false;
    }
    return true;     
  }
}

export default validationHelperFunctions;