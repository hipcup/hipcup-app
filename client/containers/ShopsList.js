import React from 'react'
import Shops from '../components/shopListView/shop'

class ShopsList extends React.Component {

  render() {
    return (
      <div className="shopListContainer">
        <p>renders coffee shops inside shop component</p>
        <div>
          {Shops}
        </div>
      </div>
    )
  }
}

export default ShopsList; 