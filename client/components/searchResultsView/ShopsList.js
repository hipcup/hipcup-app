import React from 'react'

import Shop from './Shop.js'
import Spinner from './../spinner.js'

class ShopsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.displayLoadingSpinner = this.displayLoadingSpinner.bind(this);
    this.displayStores = this.displayStores.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { routeActions } = this.props;
    const { clearCoffeeRunSuccessfullyCreated } = this.props.coffeeRunActions;
    // reset coffee run status if user attempts to make an additional coffee run
    clearCoffeeRunSuccessfullyCreated();
    routeActions.push('/makerun');
  }

  displayLoadingSpinner(){
    if(!this.props.fetched){
      return(
        <Spinner />
      )
    } else {
      return null;
    }
  }

  displayStores() {
    if(this.props.fetched) {
      return ( this.props.stores.map((store, index) => {
        return (<Shop name={store.name}
                      address={store.formatted_address} 
                      walkingTime={store.time}
                      isOpen={store.open_now}  
                      updateSelectStore={this.props.updateSelectStore} 
                      selectStore={this.props.selectStore} 
                      selectStoreKey={this.props.selectStoreKey} 
                      storeId={index}
                      key={index}/>)
        })
      )
    } else {
      return null
    }
  }

  render() { 
    return (
      <div className="shopList">
        <div className="results"> 
          <h1>Coffee Shops</h1>
          { this.displayStores() } 
          { this.displayLoadingSpinner() }
        </div>
        <button onClick={this.handleClick} className="btn btn-submit button col-xs-10 col-xs-push-1 col-sm-10 col-sm-push-1 col-md-10 col-md-push-1 col-lg-10 col-lg-push-1">make a coffee run to {this.props.selectStore}</button>
      </div>
    )
  }
}

export default ShopsList
