import React from 'react'

class SelectCoffeeStoreBeforeRunError extends React.Component {
  constructor(){
    super();
    this.displayRedirect = this.displayRedirect.bind(this);
  }

  displayRedirect() {
    return (
      <div>
        <span>To make a run, you will need to select a coffee store first.</span>
        <button type="submit" onClick={() => this.props.routeActions.push('/')}>Click to start a run</button>
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
 