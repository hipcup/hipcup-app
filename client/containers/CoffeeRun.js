import React from 'react'
import MakeCoffeeRun from '../components/coffeeRunView/makeCoffeeRun'
import CoffeeRunInfo from '../components/coffeeRunView/coffeeRunInfo'

import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as coffeeRunActions from '../actions/coffeeRunActions'

class CoffeeRun extends React.Component {
  constructor(){
    super();
    this.renderCoffeeView.bind(this);

  }

  renderCoffeeView() {
    if(this.props.pathname === '/makerun') {
      return ( 
        <MakeCoffeeRun { ...this.props }/>
      )
    } else {
      return (
        <CoffeeRunInfo { ...this.props }/>
      )
    }
  } 

  render() {
    return (
      <div>
        { this.renderCoffeeView() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coffeeRunID:  state.coffeeRunReducer.coffeeRunID, 
    runnerName:   state.coffeeRunReducer.runnerName,
    coffeeShop:   state.coffeeRunReducer.coffeeShop,
    address:      state.coffeeRunReducer.address,
    timeStamp:    state.coffeeRunReducer.timeStamp,
    maxOrders:    state.coffeeRunReducer.maxOrders,
    timeDuration: state.coffeeRunReducer.timeDuration,
    slackChannel: state.coffeeRunReducer.slackChannel,
    timeUntilRun: state.coffeeRunReducer.timeUntilRun,
    timeOfRun: state.coffeeRunReducer.timeOfRun,
    coffeeRunErrorMsg:    state.coffeeRunReducer.coffeeRunErrorMsg,
    selectedStore:        state.storeReducer.selectedStore,
    selectedStoreAddress: state.storeReducer.selectedStoreAddress,
    isFetchingCoffeeRun:  state.coffeeRunReducer.isFetchingCoffeeRun,
    pathname:             state.routing.location.pathname,
    coffeeRunSuccessfullyCreated: state.coffeeRunReducer.coffeeRunSuccessfullyCreated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    coffeeRunActions: bindActionCreators(coffeeRunActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeRun); 
