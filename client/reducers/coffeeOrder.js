import {
  UPDATE_COFFEE_ORDER_FORM,
  ERROR_PLACING_COFFEE_ORDER
} from '../actions/coffeeOrderActions'

const initialState = {
  drinkerName:  '',
  drinkOrder:   '',
  modifications:'',
  coffeeError: null
}

export default function coffeeOrderReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_COFFEE_ORDER_FORM:
      return Object.assign({}, state, {
        drinkerName: action.drinkerName,
        drinkOrder: action.drinkOrder,
        modifications:  action.modifications
      })
    case ERROR_PLACING_COFFEE_ORDER:
      return Object.assign({}, state, {
        coffeeError: action.err
      })
    default:
      return state;
  }
}