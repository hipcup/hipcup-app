import React from 'react'
import { routeActions } from 'react-router-redux';

class MakeRunButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { fetchUserLocation, updateFetchStoresHasBeenCalled } = this.props.fetchStores;
    const { routeActions } = this.props;

    fetchUserLocation();
    updateFetchStoresHasBeenCalled();
    routeActions.push('/results');
  }

  render() {
    return (
      <div className="button header-btn">
        <a onClick={this.handleClick}>Make a Run Near Me</a>
      </div>
    )
  }
}

export default MakeRunButton
