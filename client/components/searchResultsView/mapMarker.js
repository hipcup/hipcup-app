import React from 'react'

let imgSelected = './../assets/Chemex-green.png'
let imgNotSelected = './../assets/Chemex.png'

class Mapmarker extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={ this.props.selectStoreKey == this.props.$dimensionKey? 'selectedStore' : ''}>
        {this.props.selectStoreKey == this.props.$dimensionKey ? <span>{this.props.time}</span> : null}
        {this.props.selectStoreKey == this.props.$dimensionKey ? <img src={imgSelected} /> : <img src={imgNotSelected} />}
      </div>
    )
  }
}

export default Mapmarker;
