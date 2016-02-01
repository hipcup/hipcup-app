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
  return {
    center: state.mapReducer.center,
    zoom: state.mapReducer.zoom
  }
}

export default connect(mapStateToProps, null)(MapBox); 
