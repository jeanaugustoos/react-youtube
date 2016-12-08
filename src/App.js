import React, { Component } from 'react';
import YoutubeService from './services/YoutubeService';
import NavBarComponent from './components/NavBarComponent';
import VideoComponent from './components/VideoComponent';
import RelatedVideosComponent from './components/RelatedVideosComponent';

import './App.css';

export default class App extends Component {

  constructor() {

    super();

    const youtube = new YoutubeService();
    youtube.search({part: 'snippet', q: 'BrazilJS', type: 'video', maxResults: 10});

  }

  render() {
    return (
      <div>
        <NavBarComponent />
        <div className="container">
          <section className="col-xs-12 col-sm-9">
            <VideoComponent />
          </section>
          <aside className="col-xs-6 col-sm-3">
            <RelatedVideosComponent />
          </aside>
        </div>
      </div>
    );
  }
}
