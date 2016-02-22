import React from 'react'
import { routeActions } from 'react-router-redux';

class JumbotronSearch extends React.Component {
  constructor(props) {
    super(props);
    this.searchCoffeeShop = this.searchCoffeeShop.bind(this);
    this.searchNearUser = this.searchNearUser.bind(this);
  }

  componentDidMount(){
    const input = this.refs.coffeeShopLocation;
    const autocomplete = new google.maps.places.Autocomplete(input);
  }

  searchNearUser(e) {
    e.preventDefault();
    const { storeActions, routeActions } = this.props;

    storeActions.fetchStores();
    storeActions.updateFetchStoresHasBeenCalled();
    routeActions.push('/results');
  }

  searchCoffeeShop(e){
    e.preventDefault();
    const location = this.refs.coffeeShopLocation.value;
    const { storeActions, routeActions } = this.props;
 
    if(location === ''){
      return null;
    } else {
      storeActions.fetchCoffeeShopByName(location);
      storeActions.updateFetchStoresHasBeenCalled();
      routeActions.push('/results');
      this.refs.coffeeShopLocation.value = '';
    }
  }

  render() {
    return (
      <div className="jumbotron-content">
        <div className="col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xs-push-1 col-sm-push-2 col-md-push-3">
          <h1>Find Your Cup</h1>
          <form onSubmit={this.searchCoffeeShop}>
              <div className="input-group col-lg-push-2 col-md-push-2 col-sm-push-1">
                <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-search"></i></span>
                <input type="text" ref="coffeeShopLocation" className="form-control" placeholder="Find Coffee Shops Near Address ... " />
              </div>
              <a className="stores-near-user" onClick={this.searchNearUser}>Or find coffee stores near me</a>
          </form>
        </div>
      </div>
   )
  }
}

export default JumbotronSearch
