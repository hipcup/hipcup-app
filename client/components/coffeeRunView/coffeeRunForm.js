import React from 'react'
import { connect } from 'react-redux'

class CoffeeRunForm extends React.Component  {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="coffeeRunForm">
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="runnerName" />
          </div>
          <div>
            <label>Coffee Shop:</label>
            <select name="coffeeShops">
              <option select value="defaultStore">Default Store</option>
              <option value="defaultStore2">Default Store2</option>
            </select>
          </div>
          <div>
            <label>Making Coffee Run In:</label>
            <input type="text" name="timeQuantity" />
            <select name="timeDuration">
              <option select value="minutes">Minutes</option>
              <option value="hours">Hours</option>
            </select>
          </div>
          <div>
            <label>Max Coffee Orders:</label>
            <input type="text" name="maxOrders" />
          </div>
          <div>
            <label>Slack Channel:</label>
            <select name="slackChannels">
              <option select value="defaultChannel">Default Channel</option>
              <option value="defaultChannel2">Default Channel2</option>
            </select>
          </div>
          <button type="submit" onClick={this.handleClick}>Create Run</button>
        </form>
      </div>
    )
  }
}

export default CoffeeRunForm
