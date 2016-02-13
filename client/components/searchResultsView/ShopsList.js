import React from 'react'
import Shop from './Shop'

class ShopsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    this.displayLoadingSpinner.bind(this);
    this.displayStores.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { routeActions } = this.props;

    routeActions.push('/makerun');
  }

  displayLoadingSpinner(){
    if(!this.props.stores.length){
      return(
        <div className='spinner'>
          <h1>Loading</h1>
          <image src='./../assets/spinner.gif' />
        </div>
      )
    } else {
      return null;
    }
  }

  displayStores() {
    if(this.props.stores) {
      return ( this.props.stores.map((store, ind) => {
        return (<Shop name={store.name}
                      address={store.formatted_address} 
                      isOpen={store.open_now}  
                      updateSelectStore={this.props.updateSelectStore} 
                      selectStore={this.props.selectStore} 
                      selectStoreKey={this.props.selectStoreKey} 
                      storeId={ind}
                      key={ind}/>)
        })
      )
    } else {
      return null
    }
  }

  render() { 
    return (
      <div className="shopListContainer">
        <div>
          <button onClick={this.handleClick}>make a coffee run to {this.props.selectStore}</button>
          <div> { this.displayStores() } </div>
          { this.displayLoadingSpinner() }
        </div>
      </div>
    )
  }
}

export default ShopsList
