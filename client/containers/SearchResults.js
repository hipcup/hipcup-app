import React from 'react'
import { connect } from 'react-redux'
import MapBox from './MapBox'
import ShopsList from './ShopsList'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className="searchResults">
        <MapBox { ...this.props }/>
        <ShopsList { ...this.props }/>
      </div>
   )
  }
}


const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    center: state.storeReducer.center,
    zoom: state.storeReducer.zoom,
    fetched: state.storeReducer.fetched,
    stores: state.storeReducer.stores
  }
}

export default connect(mapStateToProps, null)(SearchResults); 
