import { UPDATE_USER_CORD } from '../actions/map.js'

const initialState = {
  center: {lat: 34.0157219, lng: -118.4966245},
  zoom: 9
}

export default function mapReducer( state = initialState, action ) {
  switch(action.type) {
    //case UPDATE_USER_CORD:
      // return Object.assign({}, state, {
      //   center: {lat: , lng:}
      // })
    default:
      return state;
  }
}
