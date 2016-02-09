import React from 'react'
import Map from './Map.js'
import Mapmarker from './mapMarker.js'
import Usermarker from './userMarker.js'

class MapBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    let markers = <Mapmarker lat={this.props.defaultCenter.lat} lng={this.props.defaultCenter.lng}></Mapmarker>;
    console.log('PROPS:', this.props.userCoords.lat, this.props.userCoords.lng)
    if(this.props.fetched) {
      markers = this.props.stores.map((store, ind) => {
        return (<Mapmarker lat={store.lat} lng={store.lng} key={ind} />)
      })
      markers.push((<Usermarker lat={this.props.userCoords.lat} lng={this.props.userCoords.lng} key={markers.length} />));
    }
    console.log('MARKERS: ', markers);
    return (
      <div className="mapContainer">
        <Map { ...this.props } markers={markers}/>
      </div>
    )
  }
}

export default MapBox