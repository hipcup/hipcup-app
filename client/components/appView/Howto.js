import React from 'react'

class HowTo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <section className="landing-howto clearfix">
        <h2>How To Make a Coffee Run</h2>
        <ul>
          <li>
          <img src="../../assets/search.png"/>
          <span className="instruction">1. Find A Coffee Shop</span>
          </li>
          <li>
            <img src="../../assets/create.png"/>
            <span className="instruction">2. Select Details About Your Run</span>
          </li>
          <li>
            <img src="../../assets/plus.png"/>
            <span className="instruction">3. Send Others an Order Link</span>
          </li>
          <li>
            <img src="../../assets/runner.png"/>
            <span className="instruction">4. Make a Run to Get the Goods</span>
          </li>
        </ul>
      </section>
    )
  }
}

export default HowTo;
