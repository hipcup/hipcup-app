import React from 'react'

class SelectCoffeeStoreBeforeRunError extends React.Component {
  constructor(){
    super();
    this.displayRedirect = this.displayRedirect.bind(this);
  }

  displayRedirect() {
    return (
      <div className="coffeerun-redirect">
        <img src="../../assets/coffeerun.png" />
        <h2>Sorry to spill the beans</h2>
        <span>To make a run, you need to select a coffee store first.</span>
        <button type="submit" className="btn btn-default button" onClick={() => this.props.routeActions.push('/')}>Select a Store</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.displayRedirect() }
      </div>
    )
  }
}

export default SelectCoffeeStoreBeforeRunError
 