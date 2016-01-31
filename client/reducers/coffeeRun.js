import {
  UPDATE_COFFEE_RUN_FORM,
} from '../actions/coffeeRunActions'

const initialState = {
  runnerName: 'Someone you know',
  coffeeShop: '',
  timeStamp:  '',
  maxOrders:  '6',
  slackChannel: 'home',
  timeUntilRun: '15'
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
    default:
      return state;
  }
}