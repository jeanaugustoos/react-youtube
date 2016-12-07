import React, {Component} from 'react';


class NavBarComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#search-input" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand"><i className="glyphicon glyphicon-play-circle text-danger"></i> Project Youtube</a>
          </div>
          <div className="collapse navbar-collapse search-input" id="search-input">
            <form className="col-md-6 navbar-left">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                  <input className="form-control" placeholder="Search" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}


export default NavBarComponent;