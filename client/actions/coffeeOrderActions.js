export const UPDATE_COFFEE_ORDER_FORM = 'UPDATE_COFFEE_ORDER_FORM'
export const ERROR_PLACING_COFFEE_ORDER = 'ERROR_PLACING_COFFEE_ORDER'

export const coffeeOrderAction = (formInfo) => {
  return dispatch => {
    return fetch('http://127.0.0.1:3468/placeOrder', {
      method: 'POST',
      mode: 'cors',
      cache: false,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        // remove hardcoded coffeeRunID
        coffeeRunID:  "56b5647b2f9fea9f12773e97",
        drinkerName:  formInfo.drinkerName,
        drinkOrder:   formInfo.drinkOrder,
        modifications:formInfo.modifications
      })
  }).then(response => {
    return response.json();
  }).then(response => {
    try {
      if(response.success){
        dispatch(placeCoffeeOrder(formInfo));
        console.log(response.message);
      } else {
        dispatch(updateCoffeeOrderError());
        console.log("ERROR IN SAVE TO DATABASE", response.err);
      }
    } catch(e){
      dispatch(updateCoffeeOrderError());
      console.log("error creating coffee order", e);
    }
  })
    .catch(err => console.error('Error placing coffee order:', err));
  }  
}

const placeCoffeeOrder = (formInfo) => {
  return {
    type: UPDATE_COFFEE_ORDER_FORM,
    drinkerName:  formInfo.drinkerName,
    drinkOrder:   formInfo.drinkOrder,
    modifications:formInfo.modifications

  }
}

const updateCoffeeOrderError = () => {
  return {
    type: ERROR_PLACING_COFFEE_ORDER,
    coffeeOrderErrorMsg: true
  }
}
