import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'

function Landing({ number, increase, decrease }) {
  return (
    <div>Testing Landing</div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Landing)


//   Some state changes:
//   {number}
//   <button onClick={() => increase(1)}>Increase</button>
//   <button onClick={() => decrease(1)}>Decrease</button>
