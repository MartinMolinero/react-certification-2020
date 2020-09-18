import axios from 'axios';

const KEY = 'AIzaSyAQCyJbNLZhthGda6C29P3EKxcLLZCqFTY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY,
  },
});
