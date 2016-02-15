import React from 'react'
import CoffeeRunUrlBox from './coffeeRunUrlBox.js'
import CoffeeRunForm from './coffeeRunForm.js'
import SelectCoffeeStoreBeforeRunError from './selectCoffeeStoreBeforeRunError'


class makeCoffeeRun extends React.Component {
  constructor(){
    super();
    this.displayCoffeeRunState = this.displayCoffeeRunState.bind(this);
  }

  displayCoffeeRunState() {
    // if there is no selectedStore
    if(this.props.selectedStore === "") {
      return (
        <SelectCoffeeStoreBeforeRunError routeActions={this.props.routeActions} />
      )
      // if a store has been selected, but the coffee run could not be saved  
    } else if (this.props.selectedStore && !this.props.coffeeRunSuccessfullyCreated) {
      return (
        <CoffeeRunForm { ...this.props }/>
      )
    // if the coffee run is successfully saved on the db, generate a coffee run url 
    } else if(this.props.coffeeRunSuccessfullyCreated) {
      return (
        <CoffeeRunUrlBox coffeeRunID={this.props.coffeeRunID} />
      )
    }
  }

  render() {
    return (
      <div className="coffeeRunForm">
       { this.displayCoffeeRunState() }
      </div>
    )
  }
}

export default makeCoffeeRun
 