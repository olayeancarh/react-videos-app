import axios from 'axios';

const KEY = 'AIzaSyA2MtyvoctzDWeTP2Tz1-SrZBBmQkH1V8k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {part: 'snippet', maxResults: 5, key: KEY},
});