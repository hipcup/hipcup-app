export const UPDATE_COFFEE_RUN_FORM = 'UPDATE_COFFEE_RUN_FORM'

export const coffeeRunAction = (formInfo) => {
  return dispatch => {
    dispatch(updateCoffeeRun(formInfo));
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
    timeUntilRun: formInfo.timeUntilRun
  }
}
