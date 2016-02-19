import React from 'react'
import { routeActions } from 'react-router-redux';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron-content">
        <div className="col-xs-11 col-sm-8 col-md-9 col-lg-6 col-sm-push-2 col-md-push-3">
          <form>
            <h1>Find Your Cup</h1>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-search"></i></span>
                <input type="text" className="form-control" placeholder="Search Coffee Store" />
              </div>
          </form>
        </div>
      </div>
   )
  }
}

export default Landing
