import React from 'react'
import GoogleMap from 'google-map-react'

class Map extends React.Component  {
  constructor(props) {
    super(props);
    this.displayMap = this.displayMap.bind(this);
  }

  displayMap() {
    // if user's lat and lng have been fetched, center map on those coords 
    if(this.props.userCoords) {
      return (
        <GoogleMap 
          defaultCenter={this.props.center} 
          center={{lat:this.props.userCoords.lat, lng: this.props.userCoords.lng}}
          defaultZoom={13}>
          {this.props.markers}
        </GoogleMap>
      )
    } else {
      // otherwise render the default map
      return (
         <GoogleMap 
            defaultCenter={this.props.defaultCenter} 
            defaultZoom={13}>
            {this.props.markers}
        </GoogleMap>
      )
    }
  }

  render() {
    return (
      <div style={{width:'100%', height:'700px'}}>
        { this.displayMap() }
      </div>
    )
  }
}

export default Map
