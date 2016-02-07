import {
  FETCH_STORES_SUCCESS,
  FETCH_STORES_ERROR,
  UPDATE_SELECT_STORE
} from '../actions/storeActions'


// lat: 34.0157219, lng: -118.4966245

const initialState = {
  stores: '',
  error: 'none',
  defaultCenter: {lat: 40.7127, lng: 74.0059},
  userCenter: {lat: 0, lng: 0},
  zoom: 9,
  fetched: false,
  selectedStore: 'Starbucks',
  key: 0
}

export default function storeReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_STORES_SUCCESS:
      return Object.assign({}, state, {
        stores: action.stores,
        userCenter: {
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
        selectedStore: action.selectStore,
        key: action.key
      })
    default:
      return state;
  }
}

// fake data
// [
//     {
//       name: 'starbucks',
//       formatted_address: '1122 Wilshire Ave',
//       opening_hours: {
//         open_now: true
//       }
//     },
//     {
//       name: 'peets coffee',
//       formatted_address: '1123 Sunset Ave',
//       opening_hours: {
//         open_now: true
//       }
//     },
//     {
//       name: 'hipcup coffee',
//       formatted_address: '1123 Sunset Ave',
//       opening_hours: {
//         open_now: true
//       }
//     }]
