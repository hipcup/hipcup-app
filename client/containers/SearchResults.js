import React from 'react'
import { connect } from 'react-redux'
import MapBox from './MapBox'
import ShopsList from './ShopsList'

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className="searchResults">
        <MapBox />
        <ShopsList />
      </div>
   )
  }
}

export default connect(
  state => ({})
)(SearchResults)



