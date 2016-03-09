import React from 'react'

class CoffeeRunUrlBox extends React.Component {
  constructor(){
    super();
    this.displayCoffeeRunUrlBox.bind(this);
    this.generateCoffeeUrl.bind(this);
  }
  
  generateCoffeeUrl() {
    var uniqueID = this.props.coffeeRunID
    return 'http://ec2-54-191-38-120.us-west-2.compute.amazonaws.com/' + uniqueID
  }

  displayCoffeeRunUrlBox() {
    if(this.props.coffeeRunID) {
      var uniqueID = this.generateCoffeeUrl()
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
 