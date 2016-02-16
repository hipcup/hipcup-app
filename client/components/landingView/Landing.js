import React from 'react'
import { routeActions } from 'react-router-redux';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { fetchStores, updateFetchStoresHasBeenCalled } = this.props.fetchStores;
    const { actionRoute, } = this.props;

    fetchStores();
    updateFetchStoresHasBeenCalled();
    actionRoute.push('/results');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Find nearby coffee shops</button>
     </div>
   )
  }
}

export default Landing
