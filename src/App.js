import React, { Component } from 'react';
import NavBarComponent from './NavBarComponent';
import VideoComponent from './VideoComponent';
import RelatedVideoComponent from './RelatedVideoComponent';

import youtube from 'youtube-finder';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor() {

    super();

    this.state = {videos: []};

    let client = youtube.createClient({key: 'AIzaSyAHoTN2lk-bvVAOI_sHXVWTXWrbrTofWiQ'});

    client.search({part: 'snippet', q: 'corinthians', type: 'video', maxResults: 5}, (err, data) => {
      
      this.state = {videos: data.items};
    });
  }

  render() {
    return (
      <div>
        <NavBarComponent />
        <div className="container">
          <section className="col-xs-12 col-sm-9">
            <VideoComponent videoURL={"http://www.youtube.com/embed/" + this.state.videos[0].id.videoId} />
          </section>
          <aside className="col-xs-6 col-sm-3">
            <h4>Vídeos Relacionados</h4>
            <RelatedVideoComponent />
            <RelatedVideoComponent />
            <RelatedVideoComponent />
            <RelatedVideoComponent />
            <RelatedVideoComponent />
            <RelatedVideoComponent />
            <RelatedVideoComponent />
            <RelatedVideoComponent />
            <RelatedVideoComponent />
            <RelatedVideoComponent />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
