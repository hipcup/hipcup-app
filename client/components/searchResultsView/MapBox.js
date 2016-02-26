import React from 'react'
import Map from './map.js'
import Mapmarker from './mapMarker.js'
import Usermarker from './userMarker.js'

class MapBox extends React.Component {
  constructor(props) {
    super(props);
    this.displayMapMarkers = this.displayMapMarkers.bind(this);
  }

  displayMapMarkers() {
    if(this.props.fetched) {
      let markers = this.props.stores.map((shop, index) => {
        return (
          <Mapmarker 
           lat={shop.lat} 
           lng={shop.lng} 
           key={index} 
           selectStoreKey={this.props.selectStoreKey} 
           time={shop.time} 
           distance={shop.distance} />
        )
      });
      markers.push((<Usermarker lat={this.props.userCoords.lat} lng={this.props.userCoords.lng} key={markers.length} />))
      return markers
    } else {
      return (
        <Mapmarker 
          lat={this.props.defaultCenter.lat} 
          lng={this.props.defaultCenter.lng}>
        </Mapmarker>
      )
    }
  }

  render() {
    let mapMarkers = this.displayMapMarkers();

    return (
      <div className="map">
        <Map { ...this.props } markers={ mapMarkers }/>
      </div>
    )
  }
}

export default MapBox
