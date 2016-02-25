
import moment from 'moment'

const HelperFunctions = {
  // Converts a random number to base 36 (numbers + letters), and grab the first 9 characters
  generateUniqueID: function() {
    return Math.random().toString(36).substr(2, 9);
  },
  getDuration: function(timeOfRun) {
    let eventTime = moment(timeOfRun);
    let currentTime = new Date();
    
    return moment.duration(eventTime.diff(currentTime)).asMilliseconds();
  },
  getCountdown: function(duration) {
    let seconds = Math.floor( (duration/1000) % 60 );
    let minutes = Math.floor( (duration/1000/60) % 60 );
    let hours =   Math.floor( (duration/(1000*60*60)) % 24 );

    return 'Hours: ' + hours + ' Minutes: '+ minutes +' Seconds: ' + seconds;
  }
}

export default HelperFunctions;
