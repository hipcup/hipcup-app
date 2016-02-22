import React from 'react'
import { routeActions } from 'react-router-redux';

class JumbotronSearch extends React.Component {
  constructor(props) {
    super(props);
    this.searchCoffeeShop = this.searchCoffeeShop.bind(this);
  }

  componentDidMount(){
    const input = this.refs.coffeeShopLocation;
    const autocomplete = new google.maps.places.Autocomplete(input);
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
      // this.refs.coffeeShopLocation.value = '';
    }
  }

  render() {
    return (
      <div className="jumbotron-content">
        <div className="col-xs-10 col-sm-8 col-md-8 col-lg-6 col-xs-push-1 col-sm-push-2 col-md-push-3">
          <form onSubmit={this.searchCoffeeShop}>
            <h1>Find Your Cup</h1>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-search"></i></span>
                <input type="text" ref="coffeeShopLocation" className="form-control" placeholder="Find Coffee Shops Near Address ... " />
              </div>
          </form>
        </div>
      </div>
   )
  }
}

export default JumbotronSearch
