import React from 'react'
import isValid from '../../validationHelperFunctions'

class CoffeeRunForm extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.displayAlphaError = this.displayAlphaError.bind(this);
    this.displayNumericError = this.displayNumericError.bind(this);
    this.displayRangeError = this.displayRangeError.bind(this);
    this.displayFormError = this.displayFormError.bind(this);
    this.setRunnerName = this.setRunnerName.bind(this);
    this.setMaxOrders = this.setMaxOrders.bind(this);
    this.setTimeUntilRun = this.setTimeUntilRun.bind(this);

    this.state = {
      runnerName: '',
      maxOrders: '',
      timeUntilRun: '',
      runStatus: null,
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

  setTimeUntilRun(e){
    this.setState({
      timeUntilRun: e.target.value
    })
  }

  displayAlphaError(){
    return isValid.isAlpha(this.state.runnerName) ? null : <span>input must be a-z characters</span>
  }

  displayNumericError(){
    return isValid.isNumeric(this.state.timeUntilRun) ? null : <span>input must be 0-9 integers</span>
  }

  displayRangeError(){
    return isValid.isNumeric(this.state.maxOrders) ? null : <span>duration must be in numeric characters and less than 2 days (1440 minutes)</span>
  }

  displayFormError(){
    if(!this.displayAlphaError() && !this.displayRangeError() && !this.displayNumericError()) {
      return null;
    } else {
      return <span>Please fix all form errors before submitting</span>
    }
  }

  displayFormError(){
    if(this.state.runnerName.length === 0 || this.state.maxOrders.length === 0 || this.state.timeUntilRun.length === 0) {
      this.setState({ runStatus: "Required fields cannot be left empty", isValidForm: false });
    } else if (this.displayAlphaError() || this.displayRangeError() || this.displayNumericError()) {
      this.setState({ runStatus: "Please fix all form errors before submitting", isValidForm: false});
    } else {
      this.setState({ runStatus: "Coffee run succcessfully submitted", isValidForm: true});
    }
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
        runnerName:   this.refs.runnerName.value,
        coffeeShop:   this.refs.coffeeShop.value,
        timeStamp:    new Date(),
        maxOrders:    this.refs.maxOrders.value,
        slackChannel: this.refs.slackChannel.value,
        timeUntilRun: this.refs.timeUntilRun.value
      });

      this.refs.runnerName.value = '',
      this.refs.maxOrders.value = '',
      this.refs.timeUntilRun.value = ''
      } 
    }.bind(this), 5);
  }

  render() {
    return (
      <div className="coffeeRunForm">
        <form>
          <div> Make a coffee to { this.props.selectedStore }</div>
          <span onClick={() => this.props.routeActions.goBack()}>Click to select a different coffee shop.</span>
          <div>
            <label>Name:</label>
            <input type="text" name="runnerName" ref="runnerName" placeholder="Name" onChange={this.setRunnerName} require />
            {this.displayAlphaError()}
          </div>
          <div>
            <label>Leaving In:</label>
            <input type="text" name="timeQuantity" ref="timeUntilRun" onChange={this.setMaxOrders} require />
            <select name="timeDuration">
              <option select value="minutes">Minutes</option>
              <option value="hours">Hours</option>
            </select>         
            {this.displayRangeError()}
          </div>
          <div>
            <label>Max Coffee Orders:</label>
            <input type="text" name="maxOrders" ref="maxOrders" onChange={this.setTimeUntilRun} require/>
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
      </div>
    )
  }
}

export default CoffeeRunForm
 