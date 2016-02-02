import React from 'react'
import Map from '../components/mapView/Map.js'
import { connect } from 'react-redux'

class MapBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="mapContainer">
        <Map { ...this.props }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    center: state.storeReducer.center,
    zoom: state.storeReducer.zoom
  }
}

export default connect(mapStateToProps, null)(MapBox); 
