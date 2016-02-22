import React from 'react'
import JumbotronSearch from '../components/landingView/jumbotronSearch.js'
import { bindActionCreators } from 'redux'
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux'

import * as storeActions from '../actions/storeActions'

class LandingBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron">
        <div className="container landing">
          <JumbotronSearch { ...this.props } />
        </div>
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
    storeActions: bindActionCreators(storeActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingBox);
