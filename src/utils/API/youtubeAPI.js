import axios from 'axios';
import { MAX_VIDEOS_TO_FETCH } from '../constants';

const KEY = 'AIzaSyCPvzFiA5qjVbnUsX0RONFCyofy7XBeyoA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: MAX_VIDEOS_TO_FETCH,
    key: KEY,
  },
});
