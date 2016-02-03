import React from 'react'

class CoffeeRunForm extends React.Component  {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { coffeeRunAction } = this.props.coffeeRunActions;

    coffeeRunAction({
      runnerName: this.refs.runnerName.value,
      coffeeShop: this.refs.coffeeShop.value,
      timeStamp:  new Date(),
      maxOrders:  this.refs.maxOrders.value,
      slackChannel: this.refs.slackChannel.value,
      timeUntilRun: this.refs.timeUntilRun.value
    });

    this.refs.runnerName.value = '',
    this.refs.maxOrders.value = '',
    this.refs.timeUntilRun.value = ''
  }

  shouldDisplayErrorMessage() {
    let errorMsg = this.props.coffeeRunErrorMsg ? (
      <span>Coffee run could not be created. Please re-submit and try again.</span>) : null;

    return errorMsg;
  }

  render() {
    return (
      <div className="coffeeRunForm">
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="runnerName" ref="runnerName" />
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
            <input type="text" name="timeQuantity" ref="timeUntilRun" />
            <select name="timeDuration">
              <option select value="minutes">Minutes</option>
              <option value="hours">Hours</option>
            </select>
          </div>
          <div>
            <label>Max Coffee Orders:</label>
            <input type="text" name="maxOrders" ref="maxOrders"/>
          </div>
          <div>
            <label>Slack Channel:</label>
            <select name="slackChannels" ref="slackChannel">
              <option select value="defaultChannel">Default Channel</option>
              <option value="defaultChannel2">Default Channel2</option>
            </select>
          </div>
          <button type="submit" onClick={this.handleClick}>Create Run</button>
          { this.shouldDisplayErrorMessage() }
        </form>
      </div>
    )
  }
}

export default CoffeeRunForm
 