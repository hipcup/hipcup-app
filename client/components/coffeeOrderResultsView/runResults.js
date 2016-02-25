import React from 'react'
import Spinner from './../spinner.js'

class RunResults extends React.Component {
  constructor(){
    super();
    this.displayCoffeeOrderResults = this.displayCoffeeOrderResults.bind(this);
    this.displayLoadingSpinner = this.displayLoadingSpinner.bind(this);
  }

  componentWillMount() {
    const { fetchCoffeeResults } = this.props.fetchCoffeeResults;
    // the coffeeRunID is the last 9 characters of the url
    var coffeeRunID = this.props.pathname.slice(-9);
    fetchCoffeeResults(coffeeRunID);
  }

  displayLoadingSpinner(){
    if(this.props.isFetchingCoffeeResults) {
      return(
        <Spinner />
      )
    } else {
      return null;
    }
  }

  displayCoffeeOrderResults() {
    var coffeeOrders = this.props.orders;
    if(this.props.isFetchingCoffeeResults) {
      return null
    } else if (coffeeOrders.length > 0) {
      var displayCoffeeOrders = coffeeOrders.map(function(coffeeOrder, index){
        return (
          <div className="row" key={index}>
            <div className="col-xs-12 col-sm-11">
              <h3>Name: {coffeeOrder.caffeinatorName}</h3>
              <h4>Drink: {coffeeOrder.drinkOrder}</h4>
              <h4>Size: {coffeeOrder.drinkSize}</h4>
              <p>Modifications: {coffeeOrder.modifications}</p>
            </div>
          </div>
        )
      });
      return displayCoffeeOrders;
    } else {
      return (
        <span>Sorry, there are no coffee orders to display.</span>
      )
    }
  }

  render() {
    return (
      <div className="coffeeOrderForm order-form col-xs-10 col-xs-push-1 col-sm-10 col-sm-push-1 col-md-5 col-lg-6 col-lg-push-2">
       <article>
          <div className="form-title">
            <h4>Coffee Orders</h4>
          </div>
          { this.displayCoffeeOrderResults() }
        </article>
      </div>
    )
  }
}

export default RunResults
