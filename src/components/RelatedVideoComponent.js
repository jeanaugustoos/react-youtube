import React, {Component} from 'react';
import YoutubeService from '../services/YoutubeService';

export default class RelatedVideoComponent extends Component {

  selectVideo(event) {

    event.preventDefault();

    const youtube = new YoutubeService();
    youtube.videos(this.props.id);
  }

  render() {
    
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img alt="64x64" className="media-object" data-src="holder.js/64x64" src={this.props.url} data-holder-rendered="true"  />
          </a>
        </div>
        <div className="media-body">
          <a className="media-heading" onClick={this.selectVideo.bind(this)} >{this.props.title.substr(0, 62)}</a>
          <p>{this.props.channel}</p>
        </div>
      </div>
    );
  }
}
