import React from 'react'

class RunResults extends React.Component {
  constructor(){
    super();
  }

  componentWillMount() {
    console.log('componentWillMount inside RunResults');
    const { fetchCoffeeResults } = this.props.fetchCoffeeResults;
    // the coffeeRunID is the last 9 characters of the url
    var coffeeRunID = this.props.pathname.slice(-9);
    fetchCoffeeResults(coffeeRunID);
  }

  render() {
    console.log('PROPS!', this.props);
    return (
      <div>
       hello!
      </div>
    )
  }
}

export default RunResults
