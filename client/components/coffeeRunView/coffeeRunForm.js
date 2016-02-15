import React from 'react'
import isValid from '../../validationHelperFunctions'
import helperFunc from '../../HelperFunctions'


class CoffeeRunForm extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.displayCoffeeForm = this.displayCoffeeForm.bind(this);
    this.displayAlphaError = this.displayAlphaError.bind(this);
    this.displayNumericError = this.displayNumericError.bind(this);
    this.displayRangeError = this.displayRangeError.bind(this);
    this.displayFormError = this.displayFormError.bind(this);
    this.setRunnerName = this.setRunnerName.bind(this);
    this.setMaxOrders = this.setMaxOrders.bind(this);
    this.setTimeAmount = this.setTimeAmount.bind(this);
    this.setTimeUnit = this.setTimeUnit.bind(this);

    this.state = {
      runnerName: '',
      maxOrders: '',
      timeAmount: '',
      timeUnit: 'minutes',
      runStatus: null,
      coffeeRunID: helperFunc.generateUniqueID(),
      isValidForm: false
    }
  }

  setRunnerName(e){
    this.setState({
      runnerName: e.target.value
    })
  }

  setMaxOrders(e){
    this.setState({
      maxOrders: e.target.value
    })
  }

  setTimeAmount(e){
    this.setState({
      timeAmount: e.target.value
    })
  }

  setTimeUnit(e){
    this.setState({
      timeUnit: e.target.value
    })
  }

  displayAlphaError(){
    return isValid.isAlpha(this.state.runnerName) ? null : <span>input must be a-z characters</span>
  }

  displayNumericError(){
    return isValid.isNumeric(this.state.maxOrders) ? null : <span>input must be 0-9 integers</span>
  }

  displayRangeError(){
    return isValid.isNumeric(this.state.timeAmount) ? null : <span>duration must be in numeric characters and less than 2 days (1440 minutes)</span>
  }

  displayFormError(){
    if(this.state.runnerName.length === 0 || this.state.maxOrders.length === 0 || this.state.timeAmount === 0) {
      this.setState({ runStatus: "Required fields cannot be left empty", isValidForm: false });
    } else if (this.displayAlphaError() || this.displayRangeError() || this.displayNumericError()) {
      this.setState({ runStatus: "Please fix all form errors before submitting", isValidForm: false});
    } else {
      this.setState({ runStatus: "Coffee run succcessfully submitted", isValidForm: true});
    }
  }

  displayCoffeeForm() {
      return (
        <form>
          <div> Make a coffee run to { this.props.selectedStore }</div>
          <span onClick={() => this.props.routeActions.goBack()}>Click to select a different coffee shop.</span>
          <div>
            <label>Name:</label>
            <input type="text" name="runnerName" ref="runnerName" onChange={this.setRunnerName} require />
            <span className="required">required</span>
            {this.displayAlphaError()}
          </div>
          <div>
            <label>Leaving In:</label>
            <input type="text" name="timeQuantity" ref="timeAmount" onChange={this.setTimeAmount} require />
            <select name="TimeUnit" ref="timeUntilDuration" onChange={this.setTimeUnit}>
              <option select value="minutes">minutes</option>
              <option value="hours">hours</option>
            </select>         
            <span className="required">required</span>
            {this.displayRangeError()}
          </div>
          <div>
            <label>Max Coffee Orders:</label>
            <input type="text" name="maxOrders" ref="maxOrders" onChange={this.setMaxOrders} require/>
            <span className="required">required</span>
            { this.displayNumericError()}
          </div>
          <div>
            <label>Slack Channel:</label>
            <select name="slackChannels" ref="slackChannel">
              <option select value="defaultChannel">Default Channel</option>
              <option value="defaultChannel2">Default Channel2</option>
            </select>
          </div>
          <button type="submit" onClick={this.handleClick}>Create Run</button>
          { this.state.runStatus }
          { this.displayServerErrorMsg() }
        </form>
      )
  }

  displayServerErrorMsg(){
    return this.props.coffeeRunErrorMsg ? <span>Coffee Run could not be created. Please re-submit and try again.</span> : null;
  }

  handleClick(e) {
    e.preventDefault();

    // check for and display any form errors 
    this.displayFormError();
    
    //refactor to use promises
    setTimeout(function() {
      if(this.state.isValidForm) {
      const { coffeeRunAction } = this.props.coffeeRunActions;
      coffeeRunAction({
        coffeeRunID:  this.state.coffeeRunID,
        runnerName:   this.refs.runnerName.value,
        coffeeShop:   this.props.selectedStore,
        address:      this.props.selectedStoreAddress,
        timeStamp:    new Date(),
        maxOrders:    this.refs.maxOrders.value,
        slackChannel: this.refs.slackChannel.value,
        timeAmount:   this.refs.timeAmount.value,
        timeUnit:     this.state.timeUnit
      });
          
      this.refs.runnerName.value = '',
      this.refs.maxOrders.value = '',
      this.refs.timeAmount.value = ''
      } 
    }.bind(this), 5);
  }

  render() {
    return (
      <div className="coffeeRunForm">
       {this.displayCoffeeForm()}
      </div>
    )
  }
}

export default CoffeeRunForm
 