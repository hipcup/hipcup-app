import React from 'react'
import CoffeeRunForm from '../components/coffeeRunView/CoffeeRunForm'
import { connect } from 'react-redux'

class CoffeeRun extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <CoffeeRunForm { ...this.props }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, null)(CoffeeRun); 
