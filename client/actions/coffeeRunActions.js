export const UPDATE_COFFEE_RUN_FORM = 'UPDATE_COFFEE_RUN_FORM'
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
        runnerName:   formInfo.runnerName,
        coffeeShop:   formInfo.coffeeShop,
        timeStamp:    formInfo.timeStamp,
        maxOrders:    formInfo.maxOrders,
        slackChannel: formInfo.slackChannel,
        timeUntilRun: formInfo.timeUntilRun
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

const updateCoffeeRun = (formInfo) => {
  return {
    type: UPDATE_COFFEE_RUN_FORM,
    runnerName: formInfo.runnerName,
    coffeeShop: formInfo.coffeeShop,
    timeStamp:  formInfo.timeStamp,
    maxOrders:  formInfo.maxOrders,
    slackChannel: formInfo.slackChannel,
    timeUntilRun: formInfo.timeUntilRun,
    timeDuration: formInfo.timeDuration
  }
}

const updateCoffeeRunError = () => {
  return {
    type: ERROR__CREATING_COFFEE_RUN_FORM,
    coffeeRunErrorMsg: true
  }
}
