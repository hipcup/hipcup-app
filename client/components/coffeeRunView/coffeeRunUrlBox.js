import React from 'react'

class CoffeeRunUrlBox extends React.Component {
  constructor(){
    super();
    this.displayCoffeeRunUrlBox.bind(this);
    this.generateCoffeeUrl.bind(this);
  }
  
  generateCoffeeUrl(coffeeRunID) {
    return (
      <a src="">generate urls for coffeerun: coffeeRunID</a>
    )
  }

  displayCoffeeRunUrlBox() {
    if(this.props.coffeeRunID) {
      return (
        <div>
          <h3>Share the link below to allow people to add coffee orders to your run </h3>
          { this.generateCoffeeUrl(this.props.coffeeRunID) }
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        { this.displayCoffeeRunUrlBox() }
      </div>
    )
  }
}

export default CoffeeRunUrlBox
 