import React from 'react'
import Shop from './Shop'

class ShopsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { routeActions } = this.props;

    routeActions.push('/coffeeRun');
  }

  render() {
    let shops = <div></div>

    if(this.props.stores) {
      shops = this.props.stores.map((store, ind) => {
        return (<Shop name={store.name}
                      address={store.formatted_address} 
                      isOpen={store.open_now}  
                      updateSelectStore={this.props.updateSelectStore} 
                      selectStore={this.props.selectStore} 
                      selectStoreKey={this.props.selectStoreKey} 
                      storeId={ind}
                      key={ind}/>)
      }).filter(val => val !== undefined);
    } 
    return (
      <div className="shopListContainer">
        <div>
          <button onClick={this.handleClick}>make a coffee run to {this.props.selectStore}</button>
          {shops}
        </div>
      </div>
    )
  }
}

export default ShopsList
