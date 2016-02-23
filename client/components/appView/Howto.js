import React from 'react'

class HowTo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div>
        <section className="landing-howto">
          <h2>How It Works</h2>
          <div className="row">
            <ul>
              <li className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="../../assets/landing/search.png"/>
              <h3 className="instruction">1. Find A Nearby Coffee Shop</h3>
              <span>Search coffee shops near you or by specific address. Any coffee shop. Worldwide.</span>

              </li>
              <li className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="../../assets/landing/create.png"/>
                <h3 className="instruction">2. Select Details about Run</h3>
                <span>Select coffee order and notification preferences. Send link to as many people as you would like!</span>
              </li>
              <li className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="../../assets/landing/plus.png"/>
                <h3 className="instruction">3. Send Out an Order Link</h3>
                <span>Send a link to friends or co-workers that allows them to place orders to your run.</span>
              </li>
              <li className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="../../assets/landing/runner.png"/>
                <h3 className="instruction">4. Make a Run, Pick Up Orders</h3>
                <span>All the coffee orders sent right to your phone. Notify everyone with the click of a button</span>
              </li>
            </ul>
          </div>
        </section>
        <div className="landing-sections">
          <section className="section-worldwide-outer">
            <div className="inner">
              <h2>Make a run to any coffee store, anywhere.</h2>
              <p>Type in an address, find the shops nearby. Worldwide.</p>
            </div>
          </section>
          <section className="section-slack-outer">
            <div className="inner">
              <h2>Slack Integration</h2>
              <p>Create and notify others about your coffee run from Slack</p>
            </div>
          </section>
          <section className="section-notification-outer">
            <div className="inner">
              <h2>Coffee Orders Delivered On The Go</h2>
              <p>Get coffee orders sent directly to your phone.</p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default HowTo;
