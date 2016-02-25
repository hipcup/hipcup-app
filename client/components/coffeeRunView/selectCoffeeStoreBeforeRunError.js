import React from 'react'

class SelectCoffeeStoreBeforeRunError extends React.Component {
  constructor(props){
    super(props);
    this.displayRedirect = this.displayRedirect.bind(this);
    this.displayCoffeeRunError = this.displayCoffeeRunError.bind(this);
  }

  displayRedirect() {
    if (this.props.pathname === '/makerun') {
      return (
        <span>To make a run, you need to select a coffee shop first.</span>
      )
    } else {
      return (
        <span>No coffee run by that ID can be found. Please re-check your code or start a new coffee run.</span>
      )
    }
  }

  displayCoffeeRunError() {
    return (
      <div className="coffeerun-redirect">
        <img src="../../assets/coffeerun.png" />
        <h2>Sorry to spill the beans</h2>
        { this.displayRedirect() }
        <button type="submit" className="btn btn-default button" onClick={() => this.props.routeActions.push('/')}>Select a Shop</button>
      </div>
    )
  }

  render() {
    return (
      <div>
       { this.displayCoffeeRunError() }
      </div>
    )
  }
}

export default SelectCoffeeStoreBeforeRunError
 