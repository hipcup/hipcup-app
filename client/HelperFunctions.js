
import moment from 'moment'

const HelperFunctions = {
  // Converts a random number to base 36 (numbers + letters), and grab the first 9 characters
  generateUniqueID: function() {
    return Math.random().toString(36).substr(2, 9);
  },
  getDuration: function(timeOfRun) {
    let eventTime = moment(timeOfRun);
    let currentTime = new moment();
    
    return moment.duration(eventTime.diff(currentTime));
  },
  getCountdown: function(time) {
    let seconds = time.get('second');
    let minutes = time.get('minute');
    let hours =   time.get('hour');    

    return hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds ';
  }
}

export default HelperFunctions;
