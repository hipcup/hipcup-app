import React from 'react'
import CoffeeOrderForm from '../components/coffeeOrderView/CoffeeOrderForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as coffeeOrderActions from '../actions/coffeeOrderActions'

class CoffeeOrder extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <CoffeeOrderForm { ...this.props }/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    caffeinatorName: state.coffeeOrderReducer.caffeinatorName,
    coffeeRunID:     state.coffeeRunReducer.coffeeRunID,
    drinkOrder:      state.coffeeOrderReducer.drinkOrder,
    drinkSize:       state.coffeeOrderReducer.drinkSize,
    modifications:   state.coffeeOrderReducer.modifications,
    coffeeError:     state.coffeeOrderReducer.coffeeError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    coffeeOrderActions: bindActionCreators(coffeeOrderActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeOrder); 

