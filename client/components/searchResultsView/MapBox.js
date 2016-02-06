import React from 'react'
import Map from './Map.js'
import Mapmarker from './mapMarker.js'

class MapBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    let markers = <Mapmarker lat={this.props.center.lat} lng={this.props.center.lng}></Mapmarker>;
    
    if(this.props.fetched) {
      markers = this.props.stores.map((store, ind) => {
        return (<Mapmarker lat={store.geometry.location.lat} lng={store.geometry.location.lng} key={ind} />)
      }).filter(val => val !== undefined);
    }

    return (
      <div className="mapContainer">
        <Map { ...this.props } markers={markers}/>
      </div>
    )
  }
}

export default MapBox
