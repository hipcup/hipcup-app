import React from 'react'

let imgSelected = './../assets/map/map-coffeeshop-selected.png'
let imgNotSelected = './../assets/map/map-coffeeshop.png'

class Mapmarker extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={ this.props.selectStoreKey == this.props.$dimensionKey? 'selectedStore' : ''}>
        {this.props.selectStoreKey == this.props.$dimensionKey ? <img src={imgSelected} /> : <img src={imgNotSelected} />}
      </div>
    )
  }
}

export default Mapmarker;
