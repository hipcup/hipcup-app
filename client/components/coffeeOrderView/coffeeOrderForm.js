import React from 'react'
import isValid from '../../validationHelperFunctions'

class CoffeeOrderForm extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.createCoffeeOrder = this.createCoffeeOrder.bind(this);
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
      this.setState({ orderStatus: "Order succcessfully submitted", isValidForm: true}, this.createCoffeeOrder);
    }
  }

  displayServerErrorMsg(){
    return this.props.coffeeError ? <span>{ this.props.coffeeError }</span> : null;
  }

  handleClick(e) {
    e.preventDefault();

    // check for and display any form errors 
    this.displayFormError()
  }

  createCoffeeOrder() {
    if(this.state.isValidForm) {
      const { coffeeOrderAction } = this.props.coffeeOrderActions;

      coffeeOrderAction({
        coffeeRunID: this.props.coffeeRunID,
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
      <div className="coffeeOrderForm order-form col-xs-10 col-xs-push-1 col-sm-10 col-sm-push-1 col-md-5 col-lg-6 col-lg-push-2">
        <article>
          <form className="form-vertical">
            <div className="form-title">
              <h4>Coffee Order</h4>
              <span>Required<span className="require-asterisk">*</span></span>
            </div>
            <div className="input-group required col-xs-12 col-sm-11">
              <label>NAME</label>
              <input type="text" className="form-control" ref="caffeinatorName" placeholder="First Name" onChange={this.setcaffeinatorName} aria-describedby="basic-addon1" />
              <span className="form-error">{this.displayAlphaError()}</span>
            </div>
             <div className="input-group required col-xs-12 col-sm-11">
              <label>DRINK ORDER</label>
              <input type="text" className="form-control"  name="drinkOrder" ref="drinkOrder" placeholder="Drink Name" onChange={this.setDrinkOrder} aria-describedby="basic-addon1" />
              <span className="form-error">{this.displayAlphaNumericError()}</span>
            </div>
            <div className="input-group required col-xs-12 col-sm-11">
              <label>DRINK SIZE</label>
              <select className="form-control" name="drink sizes" ref="drinkSize">
                <option select value="Small">Small</option>
                <option select value="Medium">Medium</option>
                <option select value="Large">Large</option>
              </select>         
            </div>
            <div className="input-group col-xs-12 col-sm-11">
              <label>MODIFICATIONS</label>
              <input type="text" className="form-control" name="modifications" ref="modifications" placeholder="Customize It" aria-describedby="basic-addon1"  />
            </div>
            <div className="input-group col-xs-12 col-sm-11">
              <button type="submit" className="btn btn-default button col-xs-12 col-sm-12 col-md-12 col-lg-12" onClick={this.handleClick}>Place Order</button>
              <span className="required-msg">Please fill out all (<span className="require-asterisk">*</span>) required fields</span>
            </div>
            <span className="order-status">{ this.state.orderStatus }</span>
            <span className="order-status">{ this.displayServerErrorMsg() }</span>
          </form>
        </article>
      </div>
    )
  }
}

export default CoffeeOrderForm
