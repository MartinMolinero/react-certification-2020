import axios from 'axios';

const KEY = 'AIzaSyD3qFb0N6ibO_2y3NPF6AD4fqF-l8GPvLY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY,
  },
});
