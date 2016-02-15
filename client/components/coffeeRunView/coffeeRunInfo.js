import React from 'react'
import CoffeeOrderForm from '../../containers/CoffeeOrder.js'
import moment from 'moment';

class CoffeeRunInfo extends React.Component {
  constructor(){
    super();
    this.displayCoffeeInfo.bind(this);
    this.displayLoadingSpinner.bind(this);
    this.displayCoffeeOrderForm.bind(this);
    this.getTimerCountDown.bind(this);
    this.getTimeRem.bind(this);
    this.setTimeRemaining.bind(this);
    this.state = {
      timeRemaining: '',
      timerRunning: false
    };
  }
  
  componentWillMount() {
    const { fetchCoffeeRun } = this.props.coffeeRunActions;
    // the coffeeRunID is the last 9 characters of the url
    var coffeeRunID = this.props.pathname.slice(-9);
    fetchCoffeeRun(coffeeRunID);
  }

  getTimerCountDown(timeOfRun) {
    // checks if timer has already started
    if(!this.state.timerRunning){
      setInterval(() => {
        var eventTime = moment(timeOfRun);
        var currentTime = new Date();
        var duration = moment.duration(eventTime.diff(currentTime)).asMilliseconds();
        
        var seconds = Math.floor( (duration/1000) % 60 );
        var minutes = Math.floor( (duration/1000/60) % 60 );
        var hours = Math.floor( (duration/(1000*60*60)) % 24 );
        var time = 'Hours:'+hours+' Minutes: '+minutes+' Seconds: '+seconds;
        this.setTimeRemaining(time);
      }, 1000);
    }
  }

  setTimeRemaining(newTime) {
    this.setState({timerRunning: true});
    this.setState({timeRemaining: newTime});
  }

  getTimeRem() {
    return this.state.timeRemaining;
  }

  displayLoadingSpinner(){
    if(this.props.isFetchingCoffeeRun) {
      return(
        <div className='spinner'>
          <h1>Loading</h1>
          <image src='./../assets/spinner.gif' />
        </div>
      )
    } else {
      return null;
    }
  }

  displayCoffeeOrderForm() {
    // if the time of coffee run has not expired
    if(moment(this.props.timeOfRun) > moment()) {
      this.getTimerCountDown(this.props.timeOfRun);
      return (
        <CoffeeOrderForm />
      )
    } else {
      return null
    }
  }

  displayCoffeeInfo() {
    var coffeeRunID = this.props.coffeeRunID;
    if(coffeeRunID) {
      return (
        <div>
          <div>
            <h1>{this.props.runnerName} is making a run to {this.props.coffeeShop}</h1>
            <h2>{this.props.address}</h2>
            <h2>Coffee run expires at: {this.state.timeRemaining}</h2>
          </div>
          { this.displayCoffeeOrderForm() }
        </div>
      )
    } else {
      return (
        <span>Sorry, no coffee run by that ID can be found. Please re-check your code or start a new coffee run here.</span>
      )
    }
  }

  render() {
    return (
      <div>
        { this.displayCoffeeInfo() }
        { this.displayLoadingSpinner() } 
      </div>
    )
  }
}

export default CoffeeRunInfo
 