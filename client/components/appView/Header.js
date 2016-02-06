import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className="logo-box">
        <img src="../assets/Hipcup_logo.png" className="logo" alt="Hipcup Logo"/>
      </div>
   )
  }
}

export default Header;
