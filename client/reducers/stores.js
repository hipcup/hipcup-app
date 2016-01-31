import {
  FETCH_STORES_SUCCESS,
  FETCH_STORES_ERROR
} from '../actions/storeActions'

const initialState = {
  stores: ''
}

export default function storeReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_STORES_SUCCESS:
    console.log("INSIDE FETCH_STORES_SUCCESS!", action.stores)
      return Object.assign({}, state, {
        stores: action.stores
      })
    default:
      return state;
  }
}