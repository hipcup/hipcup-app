import React from 'react'
import Shop from '../components/shopListView/shop'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ShopsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let shops = <div></div>

    if(this.props.stores) {
      shops = this.props.stores.map((store, ind) => {
        return (<Shop name={store.name} address={store.formatted_address} isOpen={store.opening_hours.open_now} key={ind}/>)
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

const mapStateToProps = (state) => {
  console.log('stores',state.storeReducer.stores);
  return {
    stores: state.storeReducer.stores
  }
}

export default connect(mapStateToProps,null)(ShopsList);
