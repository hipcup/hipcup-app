import React from 'react'
import { connect } from 'react-redux'
import Map from './Map'

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div>
        Testing Results
        <Map />
      </div>
   )
  }
}

export default connect(
  state => ({})
)(Results)

