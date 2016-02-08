import React from 'react'
import Map from './Map.js'
import Mapmarker from './mapMarker.js'

class MapBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    let markers = <Mapmarker lat={this.props.defaultCenter.lat} lng={this.props.defaultCenter.lng}></Mapmarker>;
    
    if(this.props.fetched) {
      markers = this.props.stores.map((store, ind) => {
        return (<Mapmarker lat={store.lat} lng={store.lng} key={ind} />)
      })
    }

    return (
      <div className="mapContainer">
        <Map { ...this.props } markers={markers}/>
      </div>
    )
  }
}

export default MapBox