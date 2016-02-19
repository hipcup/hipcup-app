import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <img src="../assets/hipcuplogo.png" className="logo" alt="Hipcup Logo"/>
   )
  }
}

export default Header;
