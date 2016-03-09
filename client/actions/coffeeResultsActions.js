export const UPDATE_COFFEE_RESULTS_FROM_FETCHED = 'UPDATE_COFFEE_RESULTS_FROM_FETCHED'
export const ERROR_CREATING_COFFEE_RESULTS_FORM = 'ERROR_CREATING_COFFEE_RESULTS_FORM'
export const UPDATE_FETCH_COFFEE_RESULTS_STATUS = 'UPDATE_FETCH_COFFEE_RESULTS_STATUS'


export const fetchCoffeeResults = (coffeeRunID) => {
  return dispatch => {
    dispatch(updateFetchCoffeeResultsStatus());
    return fetch('http://127.0.0.1:8080/fetchResults', {
      method: 'POST',
      mode: 'cors',
      cache: false,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coffeeRunID: coffeeRunID
      })
  }).then(response => {
    return response.json();
  }).then(response => {
    try {
      if(response.success){
        dispatch(updateFetchedCoffeeResults(response.coffeerun));
      } else {
        dispatch(updateCoffeeResultsError());
      }
    } catch(e){
      dispatch(updateCoffeeResultsError());
      console.log("error creating coffee results", e);
    }
  })
    .catch(err => console.error('Error fetching coffee results:', err));
  }  
}

const updateFetchedCoffeeResults = (coffeeRun) => {
  return {
    type: UPDATE_COFFEE_RESULTS_FROM_FETCHED,
    isFetchingCoffeeResults: false,
    orders:           coffeeRun.orders,
    numOrdersPlaced:  coffeeRun.numOrdersPlaced
  }
}

const updateCoffeeResultsError = () => {
  return {
    type: ERROR_CREATING_COFFEE_RESULTS_FORM,
    coffeeResultsErrorMsg: true,
    isFetchingCoffeeResults: false
  }
}

const updateFetchCoffeeResultsStatus = () => {
  return {
    type: UPDATE_FETCH_COFFEE_RESULTS_STATUS,
    isFetchingCoffeeResults: true
  }  
}
