import React from 'react'
import Shop from '../components/shopListView/shop'

class ShopsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let shops = <div></div>

    if(this.props.stores) {
      shops = this.props.stores.map((store, ind) => {
        return (<Shop name={store.name} address={store.formatted_address} isOpen={store.opening_hours.open_now}  updateSelectStore={this.props.updateSelectStore} key={ind}/>)
      }).filter(val => val !== undefined);
    }
      
    return (
      <div className="shopListContainer">
        <div>
          {shops}
        </div>
      </div>
    )
  }
}

export default ShopsList
