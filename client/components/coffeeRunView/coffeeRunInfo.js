import React from 'react'

class CoffeeRunInfo extends React.Component {
  constructor(){
    super();
    this.displayCoffeeInfo.bind(this);
  }
  
  componentWillMount() {
    const { fetchCoffeeRun } = this.props.coffeeRunActions;
    // the coffeeRunID is the last 9 characters of the url
    var coffeeRunID = this.props.pathname.slice(-9);
    fetchCoffeeRun(coffeeRunID);
  }

  displayCoffeeInfo() {
    var coffeeRunID = this.props.coffeeRunID;
    console.log("set time out");
    setTimeout(function() {
      if(coffeeRunID) {
        console.log("IF")
        return (
          <div>
            <h1>{this.props.runnerName} is making a run to {this.props.selectedStore}</h1>
            <h2>Add coffee store address here</h2>
            <h2>Coffee run expires at: COUNTDOWN or expired message</h2>
          </div>
        )
      } else {
        console.log("else")
        return (
          <span>Sorry, no coffee run by that ID can be found. Please re-check your code or start a new coffee run here.</span>
        )
      }
    }, 20)
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
 