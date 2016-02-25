import React from 'react'
import moment from 'moment';
import HelperFunctions from '../../HelperFunctions.js'

import CoffeeOrderForm from '../../containers/coffeeOrder.js'
import CoffeeRunResults from '../../containers/coffeeRunResults.js'
import SelectCoffeeStoreBeforeRunError from './selectCoffeeStoreBeforeRunError'
import Spinner from '../spinner.js'

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
      timeRemaining: ' ',
      timerRunning: false,
      timerEnded: false
    };
  }
  
  componentWillMount() {
    const { fetchCoffeeRun } = this.props.coffeeRunActions;
    // the coffeeRunID is the last 9 characters of the url
    let coffeeRunID = this.props.pathname.slice(-9);
    fetchCoffeeRun(coffeeRunID);
  }

  getTimerCountDown(timeOfRun) {
    // checks if timer has already started
    if(!this.state.timerRunning && this.state.timerRunning !== 0){
     let timer;
      timer = setInterval(() => {
        let duration = HelperFunctions.getDuration(timeOfRun)
        let time = HelperFunctions.getCountdown(duration);

        if(duration <= 0){
          clearInterval(timer);
        }

        this.setTimeRemaining(time, duration);
      }, 1000);
    }
  }

  setTimeRemaining(newTime, duration) {
    if(duration <= 0){
      this.setState({
        timeRemaining: null,
        timerEnded: true
      });
      // this.setState({timerEnded: true});
    } else {
      this.setState({
        timerRunning: true,
        timeRemaining: newTime
      });
      // this.setState({timeRemaining: newTime});
    }
  }

  getTimeRem() {
    return this.state.timeRemaining;
  }

  displayLoadingSpinner(){
    if(this.props.isFetchingCoffeeRun) {
      return(
        <Spinner />
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
      return (
        <CoffeeRunResults />
      )
    }
  }

  displayCoffeeInfo() {
    var coffeeRunID = this.props.coffeeRunID;
    if(this.props.isFetchingCoffeeRun) {
      return null
    } else if (coffeeRunID) {
      return (
        <div className="row">
          <div className="coffee-run-info col-xs-10 col-xs-push-1 col-sm-10 col-sm-push-2 col-md-5 col-md-push-1 col-lg-4 col-lg-push-1">
            <h1>{this.props.runnerName} is making a run to</h1>
            <h2>{this.props.coffeeShop}</h2>
            <span>{this.props.address}</span>
            <h4>Coffee run expire{this.state.timerEnded ? <span>d!</span> : <span>s in</span>}</h4>
            <span>{this.state.timeRemaining}</span>
          </div>
          { this.displayCoffeeOrderForm() }
        </div>
      )
    } else {
      return (
        <SelectCoffeeStoreBeforeRunError {...this.props} />
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
 