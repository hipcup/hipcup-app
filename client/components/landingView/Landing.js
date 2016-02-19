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
      <div className="button" onClick={this.handleClick}>
        <a>Make a Run Near Me</a>
      </div>
   )
  }
}

export default Landing
