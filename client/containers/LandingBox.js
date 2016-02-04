import React from 'react'
import Landing from '../components/landingView/Landing.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as fetchStores from '../actions/storeActions'

class LandingBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Landing { ...this.props } />
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
    fetchStores: bindActionCreators(fetchStores, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingBox);
