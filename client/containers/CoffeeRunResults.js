import React from 'react'
import RunResults from '../components/coffeeOrderResultsView/RunResults'

import * as fetchCoffeeResults from '../actions/coffeeResultsActions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as coffeeOrderActions from '../actions/coffeeOrderActions'

class CoffeeRunResults extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <RunResults { ...this.props }/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders:           state.coffeeResultsReducer.orders,
    numOrdersPlaced:  state.coffeeResultsReducer.numOrdersPlaced,
    pathname:         state.routing.location.pathname,
    isFetchingCoffeeResults: state.coffeeResultsReducer.isFetchingCoffeeResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoffeeResults: bindActionCreators(fetchCoffeeResults, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeRunResults); 
