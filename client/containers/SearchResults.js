import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MapBox from '../components/searchResultsView/MapBox'
import ShopsList from '../components/searchResultsView/ShopsList'

import { routeActions } from 'react-router-redux';
import * as updateSelectStore from '../actions/storeActions'

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
  return {
    center: state.storeReducer.center,
    zoom: state.storeReducer.zoom,
    fetched: state.storeReducer.fetched,
    stores: state.storeReducer.stores,
    selectStore: state.storeReducer.selectedStore,
    selectStoreKey: state.storeReducer.key
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectStore: bindActionCreators(updateSelectStore, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults); 
