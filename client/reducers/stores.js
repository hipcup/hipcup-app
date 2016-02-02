import {
  FETCH_STORES_SUCCESS,
  FETCH_STORES_ERROR
} from '../actions/storeActions'

const initialState = {
  stores: '',
  error: 'none',
  center: {lat: 0, lng: 0},
  zoom: 9
}

export default function storeReducer(state = initialState, action) {
  console.log('STATE!: ', state, 'ACTION: ', action);
  switch(action.type) {
    case FETCH_STORES_SUCCESS:
      return Object.assign({}, state, {
        stores: action.stores.results,
        center: {
          lat: action.lat,
          lng: action.lng
        }
      })
    case FETCH_STORES_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state;
  }
}
