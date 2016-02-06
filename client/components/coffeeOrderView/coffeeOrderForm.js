import React from 'react'
import isValid from '../../validationHelperFunctions'

class CoffeeOrderForm extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.displayAlphaError = this.displayAlphaError.bind(this);
    this.displayAlphaNumericError = this.displayAlphaNumericError.bind(this);
    this.displayFormError = this.displayFormError.bind(this);
    this.setDrinkerName = this.setDrinkerName.bind(this);
    this.setDrinkOrder = this.setDrinkOrder.bind(this);

    this.state = {
      drinkerName: '',
      drinkOrder: '',
      modifications: '',
      isValidForm: false
    }
  }

  setDrinkerName(e){
    this.setState({
      drinkerName: e.target.value
    })
  }

  setDrinkOrder(e){
    this.setState({
      drinkOrder: e.target.value
    })
  }

  displayAlphaError(){
    return isValid.isAlpha(this.state.drinkerName) ? null : <span>input must be a-z characters</span>
  }

  displayAlphaNumericError(){
    return isValid.isAlphaNumeric(this.state.drinkOrder) ? null : <span>input must be alphanumeric characters</span>
  }

  displayFormError(){
    if(!this.displayAlphaError() && !this.displayAlphaNumericError()) {
      return null;
    } else {
      return <span>Please fix all form errors before submitting</span>
    }
  }

  // displayServerErrorMsg(){
  //   return this.props.coffeeOrderErrorMsg ? <span>Coffee Run could not be created. Please re-submit and try again.</span> : null;
  // }

  handleClick(e) {
    e.preventDefault();

    // disable coffeeOrderAction if isValidForm is false
    if(!this.displayFormError() == null) {
      return;
    } 

    this.setState({ isValidForm: true });  
    const { coffeeOrderAction } = this.props.coffeeOrderActions;

    coffeeOrderAction({
      drinkerName:   this.refs.drinkerName.value,
      timeStamp:    new Date(),
      drinkOrder: this.refs.drinkOrder.value,
      modifications: this.refs.modifications.value
    });

    this.refs.drinkerName.value = '',
    this.refs.drinkOrder.value = ''
    this.refs.modifications.value = ''
  }

  render() {
    return (
      <div className="coffeeOrderForm">
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="Input your name here" ref="drinkerName" placeholder="Your name" onChange={this.setDrinkerName} require />
            {this.displayAlphaError()}
          </div>
           <div>
            <label>Drink Order:</label>
            <input type="text" name="drinkOrder" ref="drinkOrder" placeholder="Your drink order" onChange={this.setDrinkOrder} require/>
            {this.displayAlphaNumericError()}
          </div>
          <div>
            <label>Modifications:</label>
            <input type="text" name="modifications" ref="modifications" placeholder="Optional" />
          </div>
          <button type="submit" onClick={this.handleClick}>Place Coffee Order</button>
          { this.displayFormError() }
        </form>
      </div>
    )
  }
}
// { this.displayServerErrorMsg() }

export default CoffeeOrderForm