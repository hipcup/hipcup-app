export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS'
export const FETCH_STORES_ERROR = 'FETCH_STORES_ERROR'

export const fetchStores = () => {
  return dispatch => {
    return fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee&location='+'34.0157219'+','+'-118.4966245'+'&radius=5000&key='+'AIzaSyBoaQllaUHYrGCjasx8t8mHzNjKEZHep-4', {
        method: 'POST',
        mode: 'cors',
        cache: false,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        } 
    }).then((stores) => {
      console.log('stores!',stores)
      dispatch(fetchStoresSuccess(stores));
    })
  }
}

const fetchStoresSuccess = (stores) => {
  return {
    type: FETCH_STORES_SUCCESS,
    stores: stores
  }
}

const fetchStoresError = (err) => {
  return {
    type: FETCH_STORES_ERROR,
    err: err
  }
}
