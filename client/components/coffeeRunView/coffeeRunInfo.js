import React from 'react'
import CoffeeOrderForm from '../../containers/CoffeeOrder.js'
import moment from 'moment';

class CoffeeRunInfo extends React.Component {
  constructor(){
    super();
    this.displayCoffeeInfo.bind(this);
    this.displayLoadingSpinner.bind(this);
    this.displayCoffeeOrderForm.bind(this);
  }
  
  componentWillMount() {
    const { fetchCoffeeRun } = this.props.coffeeRunActions;
    // the coffeeRunID is the last 9 characters of the url
    var coffeeRunID = this.props.pathname.slice(-9);
    fetchCoffeeRun(coffeeRunID);
  }

  displayLoadingSpinner(){
    if(this.props.isFetchingCoffeeRun){
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
            <h2>Coffee run expires at: COUNTDOWN or expired message</h2>
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
 