import React from 'react'
import GoogleMap from 'google-map-react'


class Map extends React.Component  {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{width:'100%', height:'600px'}}>
        <GoogleMap 
          defaultCenter={this.props.center} 
          defaultZoom={13}>
          {this.props.markers}
        </GoogleMap>
      </div>
    )
  }
}

export default Map
