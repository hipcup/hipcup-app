export const FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS'
export const FETCH_STORES_ERROR = 'FETCH_STORES_ERROR'
export const UPDATE_SELECT_STORE = 'UPDATE_SELECT_STORE'
export const UPDATE_FETCH_STORES_HAS_BEEN_CALLED = 'UPDATE_FETCH_STORES_HAS_BEEN_CALLED' 
export const UPDATE_USER_GEOLOCATION = 'UPDATE_USER_GEOLOCATION'

export const fetchUserLocation = () => {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
    // success 
    function(pos) {
     dispatch(fetchUserGeolocation(pos.coords));
     dispatch(fetchStores(pos.coords));
    },
    // err 
    function(err) {
      console.error('ERROR(' + err.code + '): ' + err.message);
    },
    // options
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }
}

export const fetchStores = (coords) => {
  return dispatch => {
    return fetch('http://54.191.38.120/fetchnearbycoffeestores', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          lat: coords.latitude,
          lng: coords.longitude
        }),
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
          dispatch(updateSelectStore(stores.stores[0]["name"],stores.stores[0]["formatted_address"],0));
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

export const fetchCoffeeShopByName = (location) => {
  return dispatch => {
    return fetch('http://54.191.38.120/fetchcoffeeshopnearaddress', {
        method: 'POST',
        mode: 'cors',
        cache: false,
        body: JSON.stringify({
          location: location
        }),
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
          dispatch(updateSelectStore(stores.stores[0]["name"],stores.stores[0]["formatted_address"],0));
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

export const updateFetchStoresHasBeenCalled = () => {
  return dispatch => {
    dispatch(FetchStoresHasBeenCalled({status:true}));
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

const fetchUserGeolocation = (coords) => {
  console.log(coords);
  return {
    type: UPDATE_USER_GEOLOCATION,
    lat: coords.latitude,
    lng: coords.longitude
  }
}

export const FetchStoresHasBeenCalled = (obj) => {
  return {
    type: UPDATE_FETCH_STORES_HAS_BEEN_CALLED,
    status: obj.status
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
