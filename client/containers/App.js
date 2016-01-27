import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { Header, Footer } from '../components'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
        <Footer />
     </div>
   )
  }
}

export default connect(
  null,
  routeActions
)(App)
