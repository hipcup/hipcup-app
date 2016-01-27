import React from 'react'
import Shop from './shop.js'

class ShopsList extends React.Component {
  render() {
    let shops = <div></div>

    if(this.props.fetched) {
      shops = this.props.data.map((store, ind) => {
        return (<Shop name={store.name} address={store.formatted_address} isOpen={store.opening_hours.open_now} key={ind}/>)
      }).filter(val => val !== undefined);
    }

    return (
      <div>
        <p>renders coffee shops inside shop component</p>
        <div>
          {shops}
        </div>
      </div>
    )
  }
}

export default ShopsList;
