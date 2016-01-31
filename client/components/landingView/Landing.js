import React from 'react'

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.props.fetchStores, 'here')
    const { fetchStores } = this.props.fetchStores;

    fetchStores();
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
