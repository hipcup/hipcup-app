import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { routeActions } = this.props;
    routeActions.push('/')
  }

  render() {
    return ( 
      <img onClick={this.handleClick} src="../assets/hipcuplogo.png" className="logo" alt="Hipcup Logo"/>
   )
  }
}

export default Header;
