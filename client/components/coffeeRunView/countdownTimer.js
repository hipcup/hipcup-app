import React from 'react'
import moment from 'moment';
import CountdownHelpers from '../../helpers/countdownHelpers.js'

class CountdownTimer extends React.Component {
  constructor(){
    super();
    this.setCountdown     = this.setCountdown.bind(this);
    this.updateCountdown  = this.updateCountdown.bind(this);
    this.clearCountdown   = this.clearCountdown.bind(this);
    this.displayCountdown = this.displayCountdown.bind(this);
    this.state = {
      timeRemaining: '',
      timerId: ''
    };
  }

  componentWillMount() {
    let timerId = this.setCountdown(this.props.timeOfRun);
    this.setState({timerId: timerId});
  }

  componentWillUnmount() {
    this.clearCountdown(this.state.timerId);
  }

  setCountdown(timeOfRun) {
    return setInterval(() => {
      let duration = CountdownHelpers.getDuration(timeOfRun)
      let time = CountdownHelpers.getCountdown(duration);

      this.updateCountdown(time, duration);
    }, 1000);
  }

  updateCountdown(newTime, duration) {
    if(duration <= 0){
      this.clearCountdown(this.state.timerId);
      this.setState({timeRemaining: null});
    } else {
      this.setState({timeRemaining: newTime});
    }
  }

  clearCountdown(timer) {
    clearInterval(timer);
  }

  displayCountdown() {
    if(moment(this.props.timeOfRun) > moment()) {
      return (
        <div>
          <h4>Coffee run expires in</h4>
          <span>{this.state.timeRemaining}</span>
        </div>
      )
    } else {
      return (
        <div>
          <h4>Sorry, this run has already taken place!</h4>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        { this.displayCountdown() }
      </div>
    )
  }
}

export default CountdownTimer
