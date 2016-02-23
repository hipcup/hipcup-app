import {
  UPDATE_COFFEE_RESULTS_FROM_FETCHED,
  ERROR_CREATING_COFFEE_RESULTS_FORM,
  UPDATE_FETCH_COFFEE_RESULTS_STATUS
} from '../actions/coffeeResultsActions'

const initialState = {
  orders:           '',
  numOrdersPlaced:  0,
  coffeeResultsErrorMsg: false,
  isFetchingCoffeeResults: false
}

export default function coffeeResultsReducer(state = initialState, action) {
  switch(action.type) {
    case ERROR_CREATING_COFFEE_RESULTS_FORM:
      return Object.assign({}, state, {
        coffeeResultsErrorMsg: action.coffeeResultsErrorMsg,
        isFetchingCoffeeResults: action.isFetchingCoffeeResults
      })
    case UPDATE_COFFEE_RESULTS_FROM_FETCHED: 
      return Object.assign({}, state, {
        isFetchingCoffeeResults: false,
        orders:           action.orders,
        numOrdersPlaced:  action.numOrdersPlaced
      })
    case UPDATE_FETCH_COFFEE_RESULTS_STATUS:
        return Object.assign({}, state, {
          isFetchingCoffeeResults: action.isFetchingCoffeeResults
      })
    default:
      return state;
  }
}
