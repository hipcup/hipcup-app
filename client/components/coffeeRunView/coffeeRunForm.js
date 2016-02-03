import React from 'react'
import isValid from '../../validationHelperFunctions'

class CoffeeRunForm extends React.Component  {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.displayAlphaError = this.displayAlphaError.bind(this);
    this.displayNumericError = this.displayNumericError.bind(this);
    this.displayRangeError = this.displayRangeError.bind(this);
    this.setRunnerName = this.setRunnerName.bind(this);
    this.setMaxOrders = this.setMaxOrders.bind(this);
    this.setTimeUntilRun = this.setTimeUntilRun.bind(this);

    this.state = {
      runnerName: '',
      maxOrders: '',
      timeUntilRun: ''
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
    return isValid.isNumeric(this.state.maxOrders) ? null : <span>input must be 0-9 integers</span>
  }

  displayRangeError(){
    return isValid.isNumeric(this.state.timeUntilRun) ? null : <span>duration must be less than 2 days (1440 minutes)</span>
  }

  displayServerErrorMsg() {
    let errorMsg = this.props.coffeeRunErrorMsg ? (
      <span>Coffee Run could not be created. Please re-submit and try again.</span>) : null;

    return errorMsg;
  }

  handleClick(e) {
    e.preventDefault();

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

  render() {
    console.log('refs in run form', this.refs);
    return (
      <div className="coffeeRunForm">
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="runnerName" ref="runnerName" placeholder="Name" onChange={this.setRunnerName} />
            {this.displayAlphaError()}
          </div>
          <div>
            <label>Coffee Shop:</label>
            <select name="coffeeShops" ref="coffeeShop">
              <option select value="defaultStore">Default Store</option>
              <option value="defaultStore2">Default Store2</option>
            </select>
          </div>
          <div>
            <label>Making Coffee Run In:</label>
            <input type="text" name="timeQuantity" ref="timeUntilRun" onChange={this.setMaxOrders} required />
            <select name="timeDuration">
              <option select value="minutes">Minutes</option>
              <option value="hours">Hours</option>
            </select>         
            {this.displayNumericError()}
          </div>
          <div>
            <label>Max Coffee Orders:</label>
            <input type="text" name="maxOrders" ref="maxOrders" onChange={this.setTimeUntilRun} required/>
            { this.displayRangeError()}
          </div>
          <div>
            <label>Slack Channel:</label>
            <select name="slackChannels" ref="slackChannel">
              <option select value="defaultChannel">Default Channel</option>
              <option value="defaultChannel2">Default Channel2</option>
            </select>
          </div>
          <button type="submit" onClick={this.handleClick}>Create Run</button>
          { this.displayServerErrorMsg() }
        </form>
      </div>
    )
  }
}

// { this.state.validForm ? null : (<span>Please correct all form errors before submitting</span>) }
export default CoffeeRunForm
 