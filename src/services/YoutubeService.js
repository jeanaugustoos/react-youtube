import YoutubeFinder from 'youtube-finder';
import PubSub from 'pubsub-js';

const YOUTUBE_API_KEY = 'AIzaSyAHoTN2lk-bvVAOI_sHXVWTXWrbrTofWiQ';

export default class YoutubeService {

  
  search(params) {

    let client = YoutubeFinder.createClient({key: YOUTUBE_API_KEY});
    
    client.search(params, (err, data) => {
      
    if (err) PubSub.publish('err-search-videos', err);

      PubSub.publish('search-video-result', data.items[0]);
    });
  }


  searchCallback(params, callback) {

    let client = YoutubeFinder.createClient({key: YOUTUBE_API_KEY});
    
    client.search(params, (err, data) => {
      callback(err, data);
    });
  }


  videos(query) {

    let client = YoutubeFinder.createClient({key: YOUTUBE_API_KEY});

    client._request('/videos', {part: 'snippet', id: query, type: 'video', maxResults: 10}, (err, data) => {
      
      if (err) PubSub.publish('err-search-videos', err);

      PubSub.publish('search-video-result', data.items[0]);
    });
  }
}