export const UPDATE_COFFEE_RUN_FORM = 'UPDATE_COFFEE_RUN_FORM'
export const UPDATE_COFFEE_RUN_FROM_FETCHED = 'UPDATE_COFFEE_RUN_FROM_FETCHED'
export const UPDATE_FETCH_COFFEE_RUN_STATUS = 'UPDATE_FETCH_COFFEE_RUN_STATUS'
export const ERROR__CREATING_COFFEE_RUN_FORM = 'ERROR__CREATING_COFFEE_RUN_FORM'

export const coffeeRunAction = (formInfo) => {
  return dispatch => {
    return fetch('http://127.0.0.1:3468/createRun', {
      method: 'POST',
      mode: 'cors',
      cache: false,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        coffeeRunID:  formInfo.coffeeRunID,
        runnerName:   formInfo.runnerName,
        coffeeShop:   formInfo.coffeeShop,
        address:      formInfo.address,
        timeStamp:    formInfo.timeStamp,
        maxOrders:    formInfo.maxOrders,
        slackChannel: formInfo.slackChannel,
        timeAmount:   formInfo.timeAmount,
        timeUnit:     formInfo.timeUnit
      })
  }).then(response => {
    return response.json();
  }).then(response => {
    console.log(response);
    try {
      if(response.success){
        dispatch(updateCoffeeRun(formInfo));
        console.log(response.message);
      } else {
        dispatch(updateCoffeeRunError());
        console.log("ERROR IN SAVE TO DATABASE", response.err);
      }
    } catch(e){
      dispatch(updateCoffeeRunError());
      console.log("error creating coffee run", e);
    }
  })
    .catch(err => console.error('Error creating coffee run:', err));
  }  
}

export const fetchCoffeeRun = (coffeeRunID) => {
  return dispatch => {
    dispatch(updateFetchCoffeeRunStatus());
    return fetch('http://127.0.0.1:3468/fetchRun', {
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
        dispatch(updateFetchedCoffeeRun(response.coffeerun));
      } else {
        dispatch(updateCoffeeRunError());
      }
    } catch(e){
      dispatch(updateCoffeeRunError());
      console.log("error creating coffee run", e);
    }
  })
    .catch(err => console.error('Error fetching coffee run:', err));
  }  
}

const updateCoffeeRun = (formInfo) => {
  return {
    type: UPDATE_COFFEE_RUN_FORM,
    coffeeRunID:formInfo.coffeeRunID,
    runnerName:   formInfo.runnerName,
    coffeeShop:   formInfo.coffeeShop,
    address:      formInfo.address,
    timeStamp:    formInfo.timeStamp,
    maxOrders:    formInfo.maxOrders,
    slackChannel: formInfo.slackChannel,
    timeAmount:   formInfo.timeAmount,
    timeUnit:     formInfo.timeUnit
  }
}

const updateCoffeeRunError = () => {
  return {
    type: ERROR__CREATING_COFFEE_RUN_FORM,
    coffeeRunErrorMsg: true,
    isFetchingCoffeeRun: false
  }
}

const updateFetchCoffeeRunStatus = () => {
  return {
    type: UPDATE_FETCH_COFFEE_RUN_STATUS,
    isFetchingCoffeeRun: true
  }  
}

const updateFetchedCoffeeRun = (coffeeRun) => {
  return {
    type: UPDATE_COFFEE_RUN_FROM_FETCHED,
    isFetchingCoffeeRun: false,
    coffeeRunID: coffeeRun.coffeeRunID,
    runnerName:  coffeeRun.runnerName,
    timeStamp:   coffeeRun.timeStamp, 
    coffeeShop:  coffeeRun.coffeeShop,
    address:     coffeeRun.address,
    maxOrders:   coffeeRun.maxOrders,
    slackChannel:coffeeRun.slackChannel,
    timeOfRun:   coffeeRun.timeOfRun
  }
}
