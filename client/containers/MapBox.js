import React from 'react'
import Map from '../components/mapView/Map.js'
import Mapmarker from '../components/mapView/mapMarker.js'
import { connect } from 'react-redux'

class MapBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    let markers = <Mapmarker lat={this.props.center.lat} lng={this.props.center.lng}></Mapmarker>;
    // let map = <GoogleMap
    //  //bootstrapURLKeys={{key: this.props.googleKey}}
    //  defaultCenter={this.props.center}
    //  defaultZoom={13}>
    //   {markers}
    //  </GoogleMap>

    console.log('PROPS', this.props);
    if(this.props.fetched) {
      markers = this.props.stores.map((store, ind) => {
        return (<Mapmarker lat={this.props.center.lat} lng={this.props.center.lng} key={ind} />)
      }).filter(val => val !== undefined);

     //  map = <GoogleMap
     //   //bootstrapURLKeys={{key: this.props.googleKey}}
     //   defaultCenter={this.props.center}
     //   defaultZoom={this.props.zoom}
     //   center={this.props.center}>
     //    {markers}
     // </GoogleMap>
    }



    return (
      <div className="mapContainer">
        <Map { ...this.props } markers={markers}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    center: state.storeReducer.center,
    zoom: state.storeReducer.zoom,
    fetched: state.storeReducer.fetched,
    stores: state.storeReducer.stores
  }
}

export default connect(mapStateToProps, null)(MapBox); 
