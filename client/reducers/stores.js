import {
  FETCH_STORES_SUCCESS,
  FETCH_STORES_ERROR,
  UPDATE_SELECT_STORE
} from '../actions/storeActions'

const initialState = {
  stores: '',
  error: 'none',
  center: {lat: 34.0157219, lng: -118.4966245},
  zoom: 9,
  fetched: false,
  selectedStore: ''
}

export default function storeReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_STORES_SUCCESS:
      return Object.assign({}, state, {
        stores: action.stores.results,
        center: {
          lat: action.lat,
          lng: action.lng
        },
        fetched: action.fetched
      })
    case FETCH_STORES_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })
    case UPDATE_SELECT_STORE:
      return Object.assign({}, state, {
        selectedStore: action.selectStore
      })
    default:
      return state;
  }
}
