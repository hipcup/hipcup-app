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
    // if(this.state.isValidForm && !this.props.coffeeRunErrorMsg) {
    //   return (
    //     <CoffeeRunUrlBox coffeeRunID={this.state.coffeeRunID} />
    //   )
    // } else 
    if(this.props.selectedStore) {
      return (
        <CoffeeRunForm { ...this.props }/>
      )
    } else {
      return (
        <SelectCoffeeStoreBeforeRunError routeActions={this.props.routeActions} />
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
 