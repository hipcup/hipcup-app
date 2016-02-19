import React from 'react'
import Landing from '../components/landingView/Landing.js'
import CustomCoffeeShopSearch from '../components/landingView/CustomCoffeeShopSearch.js'
import { bindActionCreators } from 'redux'
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux'

import * as fetchStores from '../actions/storeActions'

class LandingBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron">
        <div className="container landing">
          <CustomCoffeeShopSearch />
          <Landing { ...this.props } />
        </div>
      </div>
   )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.storeReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStores: bindActionCreators(fetchStores, dispatch),
    actionRoute: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingBox);
