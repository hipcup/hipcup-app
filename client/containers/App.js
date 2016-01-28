import React from 'react'
import { connect } from 'react-redux'
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
  null
)(App)
