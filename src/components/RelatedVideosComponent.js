import React, {Component} from 'react';
import RelatedVideoComponent from './RelatedVideoComponent';
import PubSub from 'pubsub-js';
import YoutubeService from '../services/YoutubeService';

export default class RelatedVideosComponent extends Component {

  constructor() {
    super();

    this.state = {videos: []};

    PubSub.subscribe('search-video-result', (msg, data) => {
      
      let id = typeof  data.id === 'string' ? data.id : data.id.videoId;
    
      const youtube = new YoutubeService();
      youtube.searchCallback({part: 'snippet', relatedToVideoId: id, type: 'video', maxResults: 10}, (err, data) => {
        
        this.setState({videos: data.items});
      });

    });
  }

  render() {
    
    return (
      <div>
        <h4>Vídeos Relacionados</h4>
        {
          this.state.videos.map((data) => {

            return (
              <RelatedVideoComponent 
                key={data.id.videoId} 
                id={data.id.videoId} 
                url={data.snippet.thumbnails.default.url} 
                title={data.snippet.title} 
                channel={data.snippet.channelTitle}
              />
            );

          })
        }
      </div>
    );
  }
}