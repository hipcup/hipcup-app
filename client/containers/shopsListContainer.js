import React from 'react'
import ShopsList from '../components/shopListContainer/shopsList.js'

class ShopsListContainer extends React.Component {

  render() {
    return <div>
      <p>renders shopsList inside ShopsListContainerComponent</p>
      <ShopsList />
    </div>
  }
}

export default ShopsListContainer; 