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
      return Object.assign({}, state, {
        stores: action.stores.stores.results
      })
    default:
      return state;
  }
}
