import React from 'react'

class CoffeeRunResults extends React.Component {
  constructor(){
    super();
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

export default CoffeeRunResults