import axios from 'axios';
import { MAX_VIDEOS_TO_FETCH } from '../constants';

const KEY = 'AIzaSyCLInMjoN770cofyT-vgei2ji75KW0xW6Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: MAX_VIDEOS_TO_FETCH,
    key: KEY,
  },
});
