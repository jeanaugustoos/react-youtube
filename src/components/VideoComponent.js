import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import moment from 'moment';

export default class VideoComponent extends Component {

  constructor() {
    super();

    moment.locale('pt-BR');
    
    this.state = {videos: []};

    PubSub.subscribe('search-video-result', (msg, data) => {
      this.setState({video: data});
    });
  }

  render() {

    let video = {};

    if (this.state.video) {

      if (typeof this.state.video.id === 'string') {
        video.url = "http://www.youtube.com/embed/" + this.state.video.id;
      } else {
        video.url = "http://www.youtube.com/embed/" + this.state.video.id.videoId;
      }
      
      video.title = this.state.video.snippet.title;
      video.description = this.state.video.snippet.description;
      video.publishedAt = this.state.video.snippet.publishedAt;
    }

    return (
      <div className="bs-example" data-example-id="responsive-embed-16by9-iframe-youtube">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={video.url}></iframe>
        </div>
        <h3>{video.title}</h3>
        <div className="media">
          <div className="media-body">
            <h5 className="media-heading">Publicado em {moment(video.publishedAt).format('DD MMMM YYYY')}</h5>
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
