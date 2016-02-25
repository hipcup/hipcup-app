import React from 'react'

class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='spinner'>
        <h1>Loading</h1>
        <image src='./../assets/spinner.gif' />
      </div>
    )
  }
}

export default Spinner
