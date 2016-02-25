import React from 'react'

let imgSrc = './../assets/map/map-runner.png'

class Usermarker extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <img src={imgSrc} />
      </div>
    )
  }
}

export default Usermarker;
