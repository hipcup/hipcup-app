import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

import GoogleMap from 'google-map-react'


class Map extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { 
      center: {lat: 59.938043, lng: 30.337157}
    }
  }

  render() {
    console.log("this inside map:", this.props)
    return (
      <div style={{width:'100%', height:'600px'}}>
        <GoogleMap 
          defaultCenter={this.state.center} 
          defaultZoom={9} />
      </div>
    )
  }
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Map)
