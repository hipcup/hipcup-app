import React from 'react'
import moment from 'moment';
import HelperFunctions from '../../HelperFunctions.js'

import CoffeeOrderForm from '../../containers/CoffeeOrder.js'
import CoffeeRunResults from '../../containers/CoffeeRunResults.js'
import SelectCoffeeStoreBeforeRunError from './selectCoffeeStoreBeforeRunError'
import CountdownTimer from './countdownTimer'

class CoffeeRunInfo extends React.Component {
  constructor(props){
    super(props);
    this.displayCoffeeInfo.bind(this);
    this.displayCoffeeOrderForm.bind(this);
  }
  
  componentWillMount() {
    const { fetchCoffeeRun } = this.props.coffeeRunActions;
    // the coffeeRunID is the last 9 characters of the url
    let coffeeRunID = this.props.pathname.slice(-9);
    fetchCoffeeRun(coffeeRunID);
  }

  displayCoffeeInfo() {
    var coffeeRunID = this.props.coffeeRunID;
    if(this.props.isFetchingCoffeeRun) {
      return null
    } else if (coffeeRunID) {
      return (
        <div>
          <div className="coffee-run-info col-xs-10 col-xs-push-1 col-sm-10 col-sm-push-2 col-md-5 col-md-push-1 col-lg-4 col-lg-push-1">
            <h1>{this.props.runnerName} is making a run to</h1>
            <h2>{this.props.coffeeShop}</h2>
            <span>{this.props.address}</span>
            <CountdownTimer {...this.props} />          
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

  displayCoffeeOrderForm() {
    // if the time of coffee run has not expired
    if(moment(this.props.timeOfRun) > moment()) {
      return (
        <CoffeeOrderForm />
      )
    } else {
      return (
        <CoffeeRunResults />
      )
    }
  }

  render() {
    return (
      <div>
        { this.displayCoffeeInfo() }
      </div>
    )
  }
}

export default CoffeeRunInfo
 