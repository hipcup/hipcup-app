import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { routeActions } from 'react-router-redux';

import * as fetchStores from '../actions/storeActions'

import Header from '../components/appView/header.js'
import MakeRunButton from '../components/appView/makeRunButton.js'
import Footer from '../components/appView/footer.js'

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
