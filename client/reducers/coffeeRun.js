import {
  UPDATE_COFFEE_RUN_FORM,
  UPDATE_COFFEE_RUN_FROM_FETCHED,
  UPDATE_FETCH_COFFEE_RUN_STATUS,
  ERROR__CREATING_COFFEE_RUN_FORM,

} from '../actions/coffeeRunActions'

const initialState = {
  coffeeRunID: '',
  runnerName: 'Someone you know',
  coffeeShop: '',
  address: '',
  timeStamp:  '',
  maxOrders:  '6',
  slackChannel: 'home',
  timeAmount: '15',
  timeUnit: 'minutes',
  coffeeRunErrorMsg: false,
  isFetchingCoffeeRun: false
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
    case ERROR__CREATING_COFFEE_RUN_FORM:
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
    default:
      return state;
  }
}