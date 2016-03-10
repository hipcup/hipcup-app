export const UPDATE_COFFEE_ORDER_FORM = 'UPDATE_COFFEE_ORDER_FORM'
export const ERROR_PLACING_COFFEE_ORDER = 'ERROR_PLACING_COFFEE_ORDER'

export const coffeeOrderAction = (formInfo) => {
  return dispatch => {
    return fetch('http://54.191.38.120/placeOrder', {
      method: 'POST',
      mode: 'cors',
      cache: false,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        coffeeRunID:     formInfo.coffeeRunID,
        caffeinatorName: formInfo.caffeinatorName,
        drinkOrder:      formInfo.drinkOrder,
        drinkSize:       formInfo.drinkSize,
        modifications:   formInfo.modifications
      })
  }).then(response => {
    return response.json();
  }).then(response => {
    try {
      if(response.success){
        dispatch(placeCoffeeOrder(formInfo));
      } else {
        dispatch(updateCoffeeOrderError(response.err));
        console.log("ERROR IN SAVE TO DATABASE", response.err);
      }
    } catch(e){
      dispatch(updateCoffeeOrderError(e));
      console.log("error creating coffee order", e);
    }
  })
    .catch(err => console.error('Error placing coffee order:', err));
  }  
}

const placeCoffeeOrder = (formInfo) => {
  return {
    type: UPDATE_COFFEE_ORDER_FORM,
    caffeinatorName: formInfo.caffeinatorName,
    drinkOrder:      formInfo.drinkOrder,
    drinkSize:       formInfo.drinkSize,
    modifications:   formInfo.modifications

  }
}

const updateCoffeeOrderError = (err) => {
  return {
    type: ERROR_PLACING_COFFEE_ORDER,
    err: err
  }
}
