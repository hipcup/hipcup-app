import React from 'react'
import CoffeeRunForm from '../components/coffeeRunView/CoffeeRunForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as coffeeRunActions from '../actions/coffeeRunActions'


class CoffeeRun extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <CoffeeRunForm { ...this.props }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    runnerName: state.coffeeRunReducer.runnerName,
    coffeeShop: state.coffeeRunReducer.coffeeShop,
    timeStamp:  state.coffeeRunReducer.timeStamp,
    maxOrders:  state.coffeeRunReducer.maxOrders,
    slackChannel: state.coffeeRunReducer.slackChannel,
    timeUntilRun: state.coffeeRunReducer.timeUntilRun,
    coffeeRunErrorMsg: state.coffeeRunReducer.coffeeRunErrorMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    coffeeRunActions: bindActionCreators(coffeeRunActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeRun); 
