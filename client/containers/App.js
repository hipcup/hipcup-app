import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { routeActions } from 'react-router-redux';

import * as fetchStores from '../actions/storeActions'

import Header from '../components/appView/Header.js'
import MakeRunButton from '../components/appView/makeRunButton.js'
import Footer from '../components/appView/Footer.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header { ...this.props } />
        <MakeRunButton { ...this.props } />
        <div>{this.props.children}</div>
        <Footer />
     </div>
   )
  }
}


const mapStateToProps = (state) => {
  return {
    error: state.storeReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStores: bindActionCreators(fetchStores, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
