// import { routeActions } from 'react-router-redux';

export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS'
export const FETCH_STORES_ERROR = 'FETCH_STORES_ERROR'
export const UPDATE_SELECT_STORE = 'UPDATE_SELECT_STORE'

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
          console.log("stores", stores);
          dispatch(updateSelectStore(stores.stores[0]["name"],stores.stores[0]["address"],0));
        } else {
          dispatch(fetchStoresError(stores));
        }
      } catch(e){
        console.log("catch error", e)
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
    lng: data.lng,
    fetched: true
  };
}

const fetchStoresError = (error) => {
  return {
    type: FETCH_STORES_ERROR,
    error: error
  }
}

export const updateSelectStore = (storeName, address, key) => {
  return {
    type: UPDATE_SELECT_STORE,
    selectStore: storeName,
    selectedStoreAddress: address,
    key: key
  }
}

