import React from 'react'
import JumbotronSearch from '../components/landingView/jumbotronSearch.js'
import HowTo from '../components/appView/howTo.js'
import Footer from '../components/appView/footer.js'

import { bindActionCreators } from 'redux'
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux'

import * as storeActions from '../actions/storeActions'

class LandingBox extends React.Component {
  constructor(props) {
    super(props);
    this.displayLanding = this.displayLanding.bind(this);
  }

  displayLanding() {
    return (
      <div className="container landing">
        <JumbotronSearch { ...this.props } />
        <HowTo />
        <Footer /> 
      </div>
    )
  }

  render() {
    return (
      <div className="jumbotron">
       { this.displayLanding() }
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
