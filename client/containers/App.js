import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import { Header, Footer } from '../components'

function App({ push, children }) {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '1.5em' }}>{children}</div>
      <Footer />
    </div>
  )
}

export default connect(
  null,
  routeActions
)(App)


// <header>
//   Links:
//   {' '}
//   <Link to="/">Landing</Link>
//   {' '}
//   <Link to="/Results">Results</Link>
// </header>
// <div>
//   <button onClick={() => push('/foo')}>Go to /foo</button>
// </div>
// <div style={{ marginTop: '1.5em' }}>{children}</div>
