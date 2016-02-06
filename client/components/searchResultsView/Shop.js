import React from 'react'

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const {  updateSelectStore } = this.props.updateSelectStore;

     updateSelectStore(this.props.name);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
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