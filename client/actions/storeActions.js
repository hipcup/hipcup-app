export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS'
export const FETCH_STORES_ERROR = 'FETCH_STORES_ERROR'

export const fetchStores = () => {
  return dispatch => {
    return fetch('http://127.0.0.1:3468/google', {
        method: 'POST',
        mode: 'cors',
        cache: false,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        } 
    }).then(stores => {
      return stores.json();
    }).then(stores => {
      try {
        if(stores.stores){
          dispatch(fetchStoresSuccess(stores));
        } else {
          dispatch(fetchStoresError(stores));
        }
      } catch(e){
        dispatch(fetchStoresError(stores));
      }
    })
    .catch(err => console.error('Error in Fetch Stores:', err));
  }
}

const fetchStoresSuccess = (data) => {
  return {
    type: FETCH_STORES_SUCCESS,
    stores: data.stores,
    lat: data.lat,
    lng: data.lng
  }
}

const fetchStoresError = (err) => {
  return {
    type: FETCH_STORES_ERROR,
    error: error
  }
}
