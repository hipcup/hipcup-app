import React from 'react'
import config from '../../config/config.js'

class CoffeeRunUrlBox extends React.Component {
  constructor(){
    super();
    this.displayCoffeeRunUrlBox.bind(this);
    this.generateCoffeeUrl.bind(this);
  }

  generateCoffeeUrl() {
    let uniqueID = this.props.coffeeRunID;
    return config.ip + '/' + uniqueID;
  }

  displayCoffeeRunUrlBox() {
    if(this.props.coffeeRunID) {
      let uniqueID = this.generateCoffeeUrl()
      return (
        <div className="url-box">
          <h2>Coffee Run Successfully Created</h2>
          <span>Share the link below to allow people to add coffee orders to your run </span>
          <a href={ uniqueID }>{ uniqueID }</a>
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
