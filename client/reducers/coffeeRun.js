import {
  UPDATE_COFFEE_RUN_FORM,
  UPDATE_COFFEE_RUN_FROM_FETCHED,
  UPDATE_FETCH_COFFEE_RUN_STATUS,
  ERROR_CREATING_COFFEE_RUN_FORM,
  COFFEE_RUN_SUCCESSFULLY_CREATED,
  CLEAR_COFFEE_RUN_SUCCESSFULLY_UPDATED
} from '../actions/coffeeRunActions'

const initialState = {
  coffeeRunID: '',
  runnerName: '',
  coffeeShop: '',
  address: '',
  timeStamp:  '',
  maxOrders:  '',
  slackChannel: '',
  timeAmount: '',
  timeUnit: '',
  coffeeRunErrorMsg: false,
  isFetchingCoffeeRun: false,
  coffeeRunSuccessfullyCreated: false
}

export default function coffeeRunReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_COFFEE_RUN_FORM:
      return Object.assign({}, state, {
        coffeeRunID:  action.coffeeRunID,
        runnerName:   action.runnerName,
        coffeeShop:   action.coffeeShop,
        address:      action.address,
        timeStamp:    action.timeStamp,
        maxOrders:    action.maxOrders,
        slackChannel: action.slackChannel,
        timeAmount:   action.timeAmount,
        timeUnit:     action.timeUnit
      })
    case ERROR_CREATING_COFFEE_RUN_FORM:
      return Object.assign({}, state, {
        coffeeRunErrorMsg: action.coffeeRunErrorMsg,
        isFetchingCoffeeRun: action.isFetchingCoffeeRun
      })
    case UPDATE_COFFEE_RUN_FROM_FETCHED: 
      return Object.assign({}, state, {
        isFetchingCoffeeRun: false,
        coffeeRunID: action.coffeeRunID,
        runnerName:  action.runnerName,
        coffeeShop:  action.coffeeShop,
        address:     action.address,
        timeStamp:   action.timeStamp, 
        maxOrders:   action.maxOrders,
        slackChannel:action.slackChannel,
        timeOfRun:   action.timeOfRun
      })
      case UPDATE_FETCH_COFFEE_RUN_STATUS:
        return Object.assign({}, state, {
          isFetchingCoffeeRun: action.isFetchingCoffeeRun
      })
      case COFFEE_RUN_SUCCESSFULLY_CREATED:
        return Object.assign({}, state, {
          coffeeRunSuccessfullyCreated: action.coffeeRunSuccessfullyCreated
      })
      case CLEAR_COFFEE_RUN_SUCCESSFULLY_UPDATED:
        return Object.assign({}, state, {
          coffeeRunSuccessfullyCreated: action.coffeeRunSuccessfullyCreated
      })

    default:
      return state;
  }
}