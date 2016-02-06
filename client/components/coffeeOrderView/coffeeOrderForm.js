import React from 'react'
import isValid from '../../validationHelperFunctions'

class CoffeeOrderForm extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.displayAlphaError = this.displayAlphaError.bind(this);
    this.displayAlphaNumericError = this.displayAlphaNumericError.bind(this);
    this.displayFormError = this.displayFormError.bind(this);
    this.setcaffeinatorName = this.setcaffeinatorName.bind(this);
    this.setDrinkOrder = this.setDrinkOrder.bind(this);

    this.state = {
      caffeinatorName: '',
      drinkOrder: '',
      modifications: '',
      orderStatus: null,
      isValidForm: false
    }
  }

  setcaffeinatorName(e){
    this.setState({
      caffeinatorName: e.target.value
    })
  }

  setDrinkOrder(e){
    this.setState({
      drinkOrder: e.target.value
    })
  }

  displayAlphaError(){
    return isValid.isAlpha(this.state.caffeinatorName) ? null : <span>input must be a-z characters</span>
  }

  displayAlphaNumericError(){
    return isValid.isAlphaNumeric(this.state.drinkOrder) ? null : <span>input must be alphanumeric characters</span>
  }

  displayFormError(){
    if(this.state.caffeinatorName.length === 0 || this.state.drinkOrder.length === 0) {
      this.setState({ orderStatus: "Required fields cannot be left empty", isValidForm: false });
    } else if (this.displayAlphaError() || this.displayAlphaNumericError()) {
      this.setState({ orderStatus: "Please fix all form errors before submitting", isValidForm: false});
    } else {
      this.setState({ orderStatus: "Order succcessfully submitted", isValidForm: true});
    }
  }

  displayServerErrorMsg(){
    return this.props.coffeeError ? <span>{ this.props.coffeeError }</span> : null;
  }

  handleClick(e) {
    e.preventDefault();

    // check for and display any form errors 
    this.displayFormError()

    if(this.state.isValidForm) {
      const { coffeeOrderAction } = this.props.coffeeOrderActions;

      coffeeOrderAction({
        caffeinatorName: this.refs.caffeinatorName.value,
        drinkOrder:  this.refs.drinkOrder.value,
        drinkSize:   this.refs.drinkSize.value,
        modifications: this.refs.modifications.value
      });

      this.refs.caffeinatorName.value = '',
      this.refs.drinkOrder.value = ''
      this.refs.modifications.value = ''    
    }
  }

  render() {
    return (
      <div className="coffeeOrderForm">
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="Input your name here" ref="caffeinatorName" placeholder="Your name" onChange={this.setcaffeinatorName} required />
            <span className="required">required</span>
            {this.displayAlphaError()}
          </div>
           <div>
            <label>Drink Order:</label>
            <input type="text" name="drinkOrder" ref="drinkOrder" placeholder="Your drink order" onChange={this.setDrinkOrder} required/>
            <span className="required">required</span>
            {this.displayAlphaNumericError()}
          </div>
          <div>
            <label>Drink Size:</label>
            <select name="drink sizes" ref="drinkSize">
              <option select value="Small">Small</option>
              <option select value="Medium">Medium</option>
              <option select value="Large">Large</option>
            </select>         
          </div>
          <div>
            <label>Modifications:</label>
            <input type="text" name="modifications" ref="modifications" placeholder="Optional" />
          </div>
          <button type="submit" onClick={this.handleClick}>Place Coffee Order</button>
          <span>{ this.state.orderStatus }</span>
          { this.displayServerErrorMsg() }
        </form>
      </div>
    )
  }
}

export default CoffeeOrderForm
