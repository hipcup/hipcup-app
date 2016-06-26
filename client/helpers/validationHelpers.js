
const validationHelpers = {
  isAlpha: function(input) {
    if( /[^a-zA-Z\s\s.,"']/.test(input)) {
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
    if( /[^a-zA-Z0-9\s_.,!"'/]/.test(input)) {
       return false;
    }
    return true;
  },
  isInRange: function(input) {
    if(typeof input !== "number") {
      return false;
    }

    if (!isNumeric(input)) {
      return false;
    }

    if(input < 0 || input >= 1440) {
       return false;
    }
    return true;
  }
}

export default validationHelpers;
