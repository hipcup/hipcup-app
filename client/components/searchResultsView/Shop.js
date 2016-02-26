import React from 'react'

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.displaySelectedStoreImg = this.displaySelectedStoreImg.bind(this);
    this.displayShop = this.displayShop.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { updateSelectStore } = this.props.updateSelectStore;
    
    updateSelectStore(this.props.name, this.props.address, this.props.storeId);
  }

  displaySelectedStoreImg() {
    if(this.props.selectStoreKey === this.props.storeId) {
      return (
        "../../assets/map/map-coffeeshop-selected.png"
      )
    } else {
      return (
        "../../assets/map/map-coffeeshop.png" 
      )
    }
  }

  displayShop() {
    return (
      <div onClick={this.handleClick} className={this.props.selectStoreKey === this.props.storeId ? 'selectedStore' : ''}>
        <div className="shop">
          <div className="shop-icon"><img src={this.displaySelectedStoreImg()} /> </div>
          <ul>
            <li><h5 className="storeName">{this.props.name}</h5></li>
            <li>{this.props.address}</li>
            <li className="walking">Walking: {this.props.walkingTime}</li>
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return (
     <div>
       { this.displayShop() }
     </div>
    )
  }
}

export default Shop;
