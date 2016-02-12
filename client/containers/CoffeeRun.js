import React from 'react'
import CoffeeRunForm from '../components/coffeeRunView/CoffeeRunForm'
import CoffeeRunInfo from '../components/coffeeRunView/CoffeeRunInfo'

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
        <CoffeeRunForm { ...this.props }/>
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
    coffeeRunID:state.coffeeRunReducer.coffeeRunID, 
    runnerName: state.coffeeRunReducer.runnerName,
    coffeeShop: state.coffeeRunReducer.coffeeShop,
    timeStamp:  state.coffeeRunReducer.timeStamp,
    maxOrders:  state.coffeeRunReducer.maxOrders,
    timeDuration: state.coffeeRunReducer.timeDuration,
    slackChannel: state.coffeeRunReducer.slackChannel,
    timeUntilRun: state.coffeeRunReducer.timeUntilRun,
    coffeeRunErrorMsg: state.coffeeRunReducer.coffeeRunErrorMsg,
    selectedStore: state.storeReducer.selectedStore,
    pathname: state.routing.location.pathname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    coffeeRunActions: bindActionCreators(coffeeRunActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeRun); 
