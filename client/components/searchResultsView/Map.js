import React from 'react'
import GoogleMap from 'google-map-react'

class Map extends React.Component  {
  constructor(props) {
    super(props);
  }

  render() {
    // render GoogleMap with default center initially 
    let map = <GoogleMap 
                defaultCenter={this.props.defaultCenter} 
                defaultZoom={13}>
                {this.props.markers}
              </GoogleMap>

    // if user's lat and lng have been fetched, center map on those coords 
    if(this.props.userCoords) {
      map = <GoogleMap 
                defaultCenter={this.props.center} 
                center={{lat:this.props.userCoords.lat, lng: this.props.userCoords.lng}}
                defaultZoom={13}>
                {this.props.markers}
            </GoogleMap>
    }

    return (
      <div style={{width:'100%', height:'700px'}}>
        {map}
      </div>
    )
  }
}

export default Map
