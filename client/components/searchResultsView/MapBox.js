import React from 'react'
import Map from './Map.js'
import Mapmarker from './mapMarker.js'
import Usermarker from './userMarker.js'

class MapBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    var THIS = this;
    let markers = <Mapmarker lat={this.props.defaultCenter.lat} lng={this.props.defaultCenter.lng}></Mapmarker>;

    if(this.props.fetched) {
      console.log('KEY!: ', this.props.selectStoreKey);
      markers = this.props.stores.map((store, ind) => {
        return (<Mapmarker lat={store.lat} lng={store.lng} key={ind} selectStoreKey={THIS.props.selectStoreKey} />)
      })
      markers.push((<Usermarker lat={this.props.userCoords.lat} lng={this.props.userCoords.lng} key={markers.length} />));
    }

    return (
      <div className="mapContainer">
        <Map { ...this.props } markers={markers}/>
      </div>
    )
  }
}

export default MapBox
