import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MapBox from '../components/searchResultsView/MapBox'
import ShopsList from '../components/searchResultsView/ShopsList'

import { routeActions } from 'react-router-redux';
import * as updateSelectStore from '../actions/storeActions'
import * as coffeeRunActions from '../actions/coffeeRunActions'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.displaySearchResults = this.displaySearchResults.bind(this);
  }

  displaySearchResults() {
    if(!this.props.fetchStoresHasBeenCalled) {
      return (
        this.props.routeActions.push('/')
      )
    } else {
      return(
        <div className="searchResults">
          <MapBox { ...this.props }/>
          <ShopsList { ...this.props }/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        { this.displaySearchResults() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    defaultCenter: state.storeReducer.defaultCenter,
    userCoords: state.storeReducer.userCenter,
    zoom: state.storeReducer.zoom,
    fetched: state.storeReducer.fetched,
    stores: state.storeReducer.stores,
    selectStore: state.storeReducer.selectedStore,
    selectStoreKey: state.storeReducer.key,
    fetchStoresHasBeenCalled: state.storeReducer.fetchStoresHasBeenCalled
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectStore: bindActionCreators(updateSelectStore, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch),
    coffeeRunActions: bindActionCreators(coffeeRunActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults); 
