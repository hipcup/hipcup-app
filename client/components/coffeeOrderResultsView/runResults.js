import React from 'react'
import Spinner from './../spinner.js'

class RunResults extends React.Component {
  constructor(){
    super();
    this.displayCoffeeOrderResults = this.displayCoffeeOrderResults.bind(this);
  }

  componentWillMount() {
    const { fetchCoffeeResults } = this.props.fetchCoffeeResults;
    // the coffeeRunID is the last 9 characters of the url
    var coffeeRunID = this.props.pathname.slice(-9);
    fetchCoffeeResults(coffeeRunID);
  }

  displayCoffeeOrderResults() {
    var coffeeOrders = this.props.orders;
    if(this.props.isFetchingCoffeeResults) {
      return null
    } else if (coffeeOrders.length > 0) {
      var displayCoffeeOrders = coffeeOrders.map(function(coffeeOrder, index){
        return (
          <li className="order" key={index}>
            <div className="order-img">
              <img src="../../assets/search/search-selected-runner.png" />
            </div>
            <div className="order-content">
              <h5>{coffeeOrder.caffeinatorName}</h5>
              <div>Order:{coffeeOrder.drinkOrder} </div>
              <div>Size: {coffeeOrder.drinkSize} </div>
              { coffeeOrder.modifications ? <p>Modifications: {coffeeOrder.modifications}</p> : null } 
            </div>
          </li>
        )
      });
      return displayCoffeeOrders;
    } else {
      return (
        <div>Sorry, there are no coffee orders to display.</div>
      )
    }
  }

  render() {
    return (
      <div className="runResults col-xs-10 col-xs-push-1 col-sm-10 col-sm-push-1 col-md-5 col-lg-6 col-lg-push-2">
        <div className="results">
          <h1>Coffee Orders</h1>
          <ul>
            { this.displayCoffeeOrderResults() }
          </ul>
        </div>
      </div>
    )
  }
}

export default RunResults
