import React from 'react'

class Usermarker extends React.Component {
  constructor(props) {
    super(props);
    this.displayUserMarker = this.displayUserMarker.bind(this);
  }
  
  displayUserMarker() {
    return (
      <img src="./../assets/map/map-runner.png"/>
    )
  }

  render() {
    return (
      <div>
        { this.displayUserMarker() }
      </div>
    )
  }
}

export default Usermarker;
