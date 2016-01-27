import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Testing Landing</div>
     </div>
   )
  }
}

export default connect(
  null
)(Landing)
