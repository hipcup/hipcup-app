import {
  UPDATE_COFFEE_RUN_FORM,
  ERROR__CREATING_COFFEE_RUN_FORM
} from '../actions/coffeeRunActions'

const initialState = {
  runnerName: 'Someone you know',
  coffeeShop: '',
  timeStamp:  '',
  maxOrders:  '6',
  slackChannel: 'home',
  timeUntilRun: '15',
  coffeeRunErrorMsg: false
}

export default function coffeeRunReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_COFFEE_RUN_FORM:
      return Object.assign({}, state, {
        runnerName: action.runnerName,
        coffeeShop: action.coffeeShop,
        timeStamp:  action.timeStamp,
        maxOrders:  action.maxOrders,
        slackChannel: action.slackChannel,
        timeUntilRun: action.timeUntilRun
      })
    case ERROR__CREATING_COFFEE_RUN_FORM:
      return Object.assign({}, state, {
        coffeeRunErrorMsg: action.coffeeRunErrorMsg
      })
    default:
      return state;
  }
}