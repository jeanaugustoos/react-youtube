import React, {Component} from 'react';
import YoutubeService from '../services/YoutubeService';

export default class NavBarComponent extends Component {

  constructor() {
    super();

    this.state = {searchInput: ''};
    this.searchVideo = this.searchVideo.bind(this);
    this.setSearchInput = this.setSearchInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  searchVideo(event) {

    if (event) event.preventDefault();

    const youtube = new YoutubeService();
    youtube.search({part: 'snippet', q: this.state.searchInput, type: 'video', maxResults: 10});

  }

  setSearchInput(event) {
    this.setState({searchInput: event.target.value});
  }

  handleKeyPress(target) {
    if(target.charCode === 13){
      this.searchVideo();
    }
  }

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
            <a href="#" className="navbar-brand"><i className="glyphicon glyphicon-play-circle text-danger"></i> React Youtube</a>
          </div>
          <div className="collapse navbar-collapse search-input" id="search-input">
            <form className="col-md-6 navbar-left" onSubmit={this.searchVideo.bind(this)}>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                  <input 
                    className="form-control" 
                    placeholder="Buscar" 
                    name="search-input" 
                    value={this.state.searchInput} 
                    onChange={this.setSearchInput} 
                    onKeyPress={this.handleKeyPress}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
