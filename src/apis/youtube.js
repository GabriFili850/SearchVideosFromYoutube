import axios from 'axios';

const KEY = 'AIzaSyCMFkXUGTFAf3Ayyu3JggaJQdKJP9efBMY'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});