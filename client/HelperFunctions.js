
const HelperFunctions = {
  // Converts a random number to base 36 (numbers + letters), and grab the first 9 characters
  generateUniqueID: function() {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default HelperFunctions;
