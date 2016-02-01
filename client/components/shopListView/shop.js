import React from 'react'

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="store">
          <li><span className="storeName">{this.props.name}</span></li>
          <li>{this.props.address}</li>
          <li>Open: {JSON.stringify(this.props.isOpen)}</li>
        </ul>
      </div>
    )
  }
}

export default Shop;
