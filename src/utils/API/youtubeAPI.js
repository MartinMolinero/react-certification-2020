import axios from 'axios';
import { VIDEOS_TO_FETCH } from '../constants';

const KEY = 'AIzaSyD3qFb0N6ibO_2y3NPF6AD4fqF-l8GPvLY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: VIDEOS_TO_FETCH,
    key: KEY,
  },
});
